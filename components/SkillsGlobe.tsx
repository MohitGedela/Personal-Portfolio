"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { CSS2DObject, CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer.js";
import { skills } from "@/lib/data";

/** Even spherical layout like a tag-cloud globe */
function fibonacciSphere(count: number) {
  const points: THREE.Vector3[] = [];
  const offset = 2 / count;
  const increment = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i += 1) {
    const y = i * offset - 1 + offset / 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const phi = i * increment;
    points.push(new THREE.Vector3(Math.cos(phi) * r, y, Math.sin(phi) * r).normalize());
  }
  return points;
}

export function SkillsGlobe() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = host.clientWidth || 520;
    let height = width;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    camera.position.z = 6.8;

    const pixelRatio = Math.min(Math.max(window.devicePixelRatio || 1, 1), 3);
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
      precision: "highp",
    });
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.inset = "0";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    host.appendChild(renderer.domElement);

    const labelRenderer = new CSS2DRenderer();
    labelRenderer.setSize(width, height);
    Object.assign(labelRenderer.domElement.style, {
      position: "absolute",
      inset: "0",
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      overflow: "visible",
    });
    host.appendChild(labelRenderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // Smaller sphere so more icons stay in view around the silhouette
    const radius = 1.35;
    const geo = new THREE.IcosahedronGeometry(radius, 3);
    const wire = new THREE.LineSegments(
      new THREE.WireframeGeometry(geo),
      new THREE.LineBasicMaterial({
        color: 0x7eb6ff,
        transparent: true,
        opacity: 0.32,
        depthWrite: false,
      }),
    );
    group.add(wire);

    const shell = new THREE.Mesh(
      geo,
      new THREE.MeshBasicMaterial({
        color: 0x152238,
        transparent: true,
        opacity: 0.12,
        depthWrite: false,
        side: THREE.FrontSide,
      }),
    );
    group.add(shell);

    // Icons sit on the sphere surface (not floating far out)
    const dirs = fibonacciSphere(skills.length);
    const iconRadius = radius * 1.06;
    const labels: CSS2DObject[] = [];
    const depthOrder: { label: CSS2DObject; depth: number }[] = [];

    dirs.forEach((dir, index) => {
      const skill = skills[index];
      const el = document.createElement("div");
      el.className = "skill-chip";
      const iconSrc = skill.src ?? `https://skillicons.dev/icons?i=${skill.icon}`;
      el.innerHTML = `<div class="skill-chip-inner"><img src="${iconSrc}" alt="${skill.name}" width="64" height="64" decoding="async" /><span>${skill.name}</span></div>`;
      const label = new CSS2DObject(el);
      label.position.copy(dir).multiplyScalar(iconRadius);
      group.add(label);
      labels.push(label);
      depthOrder.push({ label, depth: 0 });
    });

    let dragging = false;
    let lastX = 0;
    let lastY = 0;
    let velocityX = 0;
    let velocityY = 0;
    let auto = !reduced;
    let frame = 0;

    const worldPos = new THREE.Vector3();
    const toCam = new THREE.Vector3();
    const facingDir = new THREE.Vector3();
    const xAxis = new THREE.Vector3(1, 0, 0);
    const yAxis = new THREE.Vector3(0, 1, 0);

    const spin = (dx: number, dy: number) => {
      group.rotateOnWorldAxis(xAxis, dy);
      group.rotateOnWorldAxis(yAxis, dx);
    };

    const onPointerDown = (event: PointerEvent) => {
      dragging = true;
      auto = false;
      lastX = event.clientX;
      lastY = event.clientY;
      host.setPointerCapture(event.pointerId);
    };
    const onPointerMove = (event: PointerEvent) => {
      if (!dragging) return;
      const dx = event.clientX - lastX;
      const dy = event.clientY - lastY;
      lastX = event.clientX;
      lastY = event.clientY;
      velocityX = dy * 0.0055;
      velocityY = dx * 0.0055;
      spin(velocityY, velocityX);
    };
    const onPointerUp = (event: PointerEvent) => {
      dragging = false;
      host.releasePointerCapture(event.pointerId);
      window.setTimeout(() => {
        if (!dragging && !reduced) auto = true;
      }, 1400);
    };

    host.addEventListener("pointerdown", onPointerDown);
    host.addEventListener("pointermove", onPointerMove);
    host.addEventListener("pointerup", onPointerUp);
    host.addEventListener("pointercancel", onPointerUp);

    const tick = () => {
      frame = window.requestAnimationFrame(tick);

      if (auto && !dragging) {
        spin(0.0038, 0.0006);
      } else if (!dragging) {
        spin(velocityY, velocityX);
        velocityX *= 0.95;
        velocityY *= 0.95;
        if (Math.abs(velocityX) < 0.00005) velocityX = 0;
        if (Math.abs(velocityY) < 0.00005) velocityY = 0;
      }

      labels.forEach((label, index) => {
        const dir = dirs[index];
        label.getWorldPosition(worldPos);
        toCam.copy(camera.position).sub(worldPos).normalize();
        facingDir.copy(dir).applyQuaternion(group.quaternion);
        const facing = facingDir.dot(toCam);
        // Soft front/back like the reference tag-cloud
        const front = THREE.MathUtils.clamp((facing + 0.35) / 1.35, 0, 1);

        const el = label.element as HTMLDivElement;
        const inner = el.firstElementChild as HTMLDivElement | null;
        // Back icons stay readable but clearly behind — opacity only (no blur filters)
        el.style.opacity = String((0.28 + front * 0.72).toFixed(3));
        el.style.zIndex = String(Math.round(front * 200));
        if (inner) {
          const scale = Math.round((0.68 + front * 0.38) * 100) / 100;
          inner.style.transform = `scale(${scale})`;
          inner.style.filter = "none";
        }

        depthOrder[index].depth = facing;
      });

      // Paint order: back labels first so front icons sit on top
      depthOrder
        .slice()
        .sort((a, b) => a.depth - b.depth)
        .forEach((entry) => {
          labelRenderer.domElement.appendChild(entry.label.element);
        });

      renderer.render(scene, camera);
      labelRenderer.render(scene, camera);
    };
    tick();

    const onResize = () => {
      width = host.clientWidth || 520;
      height = width;
      camera.aspect = 1;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(Math.max(window.devicePixelRatio || 1, 1), 3));
      renderer.setSize(width, height);
      labelRenderer.setSize(width, height);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      host.removeEventListener("pointerdown", onPointerDown);
      host.removeEventListener("pointermove", onPointerMove);
      host.removeEventListener("pointerup", onPointerUp);
      host.removeEventListener("pointercancel", onPointerUp);
      labels.forEach((label) => {
        label.element.remove();
        group.remove(label);
      });
      geo.dispose();
      (wire.geometry as THREE.BufferGeometry).dispose();
      (wire.material as THREE.Material).dispose();
      (shell.material as THREE.Material).dispose();
      renderer.dispose();
      renderer.domElement.remove();
      labelRenderer.domElement.remove();
    };
  }, []);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[540px]">
      <div ref={hostRef} className="absolute inset-0 cursor-grab active:cursor-grabbing" />
      <p className="pointer-events-none absolute bottom-1 left-0 right-0 z-10 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">
        Drag to explore skills
      </p>
    </div>
  );
}

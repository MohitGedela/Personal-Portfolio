"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { CSS2DObject, CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer.js";
import { skills } from "@/lib/data";

export function SkillsGlobe() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = host.clientWidth || 560;
    let height = Math.max(420, Math.min(560, width * 0.85));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 5.2;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.inset = "0";
    host.appendChild(renderer.domElement);

    const labelRenderer = new CSS2DRenderer();
    labelRenderer.setSize(width, height);
    labelRenderer.domElement.style.position = "absolute";
    labelRenderer.domElement.style.inset = "0";
    labelRenderer.domElement.style.pointerEvents = "none";
    host.appendChild(labelRenderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const geo = new THREE.IcosahedronGeometry(1.75, 2);
    const wire = new THREE.LineSegments(
      new THREE.WireframeGeometry(geo),
      new THREE.LineBasicMaterial({
        color: 0x7eb6ff,
        transparent: true,
        opacity: 0.55,
      }),
    );
    group.add(wire);

    const shell = new THREE.Mesh(
      geo,
      new THREE.MeshBasicMaterial({
        color: 0x3b82f6,
        transparent: true,
        opacity: 0.06,
        side: THREE.DoubleSide,
      }),
    );
    group.add(shell);

    const fibonacci = (count: number) => {
      const points: THREE.Vector3[] = [];
      const offset = 2 / count;
      const increment = Math.PI * (3 - Math.sqrt(5));
      for (let i = 0; i < count; i += 1) {
        const y = i * offset - 1 + offset / 2;
        const radius = Math.sqrt(1 - y * y);
        const phi = i * increment;
        points.push(new THREE.Vector3(Math.cos(phi) * radius, y, Math.sin(phi) * radius));
      }
      return points;
    };

    const points = fibonacci(skills.length);
    const labels: CSS2DObject[] = [];

    skills.forEach((skill, index) => {
      const el = document.createElement("div");
      el.className = "skill-chip";
      el.innerHTML = `<img src="https://skillicons.dev/icons?i=${skill.icon}" alt="${skill.name}" width="40" height="40" /><span>${skill.name}</span>`;
      const object = new CSS2DObject(el);
      object.position.copy(points[index].multiplyScalar(2.2));
      group.add(object);
      labels.push(object);
    });

    let dragging = false;
    let lastX = 0;
    let lastY = 0;
    let velocityX = 0;
    let velocityY = 0;
    let auto = !reduced;
    let frame = 0;

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
      velocityX = dy * 0.005;
      velocityY = dx * 0.005;
      group.rotation.x += velocityX;
      group.rotation.y += velocityY;
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
        group.rotation.y += 0.004;
        group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, -0.18, 0.02);
      } else if (!dragging) {
        group.rotation.x += velocityX;
        group.rotation.y += velocityY;
        velocityX *= 0.94;
        velocityY *= 0.94;
      }
      group.rotation.x = Math.max(-0.7, Math.min(0.7, group.rotation.x));
      renderer.render(scene, camera);
      labelRenderer.render(scene, camera);
    };
    tick();

    const onResize = () => {
      width = host.clientWidth || 560;
      height = Math.max(420, Math.min(560, width * 0.85));
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
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
    <div className="relative mx-auto h-[min(560px,78vw)] w-full max-w-[620px]">
      <div ref={hostRef} className="absolute inset-0 cursor-grab overflow-hidden active:cursor-grabbing" />
      <p className="pointer-events-none absolute bottom-2 left-0 right-0 z-10 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
        Drag to explore skills
      </p>
    </div>
  );
}

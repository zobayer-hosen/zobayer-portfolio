"use client";

import { useEffect, useState } from "react";
import { roles } from "@/data/profile";

/** Types and deletes each role in turn; screen readers get the full list from the sr-only text instead. */
export default function TypedRole() {
  const [text, setText] = useState(roles[0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let r = 0;
    let c = roles[0].length;
    let deleting = true;
    let timer: ReturnType<typeof setTimeout>;

    const loop = () => {
      const word = roles[r];
      if (deleting) {
        c--;
        setText(word.slice(0, c));
        if (c === 0) {
          deleting = false;
          r = (r + 1) % roles.length;
        }
        timer = setTimeout(loop, c === 0 ? 350 : 30);
      } else {
        const next = roles[r];
        c++;
        setText(next.slice(0, c));
        if (c === next.length) {
          deleting = true;
          timer = setTimeout(loop, 2200);
        } else {
          timer = setTimeout(loop, 60);
        }
      }
    };

    timer = setTimeout(loop, 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <span id="typed-role" aria-hidden="true">
      {text}
    </span>
  );
}

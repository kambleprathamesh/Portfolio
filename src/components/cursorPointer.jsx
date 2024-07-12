import React, { useState, useEffect } from "react";
import "../App.css"
import "../index.css"

function CursorPointer() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const cursorMover = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", cursorMover);
    return () => {
      document.removeEventListener("mousemove", cursorMover);
    };
  }, []);

  return (
    <div
      className="cursor-circle hidden md:block "
      style={{ left: position.x + "px", top: position.y + "px" }}
    ></div>
  );
}

export default CursorPointer;

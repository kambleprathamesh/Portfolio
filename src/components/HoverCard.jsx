

import React, { useEffect, useState } from "react";

export const Hover = () => {
  const [tiltStyle, setTiltStyle] = useState("");
  const [borderStyle, setBorderStyle] = useState({
    borderTop: "none",
    borderBottom: "none",
    borderLeft: "none",
    borderRight: "none",
  });

  useEffect(() => {
    const card = document.querySelector(".card");

    const handleMouseMove = (ev) => {
      const blob = card.querySelector(".blob");
      const fakeblob = card.querySelector(".fakeblob");
      const rect = fakeblob.getBoundingClientRect();

      const x = ev.clientX - rect.left - rect.width / 2;
      const y = ev.clientY - rect.top - rect.height / 2;

      blob.style.transform = `translate(${x}px, ${y}px)`;
      blob.style.opacity = "1";

      const tiltX = (ev.clientY / window.innerHeight - 0.5) * 2 * 30; // Enhanced tilt
      const tiltY = (0.5 - ev.clientX / window.innerWidth) * 2 * 30; // Enhanced tilt

      setTiltStyle(`rotateX(${tiltX}deg) rotateY(${tiltY}deg)`);

      // Determine which borders to make visible based on mouse position
      const boundingRect = card.getBoundingClientRect();
      const mouseXRelativeToCard = ev.clientX - boundingRect.left;
      const mouseYRelativeToCard = ev.clientY - boundingRect.top;

      const borders = {
        borderTop:
          mouseYRelativeToCard <= boundingRect.height / 2 &&
          mouseXRelativeToCard > boundingRect.width / 2
            ? "4px solid #79e9a2"
            : "none",
        borderBottom:
          mouseYRelativeToCard > boundingRect.height / 2 &&
          mouseXRelativeToCard > boundingRect.width / 2
            ? "4px solid #79e9a2"
            : "none",
        borderLeft:
          mouseXRelativeToCard <= boundingRect.width / 2 &&
          mouseYRelativeToCard < boundingRect.height / 2
            ? "4px solid #79e9a2"
            : "none",
        borderRight:
          mouseXRelativeToCard > boundingRect.width / 2 &&
          mouseYRelativeToCard < boundingRect.height / 2
            ? "4px solid #79e9a2"
            : "none",
      };

      setBorderStyle(borders);
    };

    const handleMouseLeave = () => {
      const blob = card.querySelector(".blob");
      blob.style.opacity = "0";
      setTiltStyle("");
      setBorderStyle({
        borderTop: "none",
        borderBottom: "none",
        borderLeft: "none",
        borderRight: "none",
      });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className=" w-full h-[50vh] relative mt-[10rem]  ">
      <div
        className="card w-[650px] h-[400px] mx-auto p-2 z-0 overflow-hidden rounded-lg relative"
        style={{ transform: tiltStyle, ...borderStyle }}
      >
        <div className="w-80% h-full felx justify-center text-xl  font-sans font-semibold overflow-auto">
          <pre style={{ color: "#79e9a2", whiteSpace: "pre-line" }}>
            1. &lt;!DOCTYPE html&gt; <br></br>
            2. &lt;html lang="en"&gt;<br></br>
            3. &lt;head&gt;<br></br>
            4. &lt;meta charset="UTF-8"&gt; <br></br>
            5. &lt;meta name="viewport" initial-scale=1.0"&gt;<br></br>
            6. &lt;title&gt;My Portfolio&lt;/title&gt; <br></br>
            7. &lt;link rel="stylesheet" href="styles.css"&gt;<br></br>
            8. &lt;/head&gt; <br></br>
            9. &lt;body&gt; <br></br>
            10. &lt;h1&gt;Welcome to My Portfolio&lt;/h1&gt; <br></br>
            11. &lt;/body&gt; <br></br>
            12.&lt;/html&gt;<br></br>
          </pre>
        </div>

        <div className="blob w-[100px] h-[100px] rounded-full bg-[#79e9a29a] absolute"></div>
        <div className="fakeblob w-full h-full absolute top-0 left-0"></div>
      </div>
    </section>
  );
};

/* eslint-disable jsx-a11y/heading-has-content */
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

function Title() {
  const titleRef = useRef(null); 

  useEffect(() => {
    const titleElement = titleRef.current;

    const timeline = gsap.timeline();

    timeline.fromTo(
      titleElement,
      { text: "T" },
      {
        duration: 5,
        text: "The history of sneeeakerrs",
        ease: "power1.inOut",
        delay: 0.5,
      }
    );

    
    const originalText = "The history of sneeeakerrs";
    const backspaceDuration = 1.5; 
    const removeChars = originalText.length - "The history of".length; 

    for (let i = 0; i < removeChars; i++) {
      timeline.to(titleElement, {
        duration: backspaceDuration / removeChars,
        text: originalText.slice(0, -i - 1),
        ease: "none",
      });
    }

    
    timeline.to(titleElement, {
      duration: 2,
      text: "The history of sneakers",
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="top">
      <h1 ref={titleRef}></h1>
    </div>
  );
}

export default Title;

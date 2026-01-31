"use client";
import { useState } from "react";

import "./color-select.css";

export function ColorSelect({ colors }: any) {
  const [activeIndex, setActiveIndex] = useState(0);

  function changeActive(index: number) {
    setActiveIndex(index);
  }

  return (
    <ul className="color-select">
      {colors.map(function (color: string, index: number) {
        let classActive = "";
        if (index == activeIndex) {
          classActive = "active";
        }
        return (
          <li
            key={index}
            onClick={function () {
              changeActive(index);
            }}
          >
            <span
              className={"color-select-border " + classActive}
              style={{ borderColor: color }}
            >
              <span style={{ backgroundColor: color }}></span>
            </span>
          </li>
        );
      })}
    </ul>
  );
}

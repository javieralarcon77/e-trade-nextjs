"use client";

import { useState } from "react";
import "./bar-top.css";

export function BarTop() {
  // var mostrar = false;
  const [mostrar, setMostrar] = useState(true);

  return (
    <div>
      {mostrar && (
        <div className="bar-top">
          <div>
            <p>Open Doors To a World of Fashion</p>
            <a href="#">Discover More</a>
          </div>
          <button
            onClick={function () {
              setMostrar(false);
            }}
          >
            <img src="/icons/x.png" width={10} />
          </button>
        </div>
      )}
    </div>
  );
}

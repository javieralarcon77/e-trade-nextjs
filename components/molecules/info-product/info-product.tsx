import { Calification } from "@/components/atoms/calification/calification";
import { useState } from "react";

import "./info-product.css";

const TABS = [
  { key: "description", label: "Description" },
  { key: "information", label: "Aditional Information" },
  { key: "reviews", label: "Reviews" },
];

export function InfoProduct({ product }: any) {
  const [tabActive, setTabActive] = useState<any>("description");

  return (
    <div className="info-product">
      <ul>
        {TABS.map(function (tab, index) {
          return (
            <li
              className={tabActive === tab.key ? "active" : ""}
              onClick={function () {
                setTabActive(tab.key);
              }}
            >
              {tab.label}
            </li>
          );
        })}
      </ul>

      {/* <ul>
        <li
          className={tabActive === "description" ? "active" : ""}
          onClick={function () {
            setTabActive("description");
          }}
        >
          Description
        </li>
        <li
          className={tabActive === "information" ? "active" : ""}
          onClick={function () {
            setTabActive("information");
          }}
        >
          Aditional Information
        </li>
        <li
          className={tabActive === "reviews" ? "active" : ""}
          onClick={function () {
            setTabActive("reviews");
          }}
        >
          Reviews
        </li>
      </ul> */}

      {tabActive === "description" && (
        <div>
          <h3>Specifications:</h3>
          <p>
            We’ve created a full-stack structure for our working workflow
            processes, were from the funny the century initial all the made,
            have spare to negatives. But the structure was from the funny the
            century rather, initial all the made, have spare to negatives.
          </p>

          <h3>Care & Maintenance:</h3>
          <p>
            Use warm water to describe us as a product team that creates amazing
            UI/UX experiences, by crafting top-notch user experience.
          </p>
        </div>
      )}
      {tabActive === "information" && (
        <div>
          <table>
            <tr>
              <td>Stand Up</td>
              <td>35″L x 24″W x 37-45″H(front to back wheel)</td>
            </tr>
            <tr>
              <td>Folded (w/o wheels) </td>
              <td>32.5″L x 18.5″W x 16.5″H</td>
            </tr>
            <tr>
              <td>Folded (w/ wheels) </td>
              <td>32.5″L x 24″W x 18.5″H</td>
            </tr>
            <tr>
              <td>Door Pass Through </td>
              <td>24</td>
            </tr>
            <tr>
              <td>Frame </td>
              <td>Aluminum</td>
            </tr>
            <tr>
              <td>Weight (w/o wheels) </td>
              <td>20 LBS</td>
            </tr>
            <tr>
              <td>Weight Capacity </td>
              <td>60 LBS</td>
            </tr>
            <tr>
              <td>Width </td>
              <td>24″</td>
            </tr>
            <tr>
              <td>Handle height (ground to handle) </td>
              <td>37-45″</td>
            </tr>
            <tr>
              <td>Wheels </td>
              <td>Aluminum</td>
            </tr>
            <tr>
              <td>Size </td>
              <td>S, M, X, XL</td>
            </tr>
          </table>
        </div>
      )}
      {tabActive === "reviews" && (
        <div>
          <h2>01 Review for this product</h2>
          <div>
            <div>
              <h5>Eleanor Pena</h5>
              <Calification />
            </div>
            <p>
              “We’ve created a full-stack structure for our working workflow
              processes, were from the funny the century initial all the made,
              have spare to negatives. ”
            </p>
          </div>

          <div>
            <div>
              <h5>Courtney Henry</h5>
              <Calification />
            </div>
            <p>
              “We’ve created a full-stack structure for our working workflow
              processes, were from the funny the century initial all the made,
              have spare to negatives. ”
            </p>
          </div>
          <div>
            <div>
              <h5>Devon Lane</h5>
              <Calification />
            </div>
            <p>
              “We’ve created a full-stack structure for our working workflow
              processes, were from the funny the century initial all the made,
              have spare to negatives. ”
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

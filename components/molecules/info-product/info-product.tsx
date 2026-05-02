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
    <div className="info-product-bg">
      <section className="info-product">
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

        {tabActive === "description" && (
          <div className="info-product-description">
            <h3>Specifications:</h3>
            <p>
              We’ve created a full-stack structure for our working workflow
              processes, were from the funny the century initial all the made,
              have spare to negatives. But the structure was from the funny the
              century rather, initial all the made, have spare to negatives.
            </p>

            <h3>Care & Maintenance:</h3>
            <p>
              Use warm water to describe us as a product team that creates
              amazing UI/UX experiences, by crafting top-notch user experience.
            </p>

            <ul>
              <li>
                <span>
                  <img src="/icons/icon-3.png" />
                </span>
                <h4>Easy Returns</h4>
              </li>

              <li>
                <span>
                  <img src="/icons/icon-2.png" />
                </span>
                <h4>Quality Services</h4>
              </li>
              <li>
                <span>
                  <img src="/icons/icon-1.png" />
                </span>
                <h4>Original Product</h4>
              </li>
            </ul>
          </div>
        )}
        {tabActive === "information" && (
          <div className="info-product-aditional">
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
          <div className="info-product-reviews">
            <h2>01 Review for this product</h2>
            <div>
              <img
                src="/images/author-image-3.png"
                className="info-products-reviews-img"
              />
              <div>
                <div className="info-product-reviews-header">
                  <h5>Eleanor Pena</h5>
                  <Calification type="none" numActive={4} />
                </div>
                <p>
                  “We’ve created a full-stack structure for our working workflow
                  processes, were from the funny the century initial all the
                  made, have spare to negatives. ”
                </p>
              </div>
            </div>
            <div>
              <img
                src="/images/author-image-4.png"
                className="info-products-reviews-img"
              />
              <div>
                <div className="info-product-reviews-header">
                  <h5>Courtney Henry</h5>
                  <Calification type="none" />
                </div>
                <p>
                  “We’ve created a full-stack structure for our working workflow
                  processes, were from the funny the century initial all the
                  made, have spare to negatives. ”
                </p>
              </div>
            </div>
            <div>
              <img
                src="/images/author-image-5.png"
                className="info-products-reviews-img"
              />
              <div>
                <div className="info-product-reviews-header">
                  <h5>Devon Lane</h5>
                  <Calification type="none" />
                </div>
                <p>
                  “We’ve created a full-stack structure for our working workflow
                  processes, were from the funny the century initial all the
                  made, have spare to negatives. ”
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

import "./bar-bottom.css";

export function BarBottom() {
  return (
    <div className="bar-bottom-line">
      <div className="bar-bottom">
        <ul>
          <li>
            <img src="/icons/facebook.png" width={20} />
          </li>
          <li>
            <img src="/icons/instagram.png" width={20} />
          </li>
          <li>
            <img src="/icons/linkedin.png" width={20} />
          </li>
        </ul>
        <p>© 2025. All rights reserved by Axilthemes.</p>
        <div>
          <p>Accept For</p>
          <div>
            <img src="/icons/cart-1.png" height={20} />
            <img src="/icons/cart-2.png" height={20} />
            <img src="/icons/cart-5.png" height={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

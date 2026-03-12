import "./footer.css";

import { ItemFooter } from "@/components/atoms/item-footer/item-footer";

export function Footer() {
  return (
    <footer className="footer">
      <div className="item">
        <h4 className="title">Support</h4>
        <div className="content">
          <p>685 Market Street,</p>
          <p>Las Vegas, LA 95820,</p>
          <p>United States</p>
        </div>
        <div className="content">
          <p>example@domain.com</p>
          <p>(+01) 850-315-5862</p>
        </div>
      </div>
      <ItemFooter></ItemFooter>
      <ItemFooter></ItemFooter>
      <div className="item">
        <h4 className="title">Download App</h4>
        <p>Save $3 With App & New User only</p>
        <div className="images-container">
          <img src="/images/qr.png"></img>
          <div className="stores">
            <img src="/images/app-store.png"></img>
            <img src="/images/play-store.png"></img>
          </div>
        </div>
      </div>
    </footer>
  );
}

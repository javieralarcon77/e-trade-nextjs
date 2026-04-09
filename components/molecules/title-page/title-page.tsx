import "./title-page.css";

export function TitlePage() {
  return (
    <div className="title-page">
      <section className="title-page-container">
        <div className="title-page-left">
          <ul>
            <li>Home</li>
            <li>Shop</li>
          </ul>
          <h1>Explore All Products</h1>
        </div>
        <img src="/images/product-45.png" />
      </section>
    </div>
  );
}

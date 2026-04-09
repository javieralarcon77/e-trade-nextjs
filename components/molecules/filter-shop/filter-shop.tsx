import "./filter-shop.css";

export function FilterShop() {
  return (
    <section className="filter-shop">
      <select>
        <option>Categorias</option>
        <option>Fashion</option>
        <option>Electronics</option>
        <option>Furniture</option>
        <option>Beauty</option>
      </select>
      <select>
        <option>Color</option>
        <option>Red</option>
        <option>Blue</option>
        <option>Green</option>
        <option>Pink</option>
      </select>
      <select>
        <option>Price Range</option>
        <option>0 - 100</option>
        <option>101 - 500</option>
        <option>501 - 1000</option>
        <option>1001 - 1500</option>
      </select>
      <select>
        <option>Sort By Latest</option>
        <option>Sort By Name</option>
        <option>Sort By Price</option>
        <option>Sort by Viewed</option>
      </select>
    </section>
  );
}

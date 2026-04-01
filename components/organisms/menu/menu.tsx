import "./menu.css";

export function Menu({ onOpenMenu }: any) {
  return (
    <div className="menu-container">
      <menu>
        <div>
          <img src="/logo.png" className="logo" height="35px" />
        </div>
        <nav className="menu-desktop">
          <li className="active">
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Pages</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </nav>
        <nav className="nav-icons">
          <li>
            <a href="#">
              <img src="/icons/search.png" width={20} />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/icons/heart.png" width={20} />
            </a>
          </li>
          <li>
            <a href="#">
              <span className="car-count">3</span>
              <img src="/icons/car.png" width={20} />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/icons/user.png" width={20} />
            </a>
          </li>
          <li className="button-menu">
            <button onClick={onOpenMenu}>
              <img src="/icons/menu.png" width={20} />
            </button>
          </li>
        </nav>
      </menu>
    </div>
  );
}

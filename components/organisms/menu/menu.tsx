import Link from "next/link";
import "./menu.css";
import { useContext, useState } from "react";
import { StoreContext } from "@/context/store.context";
import { ModalCar } from "@/components/modal/modal-car/modal-car";

export function Menu({ onOpenMenu, isHome = true }: any) {
  const { cantProducts } = useContext(StoreContext);

  const [isOpenCar, setIsOpenCar] = useState<boolean>(false);

  function onOpenCar() {
    setIsOpenCar(true);
  }

  function onCloseCar() {
    setIsOpenCar(false);
  }

  return (
    <>
      <div className="menu-container-bg" data-home={isHome}>
        <div className="menu-container">
          <menu>
            <div>
              <Link href="/">
                <img src="/logo.png" className="logo" height="35px" />
              </Link>
            </div>
            <nav className="menu-desktop">
              <li className="active">
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/shop">Shop</Link>
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
                <button onClick={onOpenCar}>
                  {cantProducts != 0 && (
                    <span className="car-count">{cantProducts}</span>
                  )}
                  <img src="/icons/car.png" width={20} />
                </button>
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
      </div>
      {isOpenCar && <ModalCar onCloseCar={onCloseCar} />}
    </>
  );
}

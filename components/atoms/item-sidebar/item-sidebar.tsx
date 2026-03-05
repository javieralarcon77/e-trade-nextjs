/**
 * <ItemSidebar title="About" url="#" />
 * <ItemSidebar title="Home" childrens={[{ title: "Home - Electronics", url: "#" }]} />
 *
 */

import { useState } from "react";
import "./item-sidebar.css";

export function ItemSidebar({ title, url, childrens }: any) {
  const [open, setOpen] = useState(false);

  function handleChangeOpen() {
    console.log("open " + title, open);
    setOpen(!open);
  }

  return (
    <li className="item-sidebar">
      {!childrens && (
        <a className="item-sidebar-link" href={url}>
          {title}
        </a>
      )}
      {childrens && (
        <div className="item-sidebar-with-children">
          <div onClick={handleChangeOpen}>
            {title}
            <img src="/icons/chevron-down.png" width={10} />
          </div>
          <ul
            className="item-sidebar-childrens"
            style={{ display: open ? "block" : "none" }}
          >
            {childrens.map(function (item: any) {
              return (
                <li>
                  <a href={item.url}>{item.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </li>
  );
}

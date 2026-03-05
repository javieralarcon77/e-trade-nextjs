import { ItemSidebar } from "@/components/atoms/item-sidebar/item-sidebar";
import "./sidebar-menu.css";

export function SidebarMenu({ onCloseMenu }: any) {
  return (
    <div className="sidebar-menu-overlay">
      <aside className="sidebar-menu">
        <header>
          <img src="/logo.png" className="logo" height="30px" />
          <button onClick={onCloseMenu}>
            <img src="/icons/x.png" width={10} />
          </button>
        </header>
        <main>
          <ul>
            <ItemSidebar
              title="Home"
              childrens={[
                { title: "Home - Electronics", url: "#" },
                { title: "Home - NFT", url: "#" },
                { title: "Home - Fashion", url: "#" },
                { title: "Home - Jewellery", url: "#" },
                { title: "Home - Furniture", url: "#" },
                { title: "Home - Multipurpose", url: "#" },
                { title: "Home - RTL Version", url: "#" },
              ]}
            />
            <ItemSidebar
              title="Shop"
              childrens={[{ title: "Shop With Sidebar", url: "#" }]}
            />
            <ItemSidebar title="About" url="#" />
            <ItemSidebar title="Contact" url="#" />
          </ul>
        </main>
      </aside>
    </div>
  );
}

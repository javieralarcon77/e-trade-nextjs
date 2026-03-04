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
      </aside>
    </div>
  );
}

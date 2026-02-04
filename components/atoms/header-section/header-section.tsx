import "./header-section.css";

export function HeaderSection({
  title,
  subtitle,
  icon,
  color,
  onClickButtonRigth,
  onClickbuttonLeft,
  align = "left",
}: any) {
  return (
    <header className="header-section-header" data-align={align}>
      <div>
        <h2 style={{ color: color }}>
          <div
            className="header-section-icon"
            style={{ backgroundColor: color }}
          >
            <img src={icon} width="20px" />
          </div>
          {title}
        </h2>
        <h4>{subtitle}</h4>
      </div>
      {onClickbuttonLeft && onClickButtonRigth && (
        <div className="header-section-buttons">
          <button onClick={onClickbuttonLeft}>
            <img src="/icons/arrow-left.png" width="20px" />
          </button>
          <button onClick={onClickButtonRigth}>
            <img src="/icons/arrow-right.png" width="20px" />
          </button>
        </div>
      )}
    </header>
  );
}

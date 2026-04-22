import "./bar-language-top.css";

export function BarLanguageTop({ isHome = true }: any) {
  return (
    <div style={{ background: isHome ? "transparent" : "black" }}>
      <div
        className="bar-language-top"
        style={{ color: isHome ? "#5b5b5b" : "white" }}
      >
        <div>
          <button>English</button>
          <button>USD</button>
        </div>
        <div>
          <a href="#">Help</a>
          <a href="#">Join Us</a>
          <a href="#">Sign In</a>
        </div>
      </div>
    </div>
  );
}

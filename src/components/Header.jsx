import { useState, useEffect } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // 1. 處理滾動監聽 (偵測是否捲動過 50px)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 2. 處理手機版選單開啟時的 Body 鎖定
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* 🚀 動態加上 is-scrolled 類別 */}
      <header className={`${isScrolled ? "is-scrolled" : ""}`}>
        <div className="container">
          <div className="d-flex flex-md-wrap py-3 py-md-2 gx-4 align-items-center">
            <a className="me-auto" href="index.html">
              <picture>
                <source
                  media="(max-width: 767px)"
                  srcSet="https://github.com/MIN82814/PortfolioPhoto/blob/main/ProjectPhoto/MINMIN_LOGO-mobile.png?raw=true"
                />
                <img
                  src="https://github.com/MIN82814/PortfolioPhoto/blob/main/ProjectPhoto/MINMIN_LOGO.png?raw=true"
                  alt="MINMIN Logo"
                />
              </picture>
            </a>
            <button
              type="button"
              className="header-md-menu"
              aria-controls="header-menu"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <span className="material-symbols-outlined">
                {isMenuOpen ? "close" : "menu"}
              </span>
            </button>
            <nav
              id="header-menu"
              className={`d-md-flex header-menu ${isMenuOpen ? "active" : ""}`}
            >
              <ul className="d-flex flex-column flex-md-row header-item fs-12 fs-lg-11 text-neutral-700">
                <li>
                  <a href="#projects" onClick={() => setIsMenuOpen(false)}>
                    專案作品
                  </a>
                </li>
                <li>
                  <a
                    href="index.html#contact"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    與我聯絡
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* 手機版半透明遮罩 */}
      <div
        className={`header-overlay ${isMenuOpen ? "active" : ""}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>
    </>
  );
}

export default Header;

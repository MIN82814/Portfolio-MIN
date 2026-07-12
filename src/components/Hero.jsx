function Hero() {
  return (
    <section className="hero pb-5 pb-lg-0">
      <div className="container">
        <div className="row align-items-center position-relative">
          <div className="d-none d-lg-flex flex-row-reverse position-absolute decora-6 align-items-center">
            <img
              src="https://raw.githubusercontent.com/MIN82814/PortfolioPhoto/685ceae8b093c64b4c411d7ebee25528c9f40df7/ProjectPhoto/index_decora_4.svg"
              alt="decora_6"
              className="line-6"
            />
            <img
              src="https://raw.githubusercontent.com/MIN82814/PortfolioPhoto/685ceae8b093c64b4c411d7ebee25528c9f40df7/ProjectPhoto/index_decora_3.svg"
              alt="decora_3"
              className="flower "
            />
          </div>
          <div className="col-12 col-lg-5 order-2 order-lg-1">
            <div data-aos="fade-right" className="position-relative">
              <h1 className="text-neutral-700 fs-5 fs-lg-3 lh-sm fw-bold mb-3 mb-lg-5 position-relative">
                Hello
                <br />
                I’m Min
              </h1>

              <div className="mb-6 mb-lg-9 text-neutral-700">
                <p className="mb-2">
                  我是一個具備平面設計與前端開發背景
                  <br />
                  擁有網站規劃及RWD 響應式切版與維護經驗。
                </p>
                <p className="mb-0">
                  具備 React 元件化開發、API 資料串接與 Git
                  協作流程能力，曾獨立負責團隊專案文章模組開發，能精準還原設計稿並將設計需求轉化為具維護性的前端介面。
                </p>
              </div>

              <div className="d-flex  gap-3 z-index-front">
                <a
                  className="btn btn-neutral-700 w-lg-auto"
                  href="index.html#projects"
                >
                  專案開發
                </a>
                <a
                  className="btn btn-outline-neutral w-lg-auto"
                  href="index.html#experience"
                >
                  專業技能
                </a>
              </div>

              <div className="d-flex align-items-center  position-absolute decora-4">
                <img
                  src="https://raw.githubusercontent.com/MIN82814/PortfolioPhoto/685ceae8b093c64b4c411d7ebee25528c9f40df7/ProjectPhoto/index_decora_5.svg"
                  alt="line-5"
                  className="mt-8 mt-lg-12  img-fluid line-5"
                />
                <img
                  src="https://raw.githubusercontent.com/MIN82814/PortfolioPhoto/685ceae8b093c64b4c411d7ebee25528c9f40df7/ProjectPhoto/index_decora_3.svg"
                  alt="decora_3"
                  className="flower-small img-fluid"
                />
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-7 mb-5 mb-lg-0 order-1 order-lg-2">
            <div data-aos="fade-left" className="position-relative w-100">
              <img
                src="https://github.com/MIN82814/PortfolioPhoto/blob/main/ProjectPhoto/index_min.jpg?raw=true"
                alt="hero-img"
                className="hero-img w-100 img-fluid"
              />
              {/*圖旁邊彎曲*/}
              <img
                src="https://raw.githubusercontent.com/MIN82814/PortfolioPhoto/5b432f4edb1ce0f284a0e9b9a079b0a2235390dc/ProjectPhoto/index_decora_1.svg"
                alt="decora_1"
                className="position-absolute decora-1"
              />
              <img
                src="https://raw.githubusercontent.com/MIN82814/PortfolioPhoto/685ceae8b093c64b4c411d7ebee25528c9f40df7/ProjectPhoto/index_decora_2.svg"
                alt="decora_2"
                className="position-absolute decora-2"
              />
            </div>
          </div>
          <img
            src="https://raw.githubusercontent.com/MIN82814/PortfolioPhoto/685ceae8b093c64b4c411d7ebee25528c9f40df7/ProjectPhoto/index_decora_7.svg"
            alt="decora_7"
            className="position-absolute decora-5 d-none d-lg-block flower"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;

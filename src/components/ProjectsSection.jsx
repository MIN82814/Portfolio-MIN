import React, { useState } from "react";
import projectsData from "../data/projectsData.json";

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeTab, setActiveTab] = useState("全部");
  const categories = ["全部", "React前端開發", "網頁切版", "UI 設計與規劃"];
  const displayProjects =
    activeTab === "全部"
      ? projectsData
      : projectsData.filter((p) => p.tag?.includes(activeTab));
  const handleOpenModal = (project) => {
    setActiveProject(project);
    document.body.style.overflow = "hidden"; // 🔒 鎖定滾動
  };

  const handleCloseModal = () => {
    setActiveProject(null);
    document.body.style.overflow = ""; // 🔓 解除鎖定
  };

  const formatResponsibility = (text) => {
    const formatted = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    return <span dangerouslySetInnerHTML={{ __html: formatted }} />;
  };

  return (
    <section id="projects" className="project">
      <div className="container py-7 py-md-10">
        <div className="text-center mb-5 mb-md-7">
          <p className="fs-11 fw-bold lh-base">專案作品</p>
          <h2 className="fs-5 fs-md-3 fw-bold lh-sm">PROJECTS</h2>
          <div className="d-flex flex-wrap w-100 gap-2 mt-4 mt-md-6">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`category-btn ${activeTab === cat ? "active" : ""}`}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 專案卡片列表 */}
        <ul className="project-list mb-7 mb-md-5">
          {displayProjects.map((project, index) => (
            <li
              key={project.id}
              className="project-content"
              onClick={() => handleOpenModal(project)}
              data-aos="fade-down"
              data-aos-delay={index * 80}
            >
              <a
                style={{
                  "--bg-desktop": `url('${project.bgImg}')`,
                  "--bg-mobile": `url('${project.mobileBgImg}')`,
                }}
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                <div className="project-bg-cover"></div>
                <div className="project-text">
                  <time
                    className="fs-13- fw-md-12fw-medium lh-base"
                    dateTime={project.dateAttr}
                  >
                    {project.date}
                  </time>
                  <ul className="d-flex breadcrumb-icon">
                    {project.tag.map((t, idx) => (
                      <li
                        key={idx}
                        className="fs-12 fs-md-11 fw-medium lh-base"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  <h3 className="fs-10 fs-lg-8 fw-bold">{project.title}</h3>
                  <h4 className="fs-12 fs-md-11">{project.subtitle}</h4>
                  <button type="button" className="btn btn-neutral-700">
                    前往專案
                  </button>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* ==================== 彈跳視窗 Modal 區塊 ==================== */}
      <main className={`projectModal-page ${activeProject ? "is-active" : ""}`}>
        <div className="modal-overlay" onClick={handleCloseModal}></div>

        {activeProject && (
          <div className="projectModal">
            <header className="modal-header">
              <button
                className="modal-close"
                type="button"
                onClick={handleCloseModal}
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </header>

            <div className="modal-body">
              {/* 大圖區區塊 */}
              <picture className="modal-hero-wrapper">
                <source
                  media="(max-width: 767px)"
                  srcSet={
                    activeProject.modal.mobileHeroImage ||
                    activeProject.modal.heroImage
                  }
                  className="modal-hero-mobile"
                />
                <img
                  src={activeProject.modal.heroImage}
                  alt={activeProject.title}
                  className="modal-hero"
                />
              </picture>

              {/* 文字與內容區 */}
              <div className="modal-text text-start">
                {/* 1. 頂部：科技標籤與日期（加入 breadcrumb-item 還原點點） */}
                <div className="d-flex flex-column-reverse flex-md-row justify-content-between align-items-center mb-2 gap-2">
                  <nav aria-label="breadcrumb ">
                    <ol className="breadcrumb-icon  d-flex flex-wrap gap-1 justify-content-center modal-tech-tags mb-0 p-0">
                      {activeProject.modal.technologies?.map((tech, idx) => (
                        <li key={idx} className="text-neutral-600">
                          {tech}
                        </li>
                      ))}
                    </ol>
                  </nav>
                  <time
                    className="modal-time text-neutral-500"
                    dateTime={activeProject.dateAttr}
                  >
                    {activeProject.date}
                  </time>
                </div>

                {/* 2. 標題與按鈕列 */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4 gap-3">
                  <h2 className="modal-title fs-8 fs-md-7 m-0 text-neutral-700 fw-bold">
                    {activeProject.title}
                  </h2>
                  <div className="modal-links d-flex flex-wrap gap-2">
                    {activeProject.modal.links?.github && (
                      <a
                        href={activeProject.modal.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary-600 fw-medium"
                      >
                        專案連結
                      </a>
                    )}
                    {activeProject.modal.links?.demo && (
                      <a
                        href={activeProject.modal.links.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary-600 fs-md-label-sm"
                      >
                        專案 Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* 3. 網格內容區：左右分欄 */}
                <div className="mb-4">
                  {/* 💡 使用 row 並確保 col 類別在桌機與手機下的順序正確 */}
                  <div className="row g-4">
                    {/* 👈 左側：專案介紹（手機 col-12 滿版，桌機 col-md-5 左右並排） */}
                    <div className="col-12 col-md-5">
                      <div className="modal-intro mb-4">
                        {activeProject.modal.introImage && (
                          <img
                            src={activeProject.modal.introImage}
                            alt="專案介紹圖"
                            className="modal-intro-img img-fluid rounded mb-3 shadow-sm"
                          />
                        )}
                        <h5 className="mb-2 fw-bold">專案介紹</h5>
                        <p className="modal-intro-text lh-base text-neutral-500">
                          {activeProject.modal.intro}
                        </p>
                      </div>
                    </div>

                    {/* 👉 右側：負責內容（手機 col-12 滿版，桌機 col-md-7 左右並排） */}
                    <div className="col-12 col-md-7 ps-2 ps-md-4">
                      <h5 className="mb-2 text-primary-600 fw-bold">
                        負責內容
                      </h5>
                      <ul className="modal-responsibilities text-neutral-700">
                        {activeProject.modal.responsibilities?.map(
                          (item, idx) => (
                            <li key={idx} className="mb-4 lh-base">
                              {formatResponsibility(item)}
                            </li>
                          ),
                        )}
                      </ul>

                      {/* 負責的子頁面按鈕 */}
                      <div className="modal-pages-container d-flex flex-wrap gap-2">
                        {activeProject.modal.links?.responsiblePages?.map(
                          (page, idx) => (
                            <a
                              key={idx}
                              href={page.url}
                              target="_blank"
                              rel="noreferrer"
                              className="btn btn-neutral-700"
                            >
                              {page.name}
                            </a>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ==================== 底部：長圖展示區塊（已修正為非滿版置中） ==================== */}
              <div className="modal-content">
                {/* 💡 核心修正：加入 maxWidth: "860px" 限制並搭配 w-100 與 mx-auto，完美還原圖一的留白比例！ */}
                <div
                  className="modal-content-gallery d-flex flex-column gap-5 w-100 mx-auto px-3"
                  style={{ maxWidth: "860px" }}
                >
                  {activeProject.modal.contentImages?.map((imgObj, idx) => {
                    const title =
                      typeof imgObj === "object"
                        ? imgObj.title
                        : "頁面版面展示";
                    const url =
                      typeof imgObj === "object" ? imgObj.url : imgObj;
                    return (
                      <div className="gallery-item w-100" key={idx}>
                        {/* 網頁作品展示標題 */}
                        <h4 className="text-neutral-700 mb-4 fs-11 fs-md-10 text-center fw-bold">
                          {title}
                        </h4>
                        {/* 網頁作品截圖 */}
                        <img
                          src={url}
                          alt={title}
                          className="img-fluid w-100 d-block mx-auto rounded shadow-sm"
                          loading="lazy"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </section>
  );
}

import React, { useEffect } from "react";
import experienceData from "../data/experienceData.json";

export default function ExperienceSection() {
  // 🚀 整合動態時間軸點亮監聽 (IntersectionObserver)
  useEffect(() => {
    const sections = document.querySelectorAll(".timeline-section");

    const observerOptions = {
      rootMargin: "-80% 0px -80% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          sections.forEach((s) => s.classList.remove("active"));
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    // 元件卸載時清除監聽
    return () => observer.disconnect();
  }, []);

  return (
    <section className="experience">
      <div className="container px-md-3 px-0">
        <div className="row g-0 align-items-start">
          {/* 左側照片（Sticky 黏頂） */}
          <div className="col-12 col-lg-5 col-sticky-photo">
            <img
              src="https://github.com/MIN82814/PortfolioPhoto/blob/main/ProjectPhoto/experience_photo.png?raw=true"
              alt="experience"
              className="img-fluid"
            />
          </div>

          {/* 右側時間軸內容 */}
          <div className="col-12 col-lg-7 px-4 py-7 ps-md-9 pe-md-7  experience-content-wrapper text-neutral-0">
            <div data-aos="fade-right">
              <div className="mb-7">
                <p className="fs-11 fw-bold lh-base">工作學歷及專案經驗</p>
                <h2 className="fs-5 fs-md-3 fw-bold lh-sm">EXPERIENCE</h2>
              </div>

              <div className="timeline-container">
                <div className="content">
                  {experienceData.map((item) => (
                    <section
                      id={item.id}
                      key={item.id}
                      className="timeline-section"
                    >
                      <div className="timeline-trigger">
                        <div className="dot"></div>
                        <div className="date-tag fs-10 fs-md-9 fw-medium lh-base">
                          {item.company}
                        </div>
                      </div>

                      {/* 1. 工作經歷渲染 */}
                      {item.type === "work" && (
                        <>
                          <h3 className="mb-3 fs-13 fw-normal">
                            {item.period}
                          </h3>
                          {item.details?.map((detail, idx) => (
                            <div className="mb-6" key={idx}>
                              <h4 className="fs-10 fw-bold lh-base mb-2 experience-list">
                                - {detail.title}
                              </h4>
                              {detail.description && (
                                <p className="fs-12 fs-md-11 fw-normal lh-base">
                                  {detail.description}
                                </p>
                              )}
                              {detail.items && (
                                <ul className="list-unstyled p-0 m-0">
                                  {detail.items.map((sub, sIdx) => (
                                    <li className="mb-3" key={sIdx}>
                                      <p className="fs-11 fw-bold lh-base mb-1 text-primary-500">
                                        {sub.subtitle} ：
                                      </p>
                                      <p className="fs-12 fs-md-11 fw-normal lh-base">
                                        {sub.content}
                                      </p>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </>
                      )}

                      {/* 2. 團隊專案經驗渲染 */}
                      {item.type === "project" && (
                        <>
                          {item.projects?.map((proj, idx) => (
                            <div className="mb-6" key={idx}>
                              <h4 className="fs-10 fw-bold lh-base mb-2 mb-2 experience-list">
                                - {proj.name}
                              </h4>
                              <h3 className="mb-3 fs-13 fw-normal">
                                {proj.period}
                              </h3>
                              <p className="mb-3 fs-12 fs-md-11 fw-normal lh-base">
                                {proj.description}
                              </p>
                              <div className="tech-tags-grid">
                                {proj.techs?.map((tech, tIdx) => (
                                  <span
                                    key={tIdx}
                                    className=" experience-technology fs-13 fw-medium px-3 py-1"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </>
                      )}

                      {/* 3. 學經歷渲染 */}
                      {item.type === "education" && (
                        <>
                          {item.schools?.map((school, idx) => (
                            <div className="mb-7" key={idx}>
                              <h3 className="mb-2 fs-13 fw-normal">
                                {school.period}
                              </h3>
                              <h4 className="fs-11 fw-bold mb-1 experience-list">
                                {school.name}
                              </h4>
                              <p className="fs-12 fs-md-11">{school.major}</p>
                            </div>
                          ))}
                        </>
                      )}
                    </section>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

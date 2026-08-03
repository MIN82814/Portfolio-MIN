import React from "react";
import skillsData from "../data/skillsData.json";

export default function SkillsSection() {
  return (
    <section id="experience" className="service bg-primary-900">
      <div className="container py-7 py-md-10">
        {/* 1. 標題區域：專業技能 & SKILLS */}
        <div className="d-flex justify-content-between mb-5 mb-md-7">
          <div data-aos="fade-down">
            <p className="text-neutral-0 fs-12 fs-md-11 fw-bold">專業技能</p>
            <h2 className="text-neutral-0 fs-5 fs-md-3 mb-0 fw-bold lh-sm">
              SKILLS
            </h2>
          </div>
        </div>

        {/* 2. 技能卡片清單區域 */}
        <div>
          {/* list-unstyled 用來清除 ul 預設的點點，d-flex 與 gap 配合我們的 SCSS 運作 */}
          <ul className="service-list list-unstyled mb-0 d-flex ">
            {skillsData.map((item, index) => (
              <li
                key={index}
                className="service-card-link bg-primary-50"
                data-aos="fade-right"
                data-aos-delay={index * 100}
              >
                {/* 卡片內部容器，使用 h-100 確保三張卡片在電腦版會一樣高 */}
                <div className="p-3 p-md-5 d-flex flex-column h-100">
                  {/* 卡片頂部：大標題與 Google Icon */}
                  <div className="d-flex justify-content-between align-items-center mb-2 mb-md-4">
                    <h3 className="fs-8 fs-md-7 mb-0 text-neutral-700 fw-bold">
                      {item.zhTitle}
                    </h3>
                    <span className="material-symbols-outlined text-primary-900 fs-8">
                      {item.iconName}
                    </span>
                  </div>

                  {/* 卡片內容：子技能清單遞迴 (Map) */}
                  <div className="d-flex flex-column gap-3">
                    {item.skills &&
                      item.skills.map((skill, sIndex) => (
                        <div key={sIndex} className="skill-item">
                          {/* 子技能名稱（例如：React.js） */}
                          <h4 className="fs-11 fs-md-10 text-primary-600 fw-bold">
                            {skill.title}
                          </h4>

                          {/* 子技能描述內文 */}
                          {/* 💡 重點：因為你的 JSON 裡面有 <strong> 標籤，一定要用下面這個寫法，React 才會幫你把重點粗體渲染出來！ */}
                          <p
                            className="fs-12 fs-md-11 mb-0 text-neutral-600 fw-medium"
                            dangerouslySetInnerHTML={{ __html: skill.content }}
                          />
                        </div>
                      ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

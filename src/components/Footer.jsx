import React from "react";

export default function Footer() {
  const socialLinks = [
    {
      id: "github",
      icon: "bi bi-github",
      url: "https://github.com/MIN82814",
      label: "GitHub",
    },
    {
      id: "email",
      icon: "bi bi-envelope-fill",
      url: "mailto:min82814@gmail.com",
      label: "Email",
    },
    {
      id: "104",
      icon: "bi bi-briefcase",
      url: "https://pda.104.com.tw/profile/share/a6Vlr1nwau4Z4oqB3Is2k3HN9yGiG1lL",
      label: "104 履歷",
    },
  ];

  return (
    <footer id="contact" className="bg-primary-900">
      <div className="container py-7 py-md-10 text-neutral-0">
        <div className="row g-4 align-items-center justify-content-between">
          {/* 左側：與我聯絡 + CONTACT (+ 電腦版專用 Email) */}
          <div className="col-12 col-md-6">
            <div>
              <p className="fs-12 fs-md-11 fw-bold lh-base">與我聯絡</p>
              <h2 className="fs-5 fs-md-3 fw-bold lh-sm mb-1 mb-md-3">
                CONTACT
              </h2>

              {/* 電腦版 Email（手機隱藏 d-none，電腦顯示 d-md-block） */}
              <a
                href="mailto:min82814@gmail.com"
                className="d-none d-md-inline-flex align-items-center fs-11 fw-medium lh-base text-neutral-0 text-decoration-none"
              >
                <span className="material-symbols-outlined me-2">drafts</span>
                min82814@gmail.com
              </a>
            </div>
          </div>

          {/* 右側：社群 Icon 圓圈 (+ 手機版專用 Email) */}
          <div className="col-12 col-md-6 col-lg-5">
            {/* 社群 Icon */}
            <ul className="d-flex social-icon list-unstyled justify-content-start justify-content-md-start gap-3 gap-md-6 mb-0 p-0">
              {socialLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.url}
                    target={item.url.startsWith("mailto") ? "_self" : "_blank"}
                    rel="noreferrer"
                    aria-label={item.label}
                  >
                    <i className={item.icon}></i>
                  </a>
                </li>
              ))}
            </ul>

            {/* 手機版 Email（手機顯示 d-inline-flex，電腦隱藏 d-md-none） */}
            <div className="mt-3 d-md-none">
              <a
                href="mailto:min82814@gmail.com"
                className="d-inline-flex align-items-center fs-12 fw-medium lh-base text-neutral-0 text-decoration-none"
              >
                <span className="material-symbols-outlined me-2">drafts</span>
                min82814@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

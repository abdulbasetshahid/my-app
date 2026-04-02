import React from "react";

const Footer = ({ className = "" }) => {
  return (
    <footer
      className={[
        "footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by My-App
          Industries Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;

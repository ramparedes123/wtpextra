import React from "react";

function Widgett({ title, count, link, percentage, icon, see }) {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{title}</span>
        <span className="counter"> {count}</span>
        <a
          href={link}
          className="link"
          style={{ textDecoration: "none", color: "black" }}
        >
          {see}
        </a>
      </div>
      <div className="right">
        <div className="percentage positive">
          <svg
            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="KeyboardArrowUpIcon"
          >
            <path d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path>
          </svg>
          {percentage}
        </div>
        <svg
          className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon css-i4bv87-MuiSvgIcon-root"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="PersonOutlinedIcon"
          style={{ color: "crimson", backgroundColor: "rgba(255, 0, 0, 0.2)" }}
        >
          <path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
        </svg>
      </div>
    </div>
  );
}

export default Widgett;

import React from "react";
import { SidebarWrap } from "./style";
import { useScroll } from "../../../../../hooks/position";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const scrollCount = useScroll();
  const { t } = useTranslation();

  const language = t("sidebar", { returnObjects: true });

  const sidebar = [
    { id: 1, name: language[0], to: "#header", href: "#overview" },
    { id: 2, name: language[1], to: "/", href: "#curriculum" },
    { id: 3, name: language[2], to: "/testimonials", href: "#testimonials" },
    { id: 4, name: language[3], to: "/faqs", href: "#faqs" },
  ];

  function Position(scroll) {
    if (scroll > 620 && scroll < 3400) return "top";
    else if (scroll > 3400) return "bottom";
  }

  return (
    <SidebarWrap fixed={Position(scrollCount)}>
      {sidebar.map((item) => {
        return (
          <a href={item?.href} key={item?.id}>
            {item?.name}
          </a>
        );
      })}
      <button className="btn">{language[4]}</button>
    </SidebarWrap>
  );
};

export default Sidebar;

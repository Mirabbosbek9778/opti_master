import React from "react";
import { NavLink } from "react-router-dom";
import { sidebar } from "../../../utilits/sidebar";
import { Wrap, Media } from "./style";
import { useTranslation } from "react-i18next";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Sidebar = () => {
  const { t } = useTranslation();
  const [userLink, setUserLink] = React.useState("");
  const language = t("sidebarUser", { returnObjects: true });

  const handleChange = (event) => {
    setUserLink(event.target.value);
  };

  return (
    <>
      <Wrap>
        {sidebar.map(({ path, Icon }) => (
          <Wrap.Item>
            <NavLink to={path}>
              <Icon className="icon" /> <span> {language[path]} </span>
            </NavLink>
          </Wrap.Item>
        ))}
      </Wrap>

      {/* media */}
      <Media>
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={userLink}
            onChange={handleChange}
          >
            {sidebar.map(({ path, Icon }) => (
              <MenuItem value={path}>
                <Wrap.Item media="true">
                  <NavLink to={path}>
                    <Icon className="icon" /> <span> {language[path]} </span>
                  </NavLink>
                </Wrap.Item>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Media>
    </>
  );
};

export default Sidebar;

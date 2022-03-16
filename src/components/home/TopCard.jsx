import { memo } from "react";
import { NavLink } from "react-router-dom";

export default memo(function TopCard() {
  return (
    <NavLink to={"/about"} className={"left-content-topcard"}>
      <div className={"left-content-topcard-img-container"}>
        <img
          src={"http://192.168.31.30:3000/websiteImages/rion2.jpg"}
          className={"left-content-topcard-img"}
          alt={""}
        />
      </div>
      <div className={"left-content-topcard-text-container"} style={{ color: "black" }}>
        <div className={"left-content-topcard-text-title"}>
          <span className="left-content-topcard-top-icon" style={{ marginTop: "5px" }}>
            置顶
          </span>
          关于我
        </div>
        <div className={"left-content-topcard-text-content"}>一个furry爱好者...</div>
      </div>
    </NavLink>
  );
});

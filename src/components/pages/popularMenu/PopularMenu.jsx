import React from "react";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../section/SectionTitle";
import MenuItem from "../../shared/MenuItem";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <div>
      <SectionTitle subheading={"---Check it out---"} heading={"Popular Menu"}></SectionTitle>
      <div className="grid md:grid-cols-2 gap-3">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;

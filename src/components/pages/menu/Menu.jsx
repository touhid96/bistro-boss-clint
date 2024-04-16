import React from "react";
import { Helmet } from "react-helmet-async";
import MenuImage from "../../../assets/assets/menu/banner3.jpg";
import DessertImage from "../../../assets/assets/menu/dessert-bg.jpeg";
import PizzaImage from "../../../assets/assets/menu/pizza-bg.jpg";
import saladImage from "../../../assets/assets/menu/salad-bg.jpg";
import soupImage from "../../../assets/assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../section/SectionTitle";
import Cover from "../../shared/Cover";
import MenuCategories from "./MenuCategories";
const Menu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro menu</title>
      </Helmet>
      <Cover image={MenuImage} title={"Our menu"}></Cover>
      <SectionTitle subheading={"---Don't miss---"} heading={"TODAY'S OFFER"}></SectionTitle>
      {/* item offered */}
      <MenuCategories items={offered}></MenuCategories>
      {/* desserts */}

      <MenuCategories items={desserts} title={"desserts"} coverImg={DessertImage}></MenuCategories>
      <MenuCategories items={pizza} title={"pizza"} coverImg={PizzaImage}></MenuCategories>
      <MenuCategories items={salad} title={"salad"} coverImg={saladImage}></MenuCategories>
      <MenuCategories items={soup} title={"soup"} coverImg={soupImage}></MenuCategories>
    </div>
  );
};

export default Menu;

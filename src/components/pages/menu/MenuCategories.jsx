import React from "react";
import { Link } from "react-router-dom";
import Cover from "../../shared/Cover";
import MenuItem from "../../shared/MenuItem";

const MenuCategories = ({ items, title, coverImg }) => {
  return (
    <div className="pt-8">
      {title && <Cover image={coverImg} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4"> Order now</button>
      </Link>
    </div>
  );
};

export default MenuCategories;

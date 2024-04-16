import React from "react";
import ItemCard from "../../shared/ItemCard";

const OrderTab = ({ items }) => {
  return (
    <div>
      <div className=" grid md:grid-cols-3 gap-10">
        {" "}
        {items.map((item) => (
          <ItemCard key={item._id} item={item}></ItemCard>
        ))}
      </div>
    </div>
  );
};

export default OrderTab;

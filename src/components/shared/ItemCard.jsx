import React from "react";

const ItemCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <p className="absolute right-0 bg-slate-800 text-white mt-4 mr-4 px-4">${price}</p>
        <div className="card-body text-center">
          <h2 className="card-title text-center">{name}</h2>
          <p>{recipe.substring(0, 80)}...</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;

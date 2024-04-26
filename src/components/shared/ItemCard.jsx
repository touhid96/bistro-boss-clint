import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCArt";
import { AuthContext } from "../../provider/AuthProvider";
const ItemCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [cart, refetch] = useCart();
  const handleAddToCart = (item) => {
    if (user && user.email) {
      const orderedItem = { menuItemId: _id, name, image, price, email: user.email };
      fetch("http://localhost:4000/carts", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderedItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your food addeded to the cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "You are not logged-in",

        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Go it login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <p className="absolute right-0 bg-slate-800 text-white mt-4 mr-4 px-4">${price}</p>
        <div className="card-body text-center">
          <h2 className="card-title flex flex-col items-center">{name}</h2>
          <p>{recipe.substring(0, 80)}...</p>
          <div className="card-actions justify-end flex flex-col items-center">
            <button
              onClick={() => handleAddToCart(item)}
              className="btn btn-outline border-0 border-b-4"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;

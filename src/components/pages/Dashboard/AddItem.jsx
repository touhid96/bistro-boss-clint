import React from "react";
import { useForm } from "react-hook-form";
import SectionTitle from "../../section/SectionTitle";
const AddItem = () => {
  const imageHosting = import.meta.env.VITE_Image_Hosting;
  const imgHostingUrl = `https://api.imgbb.com/1/upload?key=${imageHosting}`;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(imgHostingUrl, { method: "POST", body: formData })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const imgUrl = imgData.data.url;
          const { name, price, category, recipe } = data;
          const newItem = { name, price: parseFloat(price), category, recipe, image: imgUrl };
          console.log(newItem);
        }
      });
  };
  return (
    <div className="w-full px-10">
      <SectionTitle subheading={"Whats new"} heading={"Add a new Item"}></SectionTitle>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text font-semibold">Receipe Name</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            {...register("name", { required: true, maxLength: 20 })}
            className="input input-bordered w-full "
          />
        </label>
        <div className="flex my-4">
          {" "}
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Category</span>
            </div>
            <select
              className="select select-bordered"
              {...register("category", { required: true })}
            >
              <option disabled>Pick one</option>
              <option>Pizza</option>
              <option>Soup</option>
              <option>Salad</option>
              <option>Drinks</option>
              <option>Deserts</option>
              <option>Others</option>
            </select>
          </label>
          <label className="form-control w-full ml-4">
            <div className="label">
              <span className="label-text font-semibold">Price</span>
            </div>
            <input
              type="number"
              {...register("price", { required: true, maxLength: 20 })}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </label>
        </div>

        <label className="form-control my-4">
          <div className="label">
            <span className="label-text">Receipe Details</span>
          </div>
          <textarea
            {...register("recipe", { required: true, maxLength: 200 })}
            className="textarea textarea-bordered h-24"
            placeholder="Bio"
          ></textarea>
        </label>
        <label className="form-control w-full my-4">
          <div className="label">
            <span className="label-text">Item Image</span>
          </div>
          <input
            type="file"
            {...register("image", { required: true, maxLength: 200 })}
            className="file-input file-input-bordered w-full "
          />
        </label>
        <input className="btn btn-sm btn-neutral mt-4" type="submit" value="Add-Item" />
      </form>
    </div>
  );
};

export default AddItem;

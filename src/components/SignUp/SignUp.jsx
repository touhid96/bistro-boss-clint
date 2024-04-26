import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import SocialLogin from "../shared/socialogin/SocialLogin";
const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photourl)
        .then(() => {
          const saveUser = { name: data.name, email: data.email };
          fetch("http://localhost:4000/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();

                Swal.fire("Your data is updated");
                navigate("/");
              }
            });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  return (
    <div>
      <Helmet>
        <title>Bistro Bos | Register Here</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">SignUp now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
              exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name", { maxLength: 20 })}
                  placeholder="type your name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  name="photourl"
                  {...register("photourl", { maxLength: 200 })}
                  placeholder="Photo Url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
                {errors.email && <p className="text-red-600">Please enter your email</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  {...register("password", {
                    required: true,
                    minLength: 8,
                    maxLength: 20,
                  })}
                  className="input input-bordered"
                  name="password"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Please enter the password</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">Password must be Less than 20 charecters</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 8 charecters</p>
                )}

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="signup" />
              </div>
            </form>
            <p>
              <small>Already have an account</small> <Link to="/login">Login Here</Link>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

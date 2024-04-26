import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await fetch("http://localhost:4000/users");
      return res.json();
    },
  });
  const handleDelete = (user) => {};
  return (
    <div className="w-full">
      <div>
        <Helmet>
          <title>Bistro || All Users</title>
        </Helmet>
        <h3 className="text-3xl font-semibold">Total Users {users.length}</h3>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead className="">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      "admin"
                    ) : (
                      <button className="btn btn-ghost btn text bg-orange-500">
                        <FaUserShield></FaUserShield>
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(user)}
                      className="btn btn-ghost btn-lg text"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;

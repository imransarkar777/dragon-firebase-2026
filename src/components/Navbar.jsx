import React, { use } from "react";
import { NavLink, Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import userIcon from "../assets/user.png";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        alert("Logged Out Success!!");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.email}</div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img src={userIcon} alt="" />
        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary px-10 ">
            Logout
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10 ">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

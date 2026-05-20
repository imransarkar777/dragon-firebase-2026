import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const [nameError, setNameError] = useState("");


  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    if (name.length < 5) {
      setNameError("Name should be more than 5 characters");
    } else {
      setNameError("");
    }
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    createUser(email, password)
      .then((res) => {
        const user = res.user;
        updateUser({ displayName: name, photoUrl: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoUrl: photo });
            navigate("/");
          })
          .catch((w) => {
            // console.log(w);
            setUser(user);
          });
      })
      .catch((e) => {
        const errorCode = e.code;
        const errorMessage = e.message;
        alert(errorMessage);
      });
  };
  return (
    <div>
      <div className="flex justify-center min-h-screen items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
          <h2 className="font-bold text-2xl text-center">
            Login to your account
          </h2>
          <form onSubmit={handleRegister} className="card-body">
            <fieldset className="fieldset">
              {/* Name  */}
              <label className="label" name="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
                required
              />
              {nameError && <p className="text-xs text-error">{nameError}</p>}

              {/* email  */}
              <label className="label" name="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required
              />

              {/* Photo URL  */}
              <label className="label">Photo URL</label>
              <input
                type="link"
                name="photo"
                className="input"
                placeholder="Paste Photo URL"
                required
              />

              {/* password  */}
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
                required
              />

              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
              <p className="font-bold text-center pt-5">
                Already have an account?
                <Link className="text-secondary" to={"/auth/login"}>
                  Login
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
Register;

//Imports
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Login } from "../../reducers/Auth/action";

//Import styles
import style from "./style.module.css";

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const { loading, isAuth } = useSelector((state) => state.Auth);

  const handelLogin = () => {
    dispatch(Login(email));
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/products");
    }
  }, [isAuth]);

  return (
    <div className={style.container}>
      <input
        type={"email"}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={"Email..."}
        className={style.input}
      />
      <button disabled={loading} onClick={handelLogin} className={style.button}>
        {loading ? "Loading..." : "Login"}
      </button>
    </div>
  );
}

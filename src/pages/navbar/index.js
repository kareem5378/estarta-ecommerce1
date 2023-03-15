import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../../reducers/Auth/action";
import { BiUserCircle } from "react-icons/bi";
import styles from "./style.module.css";

export default function Navbar() {
  const { isAuth, user } = useSelector((state) => state.Auth);
  const [iconToggle, setIconToggle] = useState(false);
  const dispatch = useDispatch();
  const nav = useNavigate();

  function handleLogout() {
    console.log("logout");
    dispatch(Logout());
  }

  useEffect(() => {
    if (isAuth) {
      nav("/");
    }
  }, [isAuth]);

  return (
    <nav className={styles.navContainer}>
      <div className={styles.logo}>
        <Link to={"/"}>Estarta E-commerce</Link>
      </div>
      <div>
        {isAuth ? (
          <div className={styles.logoutContainer}>
            <BiUserCircle
              size={35}
              onClick={() => setIconToggle(!iconToggle)}
            />
            {iconToggle ? (
              <div className={styles.logoutContent}>
                <div>${user?.email}</div>
                <button onClick={handleLogout} className={styles.logoutButton}>
                  Logout
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <Link to={"/login"}>
            <button className={styles.navButton}>Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
}

import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../../reducers/Auth/action";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import styles from "./style.module.css";

export default function Navbar() {
  const { isAuth, user, cartItems } = useSelector((state) => state.Auth);
  const [iconToggle, setIconToggle] = useState(false);
  const dispatch = useDispatch();
  const nav = useNavigate();

  function handleLogout() {
    dispatch(Logout());
    nav("/");
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
            <NavLink
              to={"/"}
              className="navlink"
              style={({ isActive }) =>
                isActive
                  ? {
                      borderBottom: "2px solid red",
                    }
                  : {}
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/products"}
              className="navlink"
              style={({ isActive }) =>
                isActive
                  ? {
                      borderBottom: "2px solid red",
                    }
                  : {}
              }
            >
              Products
            </NavLink>
            <NavLink
              to={"/cart"}
              style={({ isActive }) =>
                isActive
                  ? {
                      borderBottom: "2px solid red",
                    }
                  : {}
              }
            >
              <AiOutlineShoppingCart size={35} className={styles.cartIcon} />
              <div className={styles.cartItemsCount}>{cartItems?.length}</div>
            </NavLink>
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

import styles from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Navbar() {
    const navigate = useNavigate();
    const [menu, setMenu] = useState(false);
    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.left}>
                    <p className={styles.logo} onClick={() => navigate("/")}>
                        bookmarks-io
                    </p>

                    <p className={styles.link}>Add bookmark</p>
                    <p className={styles.link}>Features</p>
                </div>
                <div className={styles.right}>
                    {localStorage.getItem("token") ? (
                        <Link to="/">
                            <button
                                className={styles.sign_in}
                                onClick={() => localStorage.removeItem("token")}
                            >
                                Sign out
                            </button>
                        </Link>
                    ) : (
                        <>
                            <Link to="/signin">
                                <button className={styles.sign_in}>
                                    Sign in
                                </button>
                            </Link>
                            <Link to={"/signup"}>
                                <button className={styles.sign_up}>
                                    Sign up
                                </button>
                            </Link>
                        </>
                    )}
                </div>
                <div className={styles.menu} onClick={() => setMenu(!menu)}>
                    <FontAwesomeIcon icon={faBars} size="xl" />
                </div>
            </nav>
            {localStorage.getItem("token")
                ? menu && (
                      <div className={styles.menu_list}>
                          <p
                              onClick={() => {
                                  localStorage.removeItem("token");
                                  navigate("/");
                                  setMenu(false);
                              }}
                          >
                              Sign out
                          </p>
                      </div>
                  )
                : menu && (
                      <div className={styles.menu_list}>
                          <p
                              onClick={() => {
                                  navigate("/signin");
                                  setMenu(false);
                              }}
                          >
                              Sign in
                          </p>

                          <p>Sign up</p>
                      </div>
                  )}
        </>
    );
}

export { Navbar };

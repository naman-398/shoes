import React, { useState } from "react";
import pagelogo from "../Images/pagelogo.png";
import headerimg2 from "../Images/header2img.png";
import Container from 'react-bootstrap/Container';
import nav_icon from "../Images/menu.png";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Header = () => {
    const [show, setShow] = useState(false);
    function menubar() {
      setShow(!show);
      if (show === false) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    }
    return (
        <div>

            <header>
                <Container>
                    <div className="d-flex justify-content-lg-between justify-content-center align-items-center py-3">
                        <ul className="ps-0 mb-0 d-none d-lg-block">
                            <li>
                                <a href="#" className="text-decoration-none">
                                    <img
                                        src={pagelogo}
                                        alt="logo"
                                        className="w-100 rotation-animation"
                                    />
                                </a>
                            </li>
                        </ul>
                        <ul className="ps-0 mb-0">
                            <li>
                                <a href="#" className="text-decoration-none">
                                    <img
                                        src={headerimg2}
                                        alt="upper-flex-logo"
                                        className="w-100"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </Container>
                <nav className="my-nav-bg position-relative">
                    <Container>
                        <div className="d-flex justify-content-between align-items-center">
                            <ul className={` "ps-0 mb-0 d-lg-none"`}>
                                <li>
                                    <a href="#" className="text-decoration-none d-lg-none">
                                        <img
                                            src={pagelogo}
                                            alt="logo"
                                            className="rotation-animation"
                                            width="76"
                                        />
                                    </a>
                                </li>
                            </ul>
                            <label id="nav" className="position-relative z-3" onClick={menubar}>
                               <img src={nav_icon} alt="icon" className="nav_icon d-block d-lg-none"/>
                            </label>
                                <ul className={`${ show ? "end-0" : "end-100"} ps-0 mb-0 d-flex justify-content-lg-end align-items-center gap-3 py_29-30 menubar`}>
                                <li>
                                    <a
                                        href="#"
                                        className="text-decoration-none fs_xl color_black fw-normal ff_primery finish"
                                    >
                                        HOME
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-decoration-none fs_xl color_black fw-normal ff_primery finish"
                                    >
                                        SNEAKERS KOPEN
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-decoration-none fs_xl color_black fw-normal ff_primery finish"
                                    >
                                        INTERVIEWS
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-decoration-none fs_xl color_black fw-normal ff_primery finish"
                                    >
                                        SALE
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-decoration-none fs_xl color_black fw-normal ff_primery finish"
                                    >
                                        SNEAKER VAN DE DAG
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-decoration-none fs_xl color_black fw-normal ff_primery finish"
                                    >
                                        SNEAKER FORUM
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-decoration-none fs_xl color_black fw-normal ff_primery finish"
                                    >
                                        BLOG
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Container>
                </nav>
            </header>
        </div>
    );
};

export default Header;

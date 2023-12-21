
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bigshoes from "../Images/bigshoes.png";
import smallshoes1 from "../Images/headersmallshoes1.png";
import smallshoes2 from "../Images/headersmallshoes2.png";
import smallshoes3 from "../Images/headersmallshoes3.png";
import smallshoes4 from "../Images/headersmallshoes4.png";
import star from "../Images/star.png";
import React, { useState } from "react";
const Header2 = () => {
    let [count, setCount] = useState(1);

    function incrementCount() {
        setCount(prevCount => (prevCount < 10 ? prevCount + 1 : prevCount));
    }
    function decrementCount() {

      setCount(prevCount => (prevCount > 1 ? prevCount - 1 : 1));
    }
    return (
        <div className="pt-2 mt-2 mt-md-4 pt-md-5 pb-1" id="home">

            <Container className="mt-3">
                <Row>
                    <Col lg={6} className="pe-lg-4">
                        <img src={bigshoes} alt="red-big" className="w-100" />
                        <Row className="pt-4 mt-1">
                            <Col className="col-3">
                                <img src={smallshoes1} alt="black-shoes" className="w-100 rounded-1 color-macth"
                                    id="macth1" />
                            </Col>
                            <Col className="col-3">
                                <img src={smallshoes2} alt="red-shoes" className="w-100 rounded-1 color-macth" id="macth2" />
                            </Col>
                            <Col className="col-3">
                                <img src={smallshoes3} alt="greay-shoes" className="w-100 rounded-1 color-macth"
                                    id="macth3" />
                            </Col>
                            <Col className="col-3">
                                <img src={smallshoes4} alt="sneaker-type-shoes"
                                    className="w-100 rounded-1 color-macth" id="macth4" />
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6} className="ps-lg-5 pt-37">
                        <h1 className="fs_4xl fw-semibold ff_main color_black mb-1">
                            PREMIUM MENS SPORTS LATHER KEDS
                        </h1>
                        <div className="d-flex align-items-center gap-2 pt-2 mb-1">
                            <img src={star} alt="5star" />
                            <p className="mb-0 fs_2xl fw-normal ff_main color_dark_gray">
                                ( 5 Customer Review )
                            </p>
                        </div>
                        <p className="fs_2xl fw-normal ff_main color_main-gray lh-37 pt-4">
                            Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis
                            euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla
                            in leo ullamcorper, in finibus elit porta. Sed eget congue neque,
                            mattis finibus neque. In vel dolor ac augue pretium
                        </p>
                        <div className="d-flex align-items-center gap-4">
                            <p className="mb-0 fs_2xl color_black fw-medium ff_main lh-25">
                                Qty:
                            </p>
                            <div className="d-flex align-items-center gap-3 mb-1">
                                <div className="add-box align-items-center cursor-pointer">
                                    <button
                                        className="text-decoration-none color_primery_gray fs_2xl fw-normal lh-25 ff_secandry border-0 bg-transparent"
                                        onClick={decrementCount}>
                                        -
                                    </button>
                                    <div className="mb-0 color_primery_gray fs_2xl fw-normal lh-25 ff_secandry d-flex align-items-center">
                                        <p className='mb-0'>{count}</p>
                                    </div>
                                    <button
                                        className="text-decoration-none color_primery_gray fs_2xl fw-normal lh-25 ff_secandry border-0 bg-transparent"
                                        onClick={incrementCount}>
                                        +
                                    </button>
                                </div>
                                <button className="fs_2xl fw-medium ff_main color_white cart-button lh-25" id="carto">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                        <div className="pt-3 mt-2 d-flex justify-content-center justify-content-sm-start align-items-center">
                            <p className="mb-0 fs_2xl color_black fw-medium ff_main lh-25">
                                Size:
                            </p>
                            <select className="ms-3 rounded-pill px-3 py-2 mx-117 cursor-pointer">
                                <option value="">S</option>
                                <option value="">M</option>
                                <option value="">L</option>
                                <option value="">XL</option>
                                <option value="">XXL</option>
                            </select>
                        </div>
                        <div className="d-flex align-items-center gap-4 pt-3 mb-1">
                            <p className="mb-0 fs_2xl color_black fw-medium ff_main lh-25">
                                Color:
                            </p>
                            {/* <!-- color-card --> */}
                            <div className="d-flex align-items-center gap-1">
                                {/* <!-- custum-color-card --> */}
                                <div onclick="myshowes('macth2')" className="box-border">
                                    <div className="box-red"></div>
                                </div>
                                <div onclick="myshowes('macth4')" className="box-border">
                                    <div className="box-mahrun"></div>
                                </div>
                                <div onclick="myshowes('macth1')" className="box-border">
                                    <div className="box-balck"></div>
                                </div>
                                <div onclick="myshowes('macth3')" className="box-border">
                                    <div className="box-gray"></div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center pt-4 gap-27 border-custum-bottom pb-35">
                            <div className="d-flex align-items-center">
                                <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.6"
                                        d="M6.00977 2C4.07977 2 2.50977 3.57 2.50977 5.5C2.50977 7.08 3.56977 8.403 5.00977 8.837V15.997C5.00877 16.176 5.03677 17.778 6.18377 18.928C6.89177 19.64 7.83977 20 8.99977 20V22L12.9998 19L8.99977 16V18C7.17677 18 7.01577 16.466 7.00977 16V8.837C8.44977 8.403 9.50977 7.08 9.50977 5.5C9.50977 3.57 7.93877 2 6.00977 2ZM6.00977 7C5.18277 7 4.50977 6.327 4.50977 5.5C4.50977 4.673 5.18277 4 6.00977 4C6.83677 4 7.50977 4.673 7.50977 5.5C7.50977 6.327 6.83677 7 6.00977 7ZM19.0098 15.163V7.997C19.0048 6.391 17.9328 4 14.9998 4V2L10.9998 5L14.9998 8V6C16.8288 6 17.0008 7.539 17.0098 8V15.163C15.5698 15.597 14.5098 16.92 14.5098 18.5C14.5098 20.43 16.0798 22 18.0098 22C19.9398 22 21.5098 20.43 21.5098 18.5C21.5098 16.92 20.4498 15.597 19.0098 15.163ZM18.0098 20C17.1828 20 16.5098 19.327 16.5098 18.5C16.5098 17.673 17.1828 17 18.0098 17C18.8368 17 19.5098 17.673 19.5098 18.5C19.5098 19.327 18.8368 20 18.0098 20Z"
                                        fill="black" />
                                </svg>
                                </span>
                                <p className="mb-0 color_black_2 fs_lg fw-light lh-20">Compare</p>
                            </div>
                            <div className="d-flex align-items-center">
                                <span className='cursor-pointer'><svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.6"
                                        d="M14.5006 23.0258L14.1526 22.7358C6.67062 16.6458 4.64062 14.4998 4.64062 11.0198C4.64062 8.1198 6.96062 5.7998 9.86062 5.7998C12.2386 5.7998 13.5726 7.1338 14.5006 8.1778C15.4286 7.1338 16.7626 5.7998 19.1406 5.7998C22.0406 5.7998 24.3606 8.1198 24.3606 11.0198C24.3606 14.4998 22.3306 16.6458 14.8486 22.7358L14.5006 23.0258ZM9.86062 6.9598C7.59862 6.9598 5.80062 8.7578 5.80062 11.0198C5.80062 13.9778 7.65662 15.9498 14.5006 21.5178C21.3446 15.9498 23.2006 13.9778 23.2006 11.0198C23.2006 8.7578 21.4026 6.9598 19.1406 6.9598C17.1106 6.9598 16.0086 8.1778 15.1386 9.1638L14.5006 9.9178L13.8626 9.1638C12.9926 8.1778 11.8906 6.9598 9.86062 6.9598Z"
                                        fill="black" />
                                </svg>
                                </span>
                                <p className="mb-0 color_black_2 fs_lg fw-light lh-20">Wishlist</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center gap33 pt-4 my-contact">
                            <a href="#"><svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <g opacity="0.4">
                                    <path
                                        d="M5.04231 13.7499C5.84408 13.7475 6.61551 13.4431 7.20289 12.8974L12.9412 16.1763C12.749 16.9276 12.8337 17.723 13.18 18.417C13.5262 19.1109 14.1109 19.6569 14.8268 19.955C15.5427 20.2531 16.342 20.2834 17.0785 20.0404C17.8149 19.7973 18.4392 19.2971 18.837 18.6314C19.2348 17.9657 19.3795 17.179 19.2447 16.4153C19.1098 15.6516 18.7045 14.962 18.1027 14.4727C17.501 13.9835 16.7432 13.7273 15.9681 13.7511C15.1929 13.7749 14.4523 14.0771 13.8817 14.6024L8.14339 11.3235C8.20389 11.0943 8.23689 10.8569 8.24239 10.6195L13.8799 7.39741C14.4227 7.89128 15.1189 8.18345 15.8516 8.2249C16.5843 8.26634 17.309 8.05454 17.904 7.62503C18.4991 7.19552 18.9283 6.57442 19.1198 5.86595C19.3112 5.15748 19.2531 4.40472 18.9553 3.73398C18.6575 3.06323 18.1381 2.51531 17.4842 2.18212C16.8304 1.84893 16.0818 1.75076 15.3641 1.90406C14.6464 2.05737 14.0033 2.45283 13.5426 3.0241C13.0819 3.59537 12.8317 4.3077 12.834 5.04157C12.8376 5.30557 12.8734 5.56866 12.9412 5.82349L7.73089 8.79991C7.42874 8.33246 7.01018 7.95167 6.51633 7.69493C6.02248 7.4382 5.47033 7.31436 4.91414 7.33558C4.35795 7.3568 3.81684 7.52235 3.34399 7.81597C2.87114 8.10959 2.48281 8.52117 2.21715 9.01028C1.95149 9.49938 1.81765 10.0492 1.82877 10.6057C1.83989 11.1622 1.99559 11.7062 2.28057 12.1843C2.56556 12.6624 2.97002 13.0581 3.45422 13.3326C3.93843 13.6071 4.48571 13.7509 5.04231 13.7499Z"
                                        fill="black" />
                                </g>
                            </svg>
                            </a>
                            <div className="d-flex gap-4">
                                <a href="https://www.facebook.com/" target="_blank" className="text-decoration-none"><svg width="23"
                                    height="24" viewBox="0 0 23 24" fill="none">
                                    <g clip-path="url(#clip0_776_648)">
                                        <path
                                            d="M21.4958 23.7477C22.1892 23.7477 22.7515 23.1855 22.7515 22.492V2.25178C22.7515 1.55822 22.1892 0.996094 21.4958 0.996094H1.25569C0.562034 0.996094 0 1.55822 0 2.25178V22.492C0 23.1855 0.562034 23.7477 1.25569 23.7477H21.4958Z"
                                            fill="#395185" />
                                        <path
                                            d="M15.6983 23.7479V14.9373H18.6557L19.0985 11.5037H15.6983V9.3114C15.6983 8.31726 15.9744 7.63978 17.4 7.63978L19.2183 7.63898V4.56797C18.9036 4.52611 17.8244 4.43262 16.5688 4.43262C13.9472 4.43262 12.1525 6.03278 12.1525 8.97146V11.5037H9.1875V14.9373H12.1525V23.7479H15.6983Z"
                                            fill="white" />
                                    </g>
                                </svg>
                                </a>
                                <a href="https://twitter.com/" target="_blank" className="text-decoration-none"><svg width="24" height="19"
                                    viewBox="0 0 24 19" fill="none">
                                    <g clip-path="url(#clip0_776_651)">
                                        <path
                                            d="M23.5035 2.6541C22.6663 3.02532 21.7667 3.27621 20.8225 3.38908C21.7864 2.8114 22.5264 1.89663 22.8749 0.806694C21.9586 1.35041 20.9562 1.73349 19.9109 1.93938C19.0594 1.03225 17.8463 0.465332 16.5037 0.465332C13.9259 0.465332 11.8359 2.55527 11.8359 5.13295C11.8359 5.49884 11.8772 5.85504 11.9567 6.19676C8.07741 6.00204 4.63802 4.14379 2.33576 1.31976C1.93405 2.00915 1.70387 2.81105 1.70387 3.66636C1.70387 5.28581 2.52799 6.71445 3.78039 7.55154C3.03915 7.52833 2.31421 7.32812 1.6661 6.96764C1.66584 6.9872 1.66584 7.00675 1.66584 7.02639C1.66584 9.28794 3.27479 11.1745 5.41006 11.6034C4.7227 11.7903 4.00171 11.8176 3.30217 11.6833C3.89611 13.5378 5.61998 14.8872 7.66246 14.925C6.06497 16.1769 4.05226 16.9231 1.86544 16.9231C1.48862 16.9231 1.11713 16.901 0.751953 16.8579C2.81763 18.1823 5.27115 18.955 7.90713 18.955C16.4929 18.955 21.1878 11.8424 21.1878 5.67427C21.1878 5.47182 21.1833 5.27052 21.1743 5.07038C22.0881 4.40977 22.8768 3.59155 23.5035 2.6541Z"
                                            fill="#55ACEE" />
                                    </g>
                                </svg>
                                </a>
                                <a href="https://www.pinterest.com/pinartindia/" target="_blank" className="text-decoration-none"><svg
                                    width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g clip-path="url(#clip0_776_653)">
                                        <path
                                            d="M0.503906 12.372C0.503906 17.0302 3.30501 21.032 7.31328 22.7914C7.28128 21.9971 7.30759 21.0435 7.51128 20.1792C7.73 19.2557 8.97503 13.9805 8.97503 13.9805C8.97503 13.9805 8.61162 13.2541 8.61162 12.1806C8.61162 10.4948 9.58869 9.2357 10.8055 9.2357C11.8403 9.2357 12.3402 10.0129 12.3402 10.9436C12.3402 11.9837 11.6768 13.5396 11.3356 14.9807C11.0506 16.1874 11.9406 17.1717 13.1311 17.1717C15.2864 17.1717 16.7381 14.4034 16.7381 11.1235C16.7381 8.63021 15.0588 6.76405 12.0045 6.76405C8.55377 6.76405 6.40402 9.33746 6.40402 12.212C6.40402 13.2031 6.69623 13.902 7.15393 14.4432C7.36438 14.6918 7.39362 14.7918 7.31745 15.0772C7.26288 15.2865 7.13757 15.7904 7.08567 15.9901C7.00995 16.2783 6.77648 16.3813 6.51608 16.2749C4.92668 15.626 4.18645 13.8854 4.18645 11.9288C4.18645 8.6973 6.91184 4.82244 12.3167 4.82244C16.66 4.82244 19.5186 7.96535 19.5186 11.3391C19.5186 15.8016 17.0376 19.1355 13.3805 19.1355C12.1523 19.1355 10.9971 18.4717 10.6013 17.7176C10.6013 17.7176 9.9409 20.3386 9.80101 20.8447C9.55981 21.7218 9.08772 22.5985 8.65606 23.2817C9.70277 23.5912 10.7886 23.7483 11.8801 23.7482C18.162 23.7482 23.2555 18.655 23.2555 12.372C23.2555 6.08932 18.162 0.996094 11.8801 0.996094C5.59758 0.996094 0.503906 6.08932 0.503906 12.372Z"
                                            fill="#CB1F27" />
                                    </g>
                                </svg>
                                </a>
                                <a href="https://www.google.com/" target="_blank" className="text-decoration-none"><svg width="30" height="29"
                                    viewBox="0 0 30 29" fill="none">
                                    <path
                                        d="M26.3856 12.034H25.4202V11.9843H14.6345V16.7779H21.4073C20.4193 19.5684 17.7642 21.5716 14.6345 21.5716C10.6636 21.5716 7.44404 18.352 7.44404 14.3811C7.44404 10.4102 10.6636 7.19062 14.6345 7.19062C16.4675 7.19062 18.1351 7.88211 19.4048 9.01161L22.7945 5.6219C20.6541 3.62714 17.7911 2.39697 14.6345 2.39697C8.01628 2.39697 2.65039 7.76287 2.65039 14.3811C2.65039 20.9993 8.01628 26.3652 14.6345 26.3652C21.2528 26.3652 26.6186 20.9993 26.6186 14.3811C26.6186 13.5776 26.536 12.7932 26.3856 12.034Z"
                                        fill="#FFC107" />
                                    <path
                                        d="M4.0332 8.80309L7.97059 11.6907C9.03598 9.05296 11.6162 7.19062 14.6356 7.19062C16.4685 7.19062 18.1361 7.88211 19.4058 9.01161L22.7956 5.6219C20.6552 3.62714 17.7922 2.39697 14.6356 2.39697C10.0325 2.39697 6.04054 4.99573 4.0332 8.80309Z"
                                        fill="#FF3D00" />
                                    <path
                                        d="M14.6357 26.365C17.7312 26.365 20.5438 25.1804 22.6704 23.2539L18.9613 20.1153C17.7177 21.0611 16.1981 21.5726 14.6357 21.5714C11.5186 21.5714 8.8719 19.5838 7.87482 16.8101L3.9668 19.8211C5.95017 23.7021 9.97803 26.365 14.6357 26.365Z"
                                        fill="#4CAF50" />
                                    <path
                                        d="M26.3858 12.0341H25.4205V11.9844H14.6348V16.778H21.4076C20.9349 18.1061 20.0836 19.2666 18.9586 20.1162L18.9604 20.115L22.6695 23.2536C22.4071 23.4921 26.6189 20.3733 26.6189 14.3812C26.6189 13.5777 26.5362 12.7933 26.3858 12.0341Z"
                                        fill="#1976D2" />
                                </svg>
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Header2
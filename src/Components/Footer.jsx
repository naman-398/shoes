import React from 'react'
import footer_img from "../Images/footer-img.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Footer = () => {
    return (
        <div>
            <footer className="bg-dblack mt-5" id="blog">
                <Container className="pt-4 mt-1 mb-5 pb-4">
                    <a href="#"><img src={footer_img} alt="logo-footer" className="rotation-animation" /></a>
                    <Row>
                        <Col xl={5} >
                            <p className="ff_main fs_lg fw-normal lh-29 slider_tersiary_gray mb-2 max-448">
                                Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis
                                euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla
                                in leo ullamcorper, in finibus elit porta.
                            </p>
                            <div className="d-flex align-items-center gap-20 pt-4 my-contact">
                                <a href="https://www.facebook.com/" target="_blank" className="text-decoration-none"><svg width="35" height="35"
                                    viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M2.89746 17.4679C2.89746 24.6714 8.12925 30.6614 14.9717 31.8761V21.4113H11.3495V17.387H14.9717V14.1668C14.9717 10.5445 17.3057 8.53289 20.6068 8.53289C21.6524 8.53289 22.7802 8.69348 23.8258 8.85407V12.5573H21.9748C20.2035 12.5573 19.8015 13.4423 19.8015 14.57V17.387H23.6652L23.0217 21.4113H19.8015V31.8761C26.6439 30.6614 31.8757 24.6726 31.8757 17.4679C31.8757 9.45416 25.3556 2.89783 17.3866 2.89783C9.41757 2.89783 2.89746 9.45416 2.89746 17.4679Z"
                                        fill="white" />
                                </svg>
                                </a>
                                <a href="https://twitter.com/" target="_blank" className="text-decoration-none"><svg width="36" height="35"
                                    viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18.1609 2.17334C9.75942 2.17334 2.94727 8.9855 2.94727 17.3869C2.94727 25.7884 9.75942 32.6005 18.1609 32.6005C26.5623 32.6005 33.3745 25.7884 33.3745 17.3869C33.3745 8.9855 26.5623 2.17334 18.1609 2.17334ZM25.4722 13.6413C25.4824 13.8009 25.4824 13.9673 25.4824 14.1303C25.4824 19.1154 21.6858 24.8579 14.748 24.8579C12.6086 24.8579 10.6254 24.2364 8.9546 23.1667C9.26023 23.2007 9.55227 23.2143 9.8647 23.2143C11.6306 23.2143 13.2538 22.6166 14.5476 21.6046C12.8904 21.5707 11.4981 20.484 11.0227 18.9898C11.6034 19.0747 12.1264 19.0747 12.724 18.9219C11.8707 18.7485 11.1038 18.2851 10.5534 17.6103C10.0031 16.9356 9.70335 16.0911 9.70509 15.2204V15.1728C10.2043 15.4547 10.7918 15.6279 11.4064 15.6516C10.8897 15.3073 10.466 14.8407 10.1727 14.2934C9.87952 13.746 9.72588 13.1348 9.72546 12.5138C9.72546 11.8109 9.90884 11.1691 10.2382 10.6121C11.1854 11.7781 12.3672 12.7316 13.707 13.4109C15.0468 14.0902 16.5146 14.4799 18.0148 14.5548C17.4817 11.9909 19.397 9.91597 21.6994 9.91597C22.7861 9.91597 23.7641 10.371 24.4534 11.1045C25.3058 10.9449 26.1208 10.6257 26.8475 10.1978C26.5657 11.0706 25.9748 11.8075 25.1904 12.2727C25.951 12.1912 26.6845 11.9807 27.3637 11.6852C26.8509 12.4391 26.2091 13.1081 25.4722 13.6413Z"
                                        fill="white" />
                                </svg>
                                </a>
                                <a href="https://www.google.com/" target="_blank" className="text-decoration-none"><svg width="36" height="35"
                                    viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M17.9353 2.17334C9.53384 2.17334 2.72168 8.9855 2.72168 17.3869C2.72168 25.7884 9.53384 32.6005 17.9353 32.6005C26.3367 32.6005 33.1489 25.7884 33.1489 17.3869C33.1489 8.9855 26.3367 2.17334 17.9353 2.17334ZM19.1748 21.1496C17.684 23.2482 14.6888 23.8595 12.3524 22.9596C10.0093 22.0665 8.34528 19.5909 8.54563 17.0677C8.59657 13.9809 11.4389 11.2743 14.5258 11.3796C16.0064 11.3117 17.3987 11.9535 18.5329 12.8602C18.0473 13.4103 17.5481 13.9401 17.0116 14.4325C15.6498 13.4918 13.7108 13.2236 12.349 14.3103C10.3998 15.6584 10.3115 18.8404 12.186 20.2904C14.0096 21.9442 17.4565 21.1224 17.9624 18.5891C16.8214 18.5721 15.6736 18.5891 14.5326 18.5517C14.5292 17.8691 14.5258 17.19 14.5292 16.5074C16.4377 16.5006 18.3496 16.4972 20.2615 16.5142C20.3735 18.1204 20.1596 19.8252 19.1748 21.1496ZM27.4098 18.2189C26.8393 18.2257 26.2688 18.2291 25.6983 18.2325C25.6915 18.803 25.6881 19.3735 25.6881 19.944H23.98C23.9732 19.3735 23.9732 18.8064 23.9698 18.2359C23.3993 18.2291 22.8288 18.2257 22.2582 18.2189V16.5176C22.8288 16.5108 23.3993 16.5074 23.9698 16.5074C23.9732 15.9369 23.98 15.3664 23.9834 14.7959H25.6881L25.6983 16.5074C26.2688 16.5142 26.8393 16.5142 27.4098 16.5176V18.2189Z"
                                        fill="white" />
                                </svg>
                                </a>
                            </div>
                        </Col>
                        <Col xl={7} className="pt-xl-0 pt-5">
                            <Row className="foot-show">
                                <Col md={3} sm={4} className="col-6">
                                    <ul className="ps-0 mb-0">
                                        <li className="color_white ff_main fs_xl fw-semibold lh-25">
                                            CUSTOM LINKS
                                        </li>
                                    </ul>
                                    <ul className="ps-0 mb-0 pt-4">
                                        <li className="mb-3">
                                            <a href="#" className="text-decoration-none slider_tersiary_gray ff_main fs_xl fw-normal lh-25">Lorem
                                                ipsum</a>
                                        </li>
                                        <li className="mb-3">
                                            <a href="#" className="text-decoration-none slider_tersiary_gray ff_main fs_xl fw-normal lh-25">Lorem
                                                ipsum</a>
                                        </li>
                                    </ul>
                                </Col>
                                <Col md={3} sm={4} className="col-6">
                                    <ul className="ps-0 mb-0">
                                        <li className="color_white ff_main fs_xl fw-semibold lh-25">
                                            PRODUCTS
                                        </li>
                                    </ul>
                                    <ul className="ps-0 mb-0 pt-4">
                                        <li className="mb-3">
                                            <a href="#" className="text-decoration-none slider_tersiary_gray ff_main fs_xl fw-normal lh-25">Lorem
                                                ipsum</a>
                                        </li>
                                        <li className="mb-3">
                                            <a href="#" className="text-decoration-none slider_tersiary_gray ff_main fs_xl fw-normal lh-25">Lorem
                                                ipsum</a>
                                        </li>
                                        <li className="mb-3">
                                            <a href="#" className="text-decoration-none slider_tersiary_gray ff_main fs_xl fw-normal lh-25">Lorem
                                                ipsum</a>
                                        </li>
                                    </ul>
                                </Col>
                                <Col md={3} sm={4} className="col-6">
                                    <ul className="ps-0 mb-0">
                                        <li className="color_white ff_main fs_xl fw-semibold lh-25">
                                            OUR COMPANY
                                        </li>
                                    </ul>
                                    <ul className="ps-0 mb-0 pt-4">
                                        <li className="mb-3">
                                            <a href="#" className="text-decoration-none slider_tersiary_gray ff_main fs_xl fw-normal lh-25">Lorem
                                                ipsum</a>
                                        </li>
                                        <li className="mb-3">
                                            <a href="#" className="text-decoration-none slider_tersiary_gray ff_main fs_xl fw-normal lh-25">Lorem
                                                ipsum</a>
                                        </li>
                                    </ul>
                                </Col>
                                <Col md={3} sm={4} className="col-6">
                                    <ul className="ps-0 mb-0">
                                        <li className="color_white ff_main fs_xl fw-semibold lh-25">
                                            YOUR ACCOUNT
                                        </li>
                                    </ul>
                                    <ul className="ps-0 mb-0 pt-4">
                                        <li className="mb-3">
                                            <a href="#" className="text-decoration-none slider_tersiary_gray ff_main fs_xl fw-normal lh-25">Lorem
                                                ipsum</a>
                                        </li>
                                        <li className="mb-3">
                                            <a href="#" className="text-decoration-none slider_tersiary_gray ff_main fs_xl fw-normal lh-25">Lorem
                                                ipsum</a>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <p className="slider_tersiary_gray text-center ff_main fs_xl fw-normal lh-25 footerlastline mb-0 py-last">
                    © Copyright SNKRPLTS 2021.
                </p>
            </footer>
        </div>
    )
}

export default Footer
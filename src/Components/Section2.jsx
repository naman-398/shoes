import React from 'react'
import s2_img1 from "../Images/s2-img1.png";
import s2_img2 from "../Images/s2-img2.png";
import { Col, Container, Row } from "react-bootstrap";
const myinfo = [{
    img: s2_img1,
},
{
    img: s2_img2,
},
{
    img: s2_img1,
},
{
    img: s2_img2,
}]
const Section2 = () => {
    const mydata = myinfo.map((myinfo) => (
        <Col xl={3} lg={4} className="col-sm-6 mt-3"> 
        <div className="card-footlocker">
          <div className="img-padding-foot">
            <img src={myinfo.img} alt="footlooker" className='w-100'/>
          </div>
          <div className="down-content-padding">
            <div className="d-flex justify-content-between">
              <div className="d-flex gap-3 align-items-center">
                <p className="mb-0 color_black_3 ff_main fs_lg fw-normal lh-20">
                  Price:
                </p>
                <p className="mb-0 color_black fs_2xl fw-semibold lh-25">
                  €179,99
                </p>
              </div>
              <div>
                <button className="color_white ff_main fs_sm fw-normal lh-12 bestprize-button">
                  Best Price
                </button>
              </div>
            </div>
            <p className="mb-0 color_black_3 ff_main fs_lg fw-normal lh-20 pt-3">
              Size:
            </p>
            <div className="d-flex align-items-center pt-2 justify-content-between">
              <div className="size-chart size-chart-hover">
                <p className="mb-0 color_black_4 ff_main fs_lg fw-medium lh-20 text-center ">
                  41
                </p>
              </div>
              <div className="size-chart size-chart-hover">
                <p className="mb-0 color_black_4 ff_main fs_lg fw-medium lh-20 text-center ">
                  42
                </p>
              </div>
              <div className="size-chart size-chart-hover">
                <p className="mb-0 color_black_4 ff_main fs_lg fw-medium lh-20 text-center ">
                  43
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center pt-2 justify-content-between mb-1">
              <div className="size-chart size-chart-hover">
                <p className="mb-0 color_black_4 ff_main fs_lg fw-medium lh-20 text-center ">
                  44
                </p>
              </div>
              <div className="size-chart size-chart-hover">
                <p className="mb-0 color_black_4 ff_main fs_lg fw-medium lh-20 text-center ">
                  45
                </p>
              </div>
              <div className="size-chart size-chart-hover">
                <p className="mb-0 color_black_4 ff_main fs_lg fw-medium lh-20 text-center ">
                  46
                </p>
              </div>
            </div>
            <p className="mb-0 color_darkegreen ff_main fs_lg fw-normal lh-20 pt-3">
              View this product as:
            </p>
            <p className="color_tiny ff_main fs_lg fw-semibold lh-20 mb-0 pt-2">
              Foot Locker NL
            </p>
          </div>
        </div>
      </Col>
    ))
  return (
    <div  className="pt-2 mt-2 mt-md-4 pt-md-5 pb-1" id="sneakerkopen">
        <Container>
      <h2 className="color_black ff_main fs_3xl fw-medium lh-31">
        You can buy the Nike Air Max 97 Men's Shoe - White here:
      </h2>
      <Row className="pt-4">
       {mydata}
      </Row>
    </Container>
    </div>
  )
}

export default Section2
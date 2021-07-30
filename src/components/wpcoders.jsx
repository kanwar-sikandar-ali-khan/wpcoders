import { borderColor, color } from "@material-ui/system";
import React from "react";
import listimg from "../asstes/Images/list.svg";
import { useState } from "react";

const Wpcoders = () => {
  const [card, setCard] = useState([1, 2, 5]);
  return (
    <div>
      <div className="container-fluid  ">
        <div className="row">
          <div className="col-md-12 main-container pb-5">
            <div className="row">
              <div className="d-flex  justify-content-between col-md-12 mt-2  ">
                <div className="" style={{ height: "150px", width: "150px" }}>
                  <img
                    height="100%"
                    width="100%"
                    src="https://image.shutterstock.com/image-vector/wp-letter-logo-design-template-260nw-717524956.jpg"
                  />
                </div>

                <div
                  className="d-flex justify-content-center align-items-center "
                  style={{ height: "150px", width: "200px" }}
                >
                  <img height="50px" width="50px" src={listimg} />
                </div>
              </div>
            </div>

            <div className="row d-flex justify-content-center">
              <div className="col-sm-11 col-md-8 text-center mt-5 ">
                <p style={{ fontSize: "20px", fontWeight: "bolder" }}>
                  IT services refers to the application of business and
                  technical expertise to enable organizations in the creation,
                  management and optimization of or access to
                </p>
              </div>

              <div
                style={{ fontSize: "20px", fontWeight: "bold" }}
                className="col-sm-11  col-md-8 text-center mt-3"
              >
                <p>
                  Expertise to enable organizations in the creation, management
                  and optimization of or access to information and business
                  processes.
                </p>
              </div>
              <div className="col-md-12 text-center">
                <button type="button" class="btn btn-primary">
                  LETS GET STARTED
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center mt-5">
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>
              LETS WORK TOGETHER
            </p>
          </div>
        </div>
      </div> */}

      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-12 mt-3 px-5">
            <h1 style={{ color: "blue" }}>About us</h1>
            <hr />
            <p>
              Brands are always seeking ways to get the right content in front
              of their customers. But, with the escalation of digital
              touchpoints throughout the customer journey, it can be challenging
              to manage and deliver content to multiple channels effectively.
              touchpoints throughout the customer journey, it can be challenging
              to manage and deliver content to multiple channels effectively.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 mt-3 px-5">
            <h3 style={{ color: "#00BFFF" }}>COMPANY PHILOSPHY</h3>
            <hr />
            <p>
              Brands are always seeking ways to get the right content in front
              of their customers. But, with the escalation of digital
              touchpoints throughout the customer journey, it can be challenging
              to manage and deliver to manage and deliver content to multiple
              channels effectively.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div
            style={{ height: "300px", padding: "0px 45px 0px 45px" }}
            className="col-md-10"
          >
            <img
              width="100%"
              height="100%"
              src="https://images.unsplash.com/photo-1594383169997-250ec3fdd48d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80"
            ></img>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12  mt-5 px-5">
            <div>
              <h1>Service we offer</h1>
              <hr />
            </div>
          </div>
        </div>
      </div>

      <div className="container  bg-light py-5 ">
        <div className="row  justify-content-around">
          {card.map((v, i) => {
            return (
              <div className="col-md-3 pt-5 align-items-center  col-sm-12 card-div mt-3 ">
                <h3>GRAPHICS DESIGNING</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
                  accusantium consequatur repellat.
                  <div className="text-primary">Read More</div>
                  <br />
                </p>
              </div>
            );
          })}
        </div>

        <div className="row  justify-content-around mt-5">
          {card.map((v, i) => {
            return (
              <div className="col-md-3 pt-5   col-sm-12 card-div mt-3">
                <h3>GRAPHICS DESIGNING</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
                  accusantium consequatur repellat.{" "}
                  <div className="text-primary">Read More</div>
                  <br />
                </p>
              </div>
            );
          })}
        </div>

        <div className="row justify-content-around  mt-5 ">
          {card.map((v, i) => {
            return (
              <div className="col-md-3  pt-5  col-sm-12 card-div mt-3">
                <h3>GRAPHICS DESIGNING</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
                  accusantium consequatur repellat.{" "}
                  <div className="text-primary">Read More</div>
                  <br />
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Wpcoders;

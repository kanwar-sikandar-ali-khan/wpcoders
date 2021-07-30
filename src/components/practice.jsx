import React from "react";
import { useState, useEffect } from "react";
import { fire, facebookProvider, googleProvider } from "../config/Fire";
import {
  Container,
  Box,
  Grid,
  Typography,
  Paper,
  makeStyles,
  Input,
  Icon,
} from "@material-ui/core";
import ps from "../fonts/ProductSans-Bold.ttf";

// const useStyles = makeStyles({

// })

const useStyles = makeStyles((theme) => ({
  a: {
    border: "3px solid red",
  },
  b: {
    border: "2px solid green",
  },

  root: {
    flexGrow: 1,
  },

  AnalyticsMainBox: {
    backgroundColor: "#0880f8",
    height: "165px",
    // padding: theme.spacing(8),
    opacity: 1,
  },

  AnalyticsInnerBox: {
    textAlign: "center",
    color: "white",
    textTransform: "capitalize",
  },

  Box1: {
    height: 206,
    border: "2px solid red",
    margin: "0 auto 0 auto",
    textAlign: "center",
    borderRadius: "17px",
    border: "1px solid #C4C4C4",
    opacity: 1,
    boxShadow: "0px 4px 78px #0000000D",
  },

  innerBox1: {
    // border: "2px solid red",
    height: 82,
    margin: 7,
    background: "#3E4C65",
    borderRadius: 12,
    // opacity: 0.09,
    color: "black",
  },

  innerText: {
    color: "black",
    opacity: 1,
    fontWeight: "bold",
    fontFamily: "sans",
    fontSize: 22,
  },

  searchBarBox: {
    border: "2px solid red",
    height: 81,
    borderRadius: 23,
    boxShadow: "0px 4px 78px #0000000D",
    opacity: 1,
  },

  BigBox: {
    height: "456px",
    // border: "2px solid red",
    // margin: "0 auto 0 auto",
    // textAlign: "center",
    borderRadius: "17px",
    border: "1px solid #C4C4C4",
    opacity: 1,
    boxShadow: "0px 4px 78px #0000000D",
  },

  productSans: {
    fontFamily: productSans,
  },
}));

const productSans = {
  fontFamily: "product-sans",
  src: `url(${ps})`,
};

const Practice = () => {
  const [users, setUsers] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
      response.json().then((result) => {
        // console.log("users",result)

        setUsers(result);
      });
    });
  }, []);

  // console.log("users", users[0].name)

  const facebookLogin = () => {
    fire
      .auth()
      .signInWithPopup(facebookProvider)
      .then((result, error) => {
        if (error) {
          alert("Error", error);
        } else {
          alert("result", result);
          console.log(result);
        }
      });
  };

  const googleLogin = () => {
    fire
      .auth()
      .signInWithPopup(googleProvider)
      .then((result, error) => {
        if (error) {
          alert("Error", error);
        } else {
          alert("result", result);
          console.log(result);
        }
      });
  };
  //  style={{border:'2px solid red'}}
  return (
  <div>

      <div
        style={{
          // display: "flex",
          // flexDirection: "column",
          // justifyContent: "center",
          // alignItems: "center",
          border: "3px solid black",
          // height: "200px",
        }}
      >
        <div
          style={{
            border: "2px solid red",
            // width: "700px",
            // padding:"20px 70px 20px 70px"


            
          }}
        >
          <p   style={{
            border: "2px solid red",            
          }}>
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            eveniet distinctio, dignissimos culpa eos accusantium repudiandae
            minima nisi quis tenetur odio neque suscipit incidunt placeat
            possimus a ducimus sed at! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Iusto, sed aliquam eaque ipsa necessitatibus
            magnam voluptatem laudantium quaerat error ut voluptas doloremque
            maxime doloribus dolorem facilis, sit officiis, eum minima. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quos facere
            commodi illo rem placeat voluptas culpa dolorum, distinctio corporis
            neque reiciendis dolor! Tenetur, dicta minus veniam voluptatibus
            ipsum enim pariatur. */}

            {/* dasdasd */}
          </p>
        </div>
      </div>

      <div style={{
            border: "2px solid red",            
          }}>
        heloo
      </div>
    </div>
  );
};

export default Practice;

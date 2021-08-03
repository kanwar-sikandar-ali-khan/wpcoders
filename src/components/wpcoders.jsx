import { borderColor, color } from "@material-ui/system";
import React from "react";
import listimg from "../asstes/Images/list.svg";
import { useState } from "react";
import WPLOGO from "../../src/asstes/Images/WPLOGO.png";
import wpAbout from "../../src/asstes/Images/wpAbout.png";
import { FaListUl } from "react-icons/fa";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import LinearProgress from "@material-ui/core/LinearProgress";
import anim from "../../src/wpAsstes/images/anim.png";
import appdev from "../../src/wpAsstes/images/appdev.png";
import cont from "../../src/wpAsstes/images/cont.png";
import dig from "../../src/wpAsstes/images/dig.png";
import graph from "../../src/wpAsstes/images/graph.png";
import serch from "../../src/wpAsstes/images/serch.png";
import social from "../../src/wpAsstes/images/social.png";
import web from "../../src/wpAsstes/images/web.png";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 2,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
  },
}))(LinearProgress);

// Inspired by the former Facebook spinners.
const useStylesFacebook = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  bottom: {
    color: theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  top: {
    color: "#1a90ff",
    animationDuration: "550ms",
    position: "absolute",
    left: 0,
  },
  circle: {
    strokeLinecap: "round",
  },
}));

function FacebookCircularProgress(props) {
  const classes = useStylesFacebook();

  return (
    <div className={classes.root}>
      <CircularProgress
        variant="determinate"
        className={classes.bottom}
        size={40}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        className={classes.top}
        classes={{
          circle: classes.circle,
        }}
        size={40}
        thickness={4}
        {...props}
      />
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const Wpcoders = () => {
  const classes = useStyles();
  const [card, setCard] = useState([1, 2, 5]);

  const [cardRow1, setCardRow1] = useState([
    {
      heading: "Graphic Designing ",

      wording: `We believe that creativity has the power to
 transform.Our constant effort to let our clients
 climb their way to the top helps us in creating
 impactful brands. We can generate aesthetically
 pleasing and desirable design ideas for your
 brand. Our unique and impactful designs can
 accurately articulate your company’s vision`,

      number: "01",
      img: graph,
    },

    {
      heading: "Video Animation",

      wording: `We consider video marketing the most effective  part
of every successful marketing strategy. Our expert
designers and video makers have the ability to
create videos that guarantee positive ROI. Our videos
have the potential to grab the attention of your target
audience. We have been providing flawless work by
actively focusing the specifics of the project`,

      number: "02",
      img: anim,
    },

    {
      heading: "Social Media Management",

      wording: `we know that strategic approach and transparency
are the most effective factors necessary for 
the success of every social Media campaign.
we are here to ensure engaging social Media 
campaigns for your brand. our ability to conduct
meticulous and result-oriented split tests can 
help you in achieving expected sales goals.`,

      number: "03",
      img: social,
    },

    {
      heading: `Web Design
      & Development `,

      wording: `WP Coders has an exceptional and well-
      equipped team of proficient web developers
      and designers. There is no doubt that the forward
      -thinking of our team has made us one of the
      leading web-designing and development 
      companies`,

      number: "04",

      img: web,
    },

    {
      heading: "Mobile App Development ",

      wording: `Our ultimate goal is to solve world’s most
      complicated products with technology. We have
      an entire team of experts to validate your
      product idea, get rid of hurdles, and charting a
      proper roadmap to ensure end-to-end and
      scalable customized products`,

      number: "05",
      img: appdev,
    },

    {
      heading: "Digital Marketing ",

      wording: `With our deep roots in paid marketing, we can
      ensure scalable, measurable, and predictable
      results to you. Our seasoned and well-skilled
      marketers create strategy that drives growth. So
      whenever you need a clear, well-executed, and
      exceptionally crafted marketing plan for your
      brand, you can rely on our creative and innovative
      team
      .`,

      number: "06",
      img: dig,
    },

    {
      heading: `Content Management`,

      wording: `Content marketing is certainly a very significant
      aspects of every successful online strategy. We
      focus in creating SEO optimized content for all
      your digital media platforms. Producing high-
      quality and unique content at an unmatchable
      scale is our primary goal. Our network of
      proficient and specialized content writers can
      create engaging content for your brand`,

      number: "07",
      img: cont,
    },

    {
      heading: "Serach Engine Optimization",

      wording: `Getting top ranks on the Google search engine is
      not as simple as it seems. Only with experienced
      and capable team, we have been able to bring
      traffic for our clients. Our SEO strategies can out
      -weigh your competitors’ tactics and let you grab
      the attention of your target-audience`,

      number: "08",
      img: serch,
    },
  ]);

  return (
    <>
      <div>
        <div className="container-fluid">
          <div className="row">
            <div
              style={{ paddingBottom: "90px" }}
              className="col-md-12 main-container"
            >
              <div className="row">
                <div className="d-flex  justify-content-between col-md-12 mt-2  ">
                  <div className="" style={{ height: "120px", width: "300px" }}>
                    <img
                      style={{ borderRadius: "25px" }}
                      height="100%"
                      width="100%"
                      src={WPLOGO}
                    />
                  </div>

                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ height: "120px", width: "200px" }}
                  >
                    <FaListUl size="35px" color="white" />
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-sm-11 col-md-8 text-center mt-5">
                  <p
                    style={{
                      fontSize: "50px",
                      fontWeight: "bold",
                      color: "white",
                    }}
                    className="slideFirstLine"
                  >
                    Your full-Service IT Partner For The
                    <br /> Most Complex Problems
                  </p>
                </div>

                <div
                  style={{
                    fontSize: "20px",

                    color: "white",
                  }}
                  className="col-sm-12  col-md-5 text-center mt-3"
                >
                  <p>
                    Accelerating businesses' growth by offering digital
                    marketing
                    <br /> and IT solutions engineered for excellence
                  </p>
                </div>
                <div className="col-md-12 text-center mt-4">
                  <button type="button" className="btn btn-primary">
                    LET’S GET STARTED
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div
              style={{ marginTop: "80px" }}
              className="col-md-12 d-flex justify-content-center"
            >
              <p
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  textDecoration: "underline",
                  color: "#00008B",
                }}
              >
                Let’s Work Together!
              </p>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div style={{ padding: "0px 30px 0px 40px" }} className="col-md-6">
              <div
                className="row  d-flex justify-content-between px-3 mt-2"
                style={{}}
              >
                <div className="col-xs-11 ">
                  <p>Marketing</p>
                </div>
                <div className="col-xs-1 ">
                  <p>65%</p>
                </div>
              </div>

              <div className="row ">
                <div className="col-md-12">
                  <div className={classes.root}>
                    <BorderLinearProgress variant="determinate" value={65} />
                  </div>
                </div>
              </div>
              <div className="row  d-flex justify-content-between px-3 mt-2">
                <div className="col-xs-11 ">
                  <p>Branding</p>
                </div>
                <div className="col-xs-1 ">
                  <p>85%</p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className={classes.root}>
                    <BorderLinearProgress variant="determinate" value={85} />
                  </div>
                </div>
              </div>
              <div className="row  d-flex justify-content-between px-3 mt-2">
                <div className="col-xs-11 ">
                  <p>Search Engine Optimization</p>
                </div>
                <div className="col-xs-1 ">
                  <p>92%</p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className={classes.root}>
                    <BorderLinearProgress variant="determinate" value={92} />
                  </div>
                </div>
              </div>
              <div className="row  d-flex justify-content-between px-3 mt-2">
                <div className="col-xs-11 ">
                  <p>Paid Advertising </p>
                </div>
                <div className="col-xs-1 ">
                  <p>85%</p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className={classes.root}>
                    <BorderLinearProgress variant="determinate" value={85} />
                  </div>
                </div>
              </div>
            </div>
            <div style={{ padding: "0px 30px 0px 40px" }} className="col-md-6 ">
              <div
                className="row  d-flex justify-content-between px-3 mt-2"
                style={{}}
              >
                <div className="col-xs-11 ">
                  <p>Product Development </p>
                </div>
                <div className="col-xs-1 ">
                  <p>55%</p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className={classes.root}>
                    <BorderLinearProgress variant="determinate" value={55} />
                  </div>
                </div>
              </div>
              <div className="row  d-flex justify-content-between px-3 mt-2">
                <div className="col-xs-11 ">
                  <p>Application Development</p>
                </div>
                <div className="col-xs-1 ">
                  <p>85%</p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className={classes.root}>
                    <BorderLinearProgress variant="determinate" value={85} />
                  </div>
                </div>
              </div>
              <div className="row  d-flex justify-content-between px-3 mt-2">
                <div className="col-xs-11 ">
                  <p>Software Development</p>
                </div>
                <div className="col-xs-1 ">
                  <p>95%</p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className={classes.root}>
                    <BorderLinearProgress variant="determinate" value={95} />
                  </div>
                </div>
              </div>
              <div
                className="row  d-flex justify-content-between px-3 mt-2"
                style={{}}
              >
                <div className="col-xs-11 ">
                  <p>Consulting</p>
                </div>
                <div className="col-xs-1 ">
                  <p>89%</p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className={classes.root}>
                    <BorderLinearProgress variant="determinate" value={89} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "60px" }} className="container-fluid ">
          <div className="row">
            <div className="col-md-12 mt-3 px-5">
              <h1 style={{ color: "#00008B" }}>ABOUT US</h1>
              <hr />
              <p style={{ fontSize: "18px", color: "" }}>
                WP Coders is a leading and rapidly growing IT Company that came
                into existence in 2019. Our company has achieved great things
                within a short span of time. Our clients all over the globe are
                now benefiting from our services. We are catering clients from
                different regions and parts of the world including UAE, USA,
                Canada, UK etc. Our strong and skilled team has enabled us to
                compete with huge and pre-existing IT giants. We can say that
                the credit for making us stand out in the world of IT goes to
                our team
              </p>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 mt-3 px-5">
              <h3 style={{ color: "#00BFFF" }}>COMPANY PHILOSOPHY</h3>
              <hr />
              <p>
                Our passion is the main force that drives us into performing
                well for Abtach. We love what we do and that’s why, we’ve
                strengthened our ties with IT enthusiasts who are genuinely
                committed to take this company to the peak of its success. We
                believe in respecting our people’s rights and privacy and that
                leads us into ensuring a win-win situation for our company and
                its people
              </p>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row d-flex justify-content-center">
            <div
              style={{
                height: "420px",
                padding: "0px 45px 0px 45px",
                backgroundImage: `url(${wpAbout})`,
                backgroundSize: "cover",
              }}
              className="col-md-10"
            >
              {/* <img width="100%" height="100%" src={wpAbout}></img> */}
            </div>
          </div>
        </div>

        <div className="container-fluid bg-light mt-5">
          <div className="row">
            <div className="col-md-12  mt-5 px-5">
              <div>
                <h1 style={{ color: "#00008B" }}>Services We Offer</h1>
                <hr />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-light pb-5 pt-2">
          <div
            style={{ flexWrap: "wrap", justifyContent: "center" }}
            className="d-flex"
          >
            {cardRow1.map((v, i) => {
              return (
                <div className="px-3" style={{}}>
                  <div
                    className="card-div pt-3"
                    style={{
                      width: "500px",
                      backgroundImage: `url(${v.img})`,
                      backgroundSize: "cover",
                      marginTop: "35px",
                    }}
                  >
                    <div
                      className="d-flex"
                      style={{
                        flexDirection: "column",

                        height: "270px",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <h3>{v.heading}</h3>
                        <p>{v.wording}</p>
                      </div>

                      <div
                        className="d-flex pr-4"
                        style={{
                          justifyContent: "space-between",
                          alignItems: "flex-end",
                        }}
                      >
                        <div>
                          <p>Read More</p>
                        </div>

                        <div>
                          <p style={{ fontSize: "18px" }}>{v.number}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Wpcoders;

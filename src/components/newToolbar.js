import React, { Fragment, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import { Menu, MenuItem, Tooltip, Box } from "@material-ui/core";
import MoreIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import setting from "../asstes/Images/setting.png";
import displaygrid from "../asstes/Images/display-grid.png";
import displayfull from "../asstes/Images/display-full.png";
import rightArrow from "../asstes/Images/rightArrow.svg";
import leftArrow from "../asstes/Images/leftArrow.png";
import copyType from "../asstes/Images/copytype.svg";
import ABimage from "../asstes/Images/AB.svg";
import favstar from "../asstes/Images/favstar.svg";
import twitter from "../asstes/Images/twitter.svg";
import facebookLogo from "../asstes/Images/facebookLogo.svg";
import instagramLogo from "../asstes/Images/instagramLogo.svg";
import printerestLogo from "../asstes/Images/PinterestLogo.svg";
import googleLogo from "../asstes/Images/googleLogo.svg";
import tiktokLogo from "../asstes/Images/tiktokLogo.svg";


const useStyles = makeStyles((theme) => ({
  addSetting: {
    flexGrow: 1,
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("lg")]: {
      display: "flex",
    },
  },

  hideDropDown: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "flex",
    },
  },
}));

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.grey[900],
    color: "white",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);

const DownTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.grey[200],
    color: "black",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);

const NewToolbar = () => {
  const classes = useStyles();
  const [mobileMenuAnchor, setmobileMenuAnchor] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMenuAnchor);
  const [anchorElAd, setAnchorElAd] = useState(null);


  const openMobileMenu = (event) => {
    setmobileMenuAnchor(event.currentTarget);
  };

  const closeMobileMenu = () => {
    setmobileMenuAnchor(null);
  };

  const handleClickAd = (event) => {
    setAnchorElAd(event.currentTarget);
  };

  const handleCloseAd = () => {
    setAnchorElAd(null);
  }
 

  const longText = `
Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
Praesent non nunc mollis, fermentum neque at, semper arcu.
Nullam eget est sed sem iaculis gravida eget vitae justo.
`;

  const mobileMenu = (
    <Menu
      anchorEl={mobileMenuAnchor}
      id="mobile-menu"
      keepMounted
      open={isMobileMenuOpen}
    >
      <MenuItem onClick={closeMobileMenu}>
        <div>
          <span>
            <span style={{ textTransform: "initial", cursor: "pointer" }}>
              Ad Display
            </span>
            <img
              style={{ marginLeft: 10 }}
              src={displaygrid}
              height="20"
              width="20"
              alt="grid"
            />
            <img
              style={{ marginLeft: 10 }}
              src={displayfull}
              height="20"
              width="20"
              alt="grid"
            />
          </span>
        </div>
      </MenuItem>

      <MenuItem onClick={closeMobileMenu}>
        <div
          style={{
            display: "flex",
            height: "39px",
            width: "95px",
            alignItems: "center",
            marginRight: "30px",
            borderRight: "1px solid #D8D8D8",
            borderLeft: "1px solid #D8D8D8",
            justifyContent: "center",
          }}
        >
          <LightTooltip title="Previous" placement="top" arrow>
            <div>
              <img src={leftArrow} height="38px" width="38px" alt="grid" />
            </div>
          </LightTooltip>

          <LightTooltip title="Next Ad" placement="top" arrow>
            <div style={{ marginLeft: "10px" }}>
              <img src={rightArrow} alt="grid" height="38px" width="38px" />
            </div>
          </LightTooltip>
        </div>
      </MenuItem>

      <MenuItem onClick={closeMobileMenu}>
        <div style={{ marginRight: "20px" }}>
          <LightTooltip title="Copy Type" placement="top" arrow>
            <span>
              <span>
                <img src={copyType} height="20" width="20" alt="grid" />
              </span>

              <span
                style={{
                  marginLeft: 7,
                  textTransform: "initial",
                  cursor: "pointer",
                }}
              >
                Copy Type
              </span>
            </span>
          </LightTooltip>

          <DownTooltip
                  disableFocusListener
                  disableTouchListener
                  placement="bottom"
                  arrow
                  title={longText}
                >
                  <IconButton>
                    <KeyboardArrowDownIcon />
                  </IconButton>
                </DownTooltip>
        </div>
      </MenuItem>

      <MenuItem onClick={closeMobileMenu}>
        <div style={{ marginRight: "20px" }}>
          <span>
            <LightTooltip title="A/b Test" placement="top" arrow>
              <img src={ABimage} height="20" width="20" alt="grid" />
            </LightTooltip>

            <span
              style={{
                marginLeft: 10,
                textTransform: "initial",
                cursor: "pointer",
              }}
            >
              A/B Test
            </span>

            <DownTooltip
                  disableFocusListener
                  disableTouchListener
                  placement="bottom"
                  arrow
                  title={longText}
                >
                  <IconButton>
                    <KeyboardArrowDownIcon />
                  </IconButton>
                </DownTooltip>
          </span>
        </div>
      </MenuItem>

      <MenuItem onClick={closeMobileMenu}>
        <div
          style={{
            width: "70px",
            height: "39px",
            textAlign: "center",
            marginRight: "5px",
            borderRight: "1px solid #D8D8D8",
            borderLeft: "1px solid #D8D8D8",
          }}
        >
          <LightTooltip title="Favorite Ads" placement="top" arrow>
            <span>
              <img src={favstar} height="20" width="20" alt="grid" />
            </span>
          </LightTooltip>
        </div>
      </MenuItem>

      <MenuItem onClick={closeMobileMenu}>
        <div>
          <LightTooltip title="Ad platform" placement="top" arrow>
            <span>
              <span>
                <img src={twitter} height="20" width="20" alt="grid" />
              </span>

              <span
                style={{
                  marginLeft: 10,
                  textTransform: "initial",
                  cursor: "pointer",
                }}
              >
                Ad Platforms
              </span>
            </span>
          </LightTooltip>

          <IconButton
            aria-controls="ad-platform"
            aria-haspopup="true"
            onMouseOver={handleClickAd}
          >
            <KeyboardArrowDownIcon />
          </IconButton>
        </div>

        <Menu
          id="ad-platform"
          anchorEl={anchorElAd}
          keepMounted
          open={Boolean(anchorElAd)}
          onClose={handleCloseAd}
        >
          <MenuItem onClick={handleCloseAd}>
            <span>
              <img src={facebookLogo} height="20px" width="20px" alt="icon" />
            </span>
            <span style={{ marginLeft: "10px" }}> Facebook</span>
          </MenuItem>
          <MenuItem onClick={handleCloseAd}>
            <span>
              <img src={instagramLogo} height="20px" width="20px" alt="icon" />
            </span>
            <span style={{ marginLeft: "10px" }}> Instagram</span>
          </MenuItem>
          <MenuItem onClick={handleCloseAd}>
            <span>
              <img src={printerestLogo} height="20px" width="20px" alt="icon" />
            </span>
            <span style={{ marginLeft: "10px" }}> Pinterest</span>
          </MenuItem>
          <MenuItem onClick={handleCloseAd}>
            <span>
              <img src={googleLogo} height="20px" width="20px" alt="icon" />
            </span>
            <span style={{ marginLeft: "10px" }}> Mail</span>
          </MenuItem>
          <MenuItem onClick={handleCloseAd}>
            <span>
              <img src={tiktokLogo} height="20px" width="20px" alt="icon" />
            </span>
            <span style={{ marginLeft: "10px" }}>Tiktok </span>
          </MenuItem>
        </Menu>
      </MenuItem>
    </Menu>
  );

  const desktopView = () => {
    return (
      <>
        <header>
          <Toolbar>
            <div className={classes.addSetting}>
              <span>
                <LightTooltip title="Ad Copy Settings" placement="top" arrow>
                  <span>
                    <span>
                      <img src={setting} height="20" width="20" alt="grid" />
                    </span>

                    <span
                      style={{
                        marginLeft: 10,
                        textTransform: "initial",
                        cursor: "pointer",
                      }}
                    >
                      Ad Setting
                    </span>
                  </span>
                </LightTooltip>

          

                <DownTooltip
                  disableFocusListener
                  disableTouchListener
                  placement="bottom"
                  arrow
                  title={longText}
                >
                  <IconButton>
                    <KeyboardArrowDownIcon  />
                  </IconButton>
                </DownTooltip>
              </span>
            </div>

            <div className={classes.sectionDesktop}>
              <div style={{ marginRight: "35px", marginTop: "5px" }}>
                <span>
                  <span style={{ textTransform: "initial", cursor: "pointer" }}>
                    Ad Display
                  </span>
                  <img
                    style={{ marginLeft: 10 }}
                    src={displaygrid}
                    height="20"
                    width="20"
                    alt="grid"
                  />
                  <img
                    style={{ marginLeft: 10 }}
                    src={displayfull}
                    height="20"
                    width="20"
                    alt="grid"
                  />
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  height: "39px",
                  width: "90px",
                  alignItems: "center",
                  marginRight: "30px",
                  borderRight: "1px solid #D8D8D8",
                  borderLeft: "1px solid #D8D8D8",
                  justifyContent: "center",
                }}
              >
                <LightTooltip title="Previous" placement="top" arrow>
                  <div>
                    <img
                      src={leftArrow}
                      height="38px"
                      width="38px"
                      alt="grid"
                    />
                  </div>
                </LightTooltip>

                <LightTooltip title="Next Ad" placement="top" arrow>
                  <div>
                    <img
                      src={rightArrow}
                      alt="grid"
                      height="38px"
                      width="38px"
                    />
                  </div>
                </LightTooltip>
              </div>

              <div style={{ marginRight: "20px" }}>
                <LightTooltip title="Copy Type" placement="top" arrow>
                  <span>
                    <span>
                      <img src={copyType} height="20" width="20" alt="grid" />
                    </span>

                    <span
                      style={{
                        marginLeft: 7,
                        textTransform: "initial",
                        cursor: "pointer",
                      }}
                    >
                      Copy Type
                    </span>
                  </span>
                </LightTooltip>

            



                <DownTooltip
                  disableFocusListener
                  disableTouchListener
                  placement="bottom"
                  arrow
                  title={longText}
                >
                  <IconButton>
                    <KeyboardArrowDownIcon />
                  </IconButton>
                </DownTooltip>

              
              </div>

              <div style={{ marginRight: "20px" }}>
                <span>
                  <LightTooltip title="A/b Test" placement="top" arrow>
                    <img src={ABimage} height="20" width="20" alt="grid" />
                  </LightTooltip>

                  <span
                    style={{
                      marginLeft: 10,
                      textTransform: "initial",
                      cursor: "pointer",
                    }}
                  >
                    A/B Test
                  </span>

               

                  <DownTooltip
                  disableFocusListener
                  disableTouchListener
                  placement="bottom"
                  arrow
                  title={longText}
                >
                  <IconButton>
                    <KeyboardArrowDownIcon />
                  </IconButton>
                </DownTooltip>
                </span>
              </div>

              <div
                style={{
                  width: "70px",
                  height: "39px",
                  textAlign: "center",
                  marginRight: "5px",
                  borderRight: "1px solid #D8D8D8",
                  borderLeft: "1px solid #D8D8D8",
                }}
              >
                <LightTooltip title="Favorite Ads" placement="top" arrow>
                  <span>
                    <img
                      style={{ marginTop: "7px" }}
                      src={favstar}
                      height="20"
                      width="20"
                      alt="grid"
                    />
                  </span>
                </LightTooltip>
              </div>

              <div style={{ marginLeft: "25px" }}>
                <LightTooltip title="Ad platform" placement="top" arrow>
                  <span>
                    <span>
                      <img src={twitter} height="20" width="20" alt="grid" />
                    </span>

                    <span
                      style={{
                        marginLeft: 10,
                        textTransform: "initial",
                        cursor: "pointer",
                      }}
                    >
                      Ad Platforms
                    </span>
                  </span>
                </LightTooltip>

                <IconButton
                  aria-controls="ad-platform"
                  aria-haspopup="true"
                  onMouseOver={handleClickAd}
                >
                  <KeyboardArrowDownIcon />
                </IconButton>
              </div>

              <Menu
                id="ad-platform"
                anchorEl={anchorElAd}
                keepMounted
                open={Boolean(anchorElAd)}
                onClose={handleCloseAd}
              >
                <MenuItem onClick={handleCloseAd}>
                  <span>
                    <img
                      src={facebookLogo}
                      height="20px"
                      width="20px"
                      alt="icon"
                    />
                  </span>
                  <span style={{ marginLeft: "10px" }}> Facebook</span>
                </MenuItem>
                <MenuItem onClick={handleCloseAd}>
                  <span>
                    <img
                      src={instagramLogo}
                      height="20px"
                      width="20px"
                      alt="icon"
                    />
                  </span>
                  <span style={{ marginLeft: "10px" }}> Instagram</span>
                </MenuItem>
                <MenuItem onClick={handleCloseAd}>
                  <span>
                    <img
                      src={printerestLogo}
                      height="20px"
                      width="20px"
                      alt="icon"
                    />
                  </span>
                  <span style={{ marginLeft: "10px" }}> Pinterest</span>
                </MenuItem>
                <MenuItem onClick={handleCloseAd}>
                  <span>
                    <img
                      src={googleLogo}
                      height="20px"
                      width="20px"
                      alt="icon"
                    />
                  </span>
                  <span style={{ marginLeft: "10px" }}> Mail</span>
                </MenuItem>
                <MenuItem onClick={handleCloseAd}>
                  <span>
                    <img
                      src={tiktokLogo}
                      height="20px"
                      width="20px"
                      alt="icon"
                    />
                  </span>
                  <span style={{ marginLeft: "10px" }}>Tiktok </span>
                </MenuItem>
              </Menu>
            </div>

            <div className={classes.hideDropDown}>
              <IconButton color="inherit" onClick={openMobileMenu} >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </header>
      </>
    );
  };
  return (
    <>
      {desktopView()}
      {mobileMenu}
    </>
  );
};

export default NewToolbar;











{/* <div className={classes.twoIconsDiv}>
<div
  style={{
    lineHeight: "2px",
    textAlign: "center",
    paddingTop: "5px",
  }}
>
  <CommentButton fontSize={15} />
  <p style={{ fontSize: "13px" }}>12</p>
</div>
<div
  style={{
    lineHeight: "2px",
    textAlign: "center",
    paddingTop: "5px",
  }}
>
  <Likebutton fontSize={15} />
  <p style={{ fontSize: "13px" }}>24</p>
</div>
</div> */}


// twoIconsDiv: {
//   height: "60px",
//   width: "100px",
//   border: "3px solid orange",
//   display: "flex",
// },
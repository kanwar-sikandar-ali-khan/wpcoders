import React, { Fragment, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { Menu, MenuItem, Tooltip, Container } from "@material-ui/core";
import MoreIcon from "@material-ui/icons/MoreVert";
import Box from "@material-ui/core/Box";

import setting from "../asstes/Images/setting.png";
import displaygrid from "../asstes/Images/display-grid.png";
import displayfull from "../asstes/Images/display-full.png";
import rightArrow from "../asstes/Images/rightArrow.svg";
import leftArrow from "../asstes/Images/leftArrow.png";
import copyType from "../asstes/Images/copytype.svg";
import ABimage from "../asstes/Images/AB.svg";
import favstar from "../asstes/Images/favstar.svg";
import twitter from "../asstes/Images/twitter.svg";
import downArrow from "../asstes/Images/downArrow.png";
import facebookLogo from "../asstes/Images/facebookLogo.svg";
import instagramLogo from "../asstes/Images/instagramLogo.svg";
import printerestLogo from "../asstes/Images/PinterestLogo.svg";
import googleLogo from "../asstes/Images/googleLogo.svg";
import tiktokLogo from "../asstes/Images/tiktokLogo.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  hideDropDown: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
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

export const ToolbarComp = () => {
  const classes = useStyles();
  const [mobileMenuAnchor, setmobileMenuAnchor] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMenuAnchor);

  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElAd, setAnchorElAd] = useState(null);
  const [anchorElCopyType, setAnchorElCopyType] = useState(null);

  const openMobileMenu = (event) => {
    setmobileMenuAnchor(event.currentTarget);
  };

  const closeMobileMenu = () => {
    setmobileMenuAnchor(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickAd = (event) => {
    setAnchorElAd(event.currentTarget);
  };

  const handleCloseAd = () => {
    setAnchorElAd(null);
  };

  const handleClickCopyType = (event) => {
    setAnchorElCopyType(event.currentTarget);
  };

  const handleCloseCopyType = () => {
    setAnchorElCopyType(null);
  };
  const mobileMenu = (
    <Menu
      anchorEl={mobileMenuAnchor}
      id="mobile-menu"
      keepMounted
      open={isMobileMenuOpen}
    >
      <MenuItem onClick={closeMobileMenu}>
        <Box mr={3}>
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
        </Box>
      </MenuItem>

      <MenuItem onClick={closeMobileMenu}>
        <Box
          width="90px"
          height="36px"
          style={{ display: "flex" }}
          mr={3}
          mb={1}
          borderColor="grey.300"
          borderLeft={1}
          borderRight={1}
        >
          <LightTooltip title="Previous" placement="top" arrow>
            <Box>
              <img
                style={{ marginLeft: 10 }}
                src={leftArrow}
                height="33px"
                width="33px"
                alt="grid"
              />
            </Box>
          </LightTooltip>

          <LightTooltip title="Next Ad" placement="top" arrow>
            <Box>
              <img
                style={{ marginRight: 10 }}
                src={rightArrow}
                alt="grid"
                height="33px"
                width="33px"
              />
            </Box>
          </LightTooltip>
        </Box>
      </MenuItem>

      <MenuItem onClick={closeMobileMenu}>
        <Box mr={3}>
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

          <img
            style={{ marginLeft: 7 }}
            src={downArrow}
            height="20"
            width="19"
            alt="grid"
            aria-controls="Copy-Type"
            aria-haspopup="true"
            onMouseOver={handleClickCopyType}
          />
          <Menu
            id="Copy-Type"
            anchorEl={anchorElCopyType}
            keepMounted
            open={Boolean(anchorElCopyType)}
            onClose={handleCloseCopyType}
          >
            <MenuItem onClick={handleCloseCopyType}>Profile</MenuItem>
            <MenuItem onClick={handleCloseCopyType}>My account</MenuItem>
            <MenuItem onClick={handleCloseCopyType}>Logout</MenuItem>
          </Menu>
        </Box>
      </MenuItem>

      <MenuItem onClick={closeMobileMenu}>
        <Box mr={3}>
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
            <img
              src={downArrow}
              height="20"
              width="19"
              alt="grid"
              style={{ marginLeft: 7 }}
            />
          </span>
        </Box>
      </MenuItem>

      <MenuItem onClick={closeMobileMenu}>
        <Box
          style={{ width: 93, height: 39, textAlign: "center" }}
          mr={4}
          borderLeft={1}
          borderRight={1}
          borderColor="grey.300"
        >
          <LightTooltip title="Favorite Ads" placement="top" arrow>
            <span>
              <img src={favstar} height="20" width="20" alt="grid" />
            </span>
          </LightTooltip>
        </Box>
      </MenuItem>

      <MenuItem onClick={closeMobileMenu}>
        <Box>
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
          <img
            style={{ marginLeft: 10 }}
            src={downArrow}
            height="20"
            width="19"
            alt="grid"
            aria-controls="ad-platform"
            aria-haspopup="true"
            onMouseOver={handleClickAd}
          />
        </Box>
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

  return (
    <Fragment>
      <Container className={classes.root}>
        <Toolbar component={Box} mt={10}>
          <Box style={{ flexGrow: 1 }}>
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

              <img
                style={{ marginLeft: 3, opacity: 1 }}
                src={downArrow}
                height="19"
                width="20"
                alt="grid"
                aria-controls="simple-menu"
                aria-haspopup="true"
                onMouseOver={handleClick}
              />

              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onMouseOut={handleClose} onClick={handleClose}>
                  Logout
                </MenuItem>
              </Menu>
            </span>
          </Box>

          <div className={classes.sectionDesktop} style={{ marginTop: 20 }}>
            <Box mr={3}>
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
            </Box>

            <Box
              width="90px"
              height="36px"
              style={{ display: "flex" }}
              mr={3}
              mb={1}
              borderColor="grey.300"
              borderLeft={1}
              borderRight={1}
            >
              <LightTooltip title="Previous" placement="top" arrow>
                <Box>
                  <img
                    style={{ marginLeft: 10 }}
                    src={leftArrow}
                    height="33px"
                    width="33px"
                    alt="grid"
                  />
                </Box>
              </LightTooltip>

              <LightTooltip title="Next Ad" placement="top" arrow>
                <Box>
                  <img
                    style={{ marginRight: 10 }}
                    src={rightArrow}
                    alt="grid"
                    height="33px"
                    width="33px"
                  />
                </Box>
              </LightTooltip>
            </Box>

            <Box mr={3}>
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

              <img
                style={{ marginLeft: 7 }}
                src={downArrow}
                height="20"
                width="19"
                alt="grid"
                aria-controls="Copy-Type"
                aria-haspopup="true"
                onMouseOver={handleClickCopyType}
              />
              <Menu
                id="Copy-Type"
                anchorEl={anchorElCopyType}
                keepMounted
                open={Boolean(anchorElCopyType)}
                onClose={handleCloseCopyType}
              >
                <MenuItem onClick={handleCloseCopyType}>Profile</MenuItem>
                <MenuItem onClick={handleCloseCopyType}>My account</MenuItem>
                <MenuItem onClick={handleCloseCopyType}>Logout</MenuItem>
              </Menu>
            </Box>

            <Box mr={3}>
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
                <img
                  src={downArrow}
                  height="20"
                  width="19"
                  alt="grid"
                  style={{ marginLeft: 7 }}
                />
              </span>
            </Box>

            <Box
              style={{ width: 93, height: 39, textAlign: "center" }}
              mr={4}
              borderLeft={1}
              borderRight={1}
              borderColor="grey.300"
            >
              <LightTooltip title="Favorite Ads" placement="top" arrow>
                <span>
                  <img src={favstar} height="20" width="20" alt="grid" />
                </span>
              </LightTooltip>
            </Box>

            <Box>
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
              <img
                style={{ marginLeft: 10 }}
                src={downArrow}
                height="20"
                width="19"
                alt="grid"
                aria-controls="ad-platform"
                aria-haspopup="true"
                onMouseOver={handleClickAd}
              />
            </Box>
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
          </div>
          <IconButton
            className={classes.hideDropDown}
            color="inherit"
            onClick={openMobileMenu}
          >
            <MoreIcon />
          </IconButton>
        </Toolbar>

        {mobileMenu}
      </Container>
    </Fragment>
  );
};

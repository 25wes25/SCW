import React, { useRef } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPage.js";

import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import Parallax from "components/Parallax/Parallax.js";

// sections for this page
import ImageGridSection from "../SCW/Sections/ImageGridSection";
import AboutSection from "./Sections/AboutSection";
import ContactSection from "./Sections/ContactSection";

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const contactRef = useRef(null);

  return (
    <div>
      <Header
        brand="Swanson Custom Woodworks"
        rightLinks={<HeaderLinks contactRef={contactRef} />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 100,
          color: "white",
        }}
        {...rest}
      />
      <Parallax
        image={require("assets/img/24030b5645d3156291f57a24b4fb43f7.jpg")}
      >
        <div className={classes.container} />
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <AboutSection />
          <ImageGridSection />
          <ContactSection contactRef={contactRef} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

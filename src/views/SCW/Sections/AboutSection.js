import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/aboutStyle.js";

import profileImage from "../../../assets/img/rob.jpg";

const useStyles = makeStyles(styles);

export default function AboutSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const dateStartedWoodworking = new Date(1983, 0, 1, 0, 0, 0, 0);
  const dateStartedBusiness = new Date(1999, 0, 1, 0, 0, 0, 0);
  const todaysDate = new Date();
  const yearsOfExperience =
    todaysDate.getFullYear() - dateStartedWoodworking.getFullYear();
  const yearsOfBusinessExperience =
    todaysDate.getFullYear() - dateStartedBusiness.getFullYear();
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Robert Swanson</h2>
      <h4
        className={classes.subTitle}
      >{`${yearsOfExperience} Years of Experience`}</h4>
      <div>
        <GridContainer direction="row">
          <GridItem xs={12} sm={12} md={4} className={classes.itemGrid}>
            <Card plain>
              <img src={profileImage} alt="..." className={imageClasses} />
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
            <Card plain className={classes.contentCard}>
              {`Prior to starting this business, my high school wood shop teacher inspired me to get my first job at his 
                friends cabinet shop in 1983. For the next 13 years I worked in many different cabinet shops learning 
                every type of cabinetry, mill work & some really crazy off the wall creations by interior designers 
                for hotels, restaurants & office suites. I learned techniques that I never knew you could do with wood, 
                laminate & metal! After learning my trade in the commercial & residential sides of the industry I 
                pursued independent contracting and obtained a contracting license in 1996. By 1999, just 3 years later, 
                I had opened my wood shop to service the many new customers brought to me by word of mouth. I've been 
                designing and building custom cabinetry throughout California ever since, accumulating a total of 
                ${yearsOfExperience} years working with wood and ${yearsOfBusinessExperience} years running my business.`}
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

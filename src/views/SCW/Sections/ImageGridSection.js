import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

// @material-ui/icons
import Home from "@material-ui/icons/Home";
import Store from "@material-ui/icons/Store";

// core components
import styles from "assets/jss/material-kit-react/views/landingPageSections/imageGridStyle.js";
import GridItem from "../../../components/Grid/GridItem";
import NavPills from "../../../components/NavPills/NavPills";
import GridContainer from "../../../components/Grid/GridContainer";
import { Storage } from "aws-amplify";
import { S3_URL } from "../../../constants";

const useStyles = makeStyles(styles);

export default function ImageGridSection(props) {
  const { quoteRef } = props;
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [state, setState] = useState({
    residentialImages: [],
    commercialImages: [],
    isOpen: false,
    selectedImage: {},
  });
  const { residentialImages, commercialImages, isOpen, selectedImage } = state;

  useEffect(() => {
    Storage.list("images/") // for listing ALL files without prefix, pass '' instead
      .then((result) => {
        const residentialRE = RegExp("images/residential/(.+)");
        const commercialRE = RegExp("images/commercial/(.+)");
        let newResidentialImages = [];
        let newCommercialImages = [];
        result.forEach((image) => {
          if (residentialRE.test(image.key)) {
            newResidentialImages.push({
              key: image.key,
              src: S3_URL + image.key,
            });
          } else if (commercialRE.test(image.key)) {
            newCommercialImages.push({
              key: image.key,
              src: S3_URL + image.key,
            });
          }
        });
        setState((prevState) => ({
          ...prevState,
          residentialImages: newResidentialImages,
          commercialImages: newCommercialImages,
        }));
      })
      .catch((err) => console.log(err));
  }, []);

  const TabContent = (images, type) => {
    const imageRows = [];
    const test = JSON.parse(JSON.stringify(images));

    while (test.length > 0) {
      imageRows.push(test.splice(0, 3));
    }
    return (
      <GridContainer container className={classes.container} justify="center">
        {imageRows.map((imageRow, index) => (
          <GridItem
            key={index}
            xs={4}
            sm={4}
            md={4}
            className={classes.gridItem}
          >
            {imageRow.map((image) => (
              <img
                key={image.key}
                src={image.src}
                alt="..."
                className={classes.image}
                onClick={() => {
                  setState((prevState) => ({
                    ...prevState,
                    selectedImage: {
                      index: images.findIndex((elem) => elem.key === image.key),
                      type: type,
                    },
                    isOpen: true,
                  }));
                }}
              />
            ))}
          </GridItem>
        ))}
      </GridContainer>
    );
  };

  let images = [];
  if (selectedImage) {
    if (selectedImage.type === "RESIDENTIAL") {
      images = residentialImages;
    } else if (selectedImage.type === "COMMERCIAL") {
      images = commercialImages;
    }
  }

  return (
    <div className={classes.section} ref={quoteRef}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Portfolio</h2>
          <h4 className={classes.description}>
            Here's a few examples of our past work.
          </h4>
          <NavPills
            alignCenter
            color="primary"
            tabs={[
              {
                tabButton: "Residential",
                tabIcon: Home,
                tabContent: TabContent(residentialImages, "RESIDENTIAL"),
              },
              {
                tabButton: "Commercial",
                tabIcon: Store,
                tabContent: TabContent(commercialImages, "COMMERCIAL"),
              },
            ]}
          />
        </GridItem>
      </GridContainer>
      {isOpen && (
        <Dialog
          classes={{
            root: classes.root,
            paper: classes.paper,
          }}
          open={isOpen}
          fullScreen={fullScreen}
          onClose={() =>
            setState((prevState) => ({ ...prevState, isOpen: false }))
          }
          aria-labelledby="responsive-dialog-title"
        >
          <DialogContent
            id="classic-modal-slide-description"
            className={classes.modalBody}
            classes={{
              root: classes.modalRoot,
            }}
          >
            <img
              src={images[selectedImage.index].src}
              alt="..."
              className={classes.selectedImage}
            />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

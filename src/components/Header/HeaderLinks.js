/*eslint-disable*/
import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import {Analytics} from "aws-amplify";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const { contactRef } = props;
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}
          onClick={() =>
              contactRef.current.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          CONTACT
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="yelp-tooltip"
          title="See our reviews on yelp"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://www.yelp.com/biz/swanson-custom-woodworks-santa-ana"
            target="_blank"
            color="transparent"
            className={classes.navLink}
            onClick={() => Analytics.record({ name: "socialMedia", attributes: { status: "yelp" } })}
          >
            <i className={classes.socialIcons + " fab fa-yelp"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="facebook-tooltip"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/Swanson-Custom-Woodworks-29132461530"
            target="_blank"
            className={classes.navLink}
            onClick={() => Analytics.record({ name: "socialMedia", attributes: { status: "facebook" } })}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      {/*<ListItem className={classes.listItem}>*/}
      {/*  <Tooltip*/}
      {/*    id="instagram-tooltip"*/}
      {/*    title="Follow us on instagram"*/}
      {/*    placement={window.innerWidth > 959 ? "top" : "left"}*/}
      {/*    classes={{ tooltip: classes.tooltip }}*/}
      {/*  >*/}
      {/*    <Button*/}
      {/*      color="transparent"*/}
      {/*      href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"*/}
      {/*      target="_blank"*/}
      {/*      className={classes.navLink}*/}
      {/*    >*/}
      {/*      <i className={classes.socialIcons + " fab fa-instagram"} />*/}
      {/*    </Button>*/}
      {/*  </Tooltip>*/}
      {/*</ListItem>*/}
    </List>
  );
}

import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import emailjs from "emailjs-com";
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_USER_ID } from "../../../constants";

// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
import EmailIcon from "@material-ui/icons/Email";
import Phone from "@material-ui/icons/Phone";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/contactStyle.js";
import { Analytics } from 'aws-amplify';

const useStyles = makeStyles(styles);

export default function ContactSection(props) {
  const { contactRef } = props;
  const classes = useStyles();

  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    invalidName: false,
    invalidEmail: false,
    invalidPhone: false,
    invalidMessage: false,
    sentMessage: false,
  });

  const {
    name,
    email,
    phone,
    message,
    invalidName,
    invalidEmail,
    invalidPhone,
    invalidMessage,
    sentMessage,
  } = state;

  const onClickSubmit = () => {
    let invalidName = false;
    let invalidEmail = false;
    let invalidPhone = false;
    let invalidMessage = false;
    if (name === "") {
      invalidName = true;
    }
    if (email === "") {
      invalidEmail = true;
    } else if (
        !(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    )) {
      invalidEmail = true;
    }
    if (phone === "") {
      invalidPhone = true;
    }
    if (message === "") {
      invalidMessage = true;
    }
    if (invalidName || invalidEmail || invalidPhone || invalidMessage) {
      setState((prevState) => ({
        ...prevState,
        invalidName,
        invalidEmail,
        invalidPhone,
        invalidMessage,
      }));
    } else {
      const templateParams = {
        user_name: name,
        user_email: email,
        user_phone: phone,
        message: message,
        contact_number: (Math.random() * 100000) | 0,
      };

      emailjs
        .send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          EMAILJS_USER_ID
        )
        .then(
          () => {
            Analytics.record({ name: "contactRequest", attributes: { status: "successful" } });
            setState((prevState) => ({ ...prevState, sentMessage: true }));
          },
          (err) => {
            Analytics.record({ name: "contactRequest", attributes: { status: "failed" } });
            console.log("FAILED...", err);
          }
        );
    }
  };

  function formatPhoneNumber(phoneNumberString) {
    const cleaned = ("" + phoneNumberString).replace(/\D/g, "");
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return "(" + match[1] + ") " + match[2] + "-" + match[3];
    }
    return phoneNumberString;
  }

  const onNameChange = (name) => {
    setState((prevState) => ({ ...prevState, name }));
  };
  const onEmailChange = (email) => {
    setState((prevState) => ({ ...prevState, email }));
  };
  const onPhoneChange = (phone) => {
    let formattedPhoneNumber = formatPhoneNumber(phone);
    setState((prevState) => ({ ...prevState, phone: formattedPhoneNumber }));
  };
  const onMessageChange = (message) => {
    setState((prevState) => ({ ...prevState, message }));
  };

  return (
    <div className={classes.section} ref={contactRef}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Contact Me</h2>
          <h4 className={classes.description}>
            Need some professional woodworking? Let us know what you have in
            mind below and we'll reach out to you in a couple of hours!
          </h4>
          <GridContainer direction="row">
            <GridItem xs={12} sm={12} md={6}>
              { sentMessage ?
                  <div className={classes.messageSentContainer}>
                    <CheckCircleIcon className={classes.messageSentIcon}/>
                    <div className={classes.messageSentText}>
                      Message Sent
                    </div>
                  </div>
                  :
                  <form>
                <CustomInput
                  labelText="Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    error: invalidName,
                    onChange: (event) => onNameChange(event.target.value),
                  }}
                />
                <CustomInput
                  labelText="Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    error: invalidEmail,
                    onChange: (event) => onEmailChange(event.target.value),
                  }}
                />
                <CustomInput
                  labelText="Phone"
                  id="phone"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    value: phone,
                    error: invalidPhone,
                    onChange: (event) => onPhoneChange(event.target.value),
                  }}
                />
                <CustomInput
                  labelText="Message"
                  id="message"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 5,
                    rowsMax: 10,
                    error: invalidMessage,
                    onChange: (event) => onMessageChange(event.target.value),
                  }}
                />
                <Button color="primary" onClick={() => onClickSubmit()}>
                  Send Message
                </Button>
              </form>
              }
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.contactItem}>
                <Phone className={classes.contactIcon} />
                <div className={classes.contactTitle}>CALL</div>
              </div>
              <div className={classes.contactText}>(714) 505-8861</div>
              <div className={classes.contactItem}>
                <EmailIcon className={classes.contactIcon} />
                <div className={classes.contactTitle}>EMAIL</div>
              </div>
              <a
                className={classes.contactLink}
                href={"mailto:rob@tellicowoodworks.com"}
              >
                rob@tellicowoodworks.com
              </a>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}

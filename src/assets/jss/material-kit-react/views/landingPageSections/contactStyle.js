import { title } from "assets/jss/material-kit-react.js";
import { primaryColor, successColor } from "assets/jss/material-kit-react.js";

const contactStyle = {
  section: {
    padding: "70px 0",
  },
  title: {
    ...title,
    marginBottom: "50px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center",
  },
  description: {
    color: "#999",
    textAlign: "center",
  },
  textCenter: {
    textAlign: "center",
  },
  textArea: {
    marginRight: "15px",
    marginLeft: "15px",
  },
  contactItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "8px",
    marginBottom: "8px",
  },
  contactIcon: {
    color: primaryColor,
    marginRight: "4px",
  },
  contactTitle: {
    color: primaryColor,
    fontWeight: "bold",
    textAlign: "left",
  },
  contactText: {
    color: "#999",
    textAlign: "left",
  },
  contactLink: {
    color: "#999",
    textAlign: "left",
    "&:hover,&:focus": {
      color: primaryColor,
    },
  },
  messageSentContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  messageSentIcon: {
    color: successColor,
    marginRight: "4px",
  },
  messageSentText: {
    color: successColor,
    textAlign: "left",
  },
};

export default contactStyle;

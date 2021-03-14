import { cardTitle, title } from "assets/jss/material-kit-react.js";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const aboutStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center",
  },
  title: {
    ...title,
    marginBottom: "0rem",
    marginTop: "0.5rem",
    minHeight: "32px",
    textDecoration: "none",
  },
  subTitle: {
    ...title,
    marginBottom: "1rem",
    marginTop: "0rem",
    textDecoration: "none",
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  cardTitle,
  smallTitle: {
    color: "#6c757d",
  },
  description: {
    color: "#999",
  },
  justifyCenter: {
    justifyContent: "center !important",
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999",
  },
  margin5: {
    margin: "5px",
  },
  contentCard: {
    textAlign: "left",
    color: "#3C4858",
    textDecoration: "none",
    fontWeight: "300",
    fontFamily: `"Roboto Slab", "Times New Roman", serif`,
  },
};

export default aboutStyle;

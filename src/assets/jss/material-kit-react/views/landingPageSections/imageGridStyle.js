import { title } from "assets/jss/material-kit-react.js";

const imageGridStyle = {
  section: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
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
  gridList: {
    display: "flex",
  },
  container: {
    padding: 15,
  },
  gridItem: {
    padding: 0,
  },
  image: {
    width: "100%",
    maxHeight: 176.484,
    objectFit: "cover",
    borderRadius: "6px !important",
    cursor: "pointer",
    padding: 4,
    "&:hover": {
      filter: "brightness(70%)",
    },
  },
  selectedImage: {
    width: "100%",
    objectFit: "contain",
    borderRadius: "6px !important",
  },
  root: {
    overflow: "auto",
  },
  paper: {
    maxWidth: "80%",
    margin: 0,
    backgroundColor: "transparent",
    borderRadius: "6px !important",
  },
  modalRoot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "initial",
    "&:first-child": {
      padding: 0,
    },
  },
  modalBody: {
    padding: 0,
  },
};

export default imageGridStyle;

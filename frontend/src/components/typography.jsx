const { withStyles, Typography } = require('@material-ui/core');

export const TitleTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
    fontSize: "56px",
    fontWeight: "bold",
    fontFamily: "Calibri",
    textAlign: "center"
  }
})(Typography);

export const SubTitleTextTypography = withStyles({
  root: {
    color: "#D3EEDD",
    fontSize: "32px",
    fontWeight: "bold",
    fontFamily: "Calibri",
  }
})(Typography);

export const CardTitleTypography = withStyles({
  root: {
    fontSize: "28px",
    height: "100px",
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "Calibri",
  }
})(Typography);


export const ParaTypography = withStyles({
  root: {
    color: "#FFFFFF",
    padding: "4px",
    marginBottom: "8px",
    fontSize: "20px",
    lineHeight: "32px",
    fontFamily: "Calibri",
  }
})(Typography);

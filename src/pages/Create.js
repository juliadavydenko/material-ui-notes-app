import React from "react";
import { Typography, Button, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import { TextField } from "@mui/material";

// const theme = createTheme();
const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});
export default function Create() {
  const classes = useStyles();
  return (
    <Container>
      <Typography
        className={classes.title}
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Create a new Note
      </Typography>

      <form noValidate autoComplete="off">
        <TextField
          className={classes.field}
          label="Note Title"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          className={classes.field}
          label="Details"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          required
        />
      </form>

      <Button
        className={classes.btn}
        onClick={() => console.log("you clicked")}
        type="submit"
        // color="secondary"
        variant="contained"
        endIcon={<KeyboardArrowRightOutlinedIcon />}
      >
        Submit
      </Button>
    </Container>
  );
}

// const useStyles = makeStyles((theme) => ({
//   btn: {
//     fontSize: 100,
//     // backgroundColor: "primary",
//     "&:hover": {
//       backgroundColor: "blue",
//     },
//   },
//   title: {
//     textDecoration: "underline",
//     marginBottom: 20,
//   },
// }));

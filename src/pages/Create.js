import React from "react";
import { Typography, Button, Container } from "@mui/material";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
export default function Create() {
  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Create a new Note
      </Typography>
      <Button
        onClick={() => console.log("you clicked")}
        type="submit"
        color="secondary"
        variant="contained"
      >
        Submit
      </Button>
      <AcUnitOutlinedIcon />
    </Container>
  );
}

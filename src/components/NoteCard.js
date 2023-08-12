import React from "react";
import { Avatar, Card, IconButton, Typography } from "@mui/material";
import { CardHeader } from "@mui/material";
import { CardContent } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { DeleteOutlineOutlined } from "@mui/icons-material";
const useStyles = makeStyles({
  test: {
    border: (note) => {
      if (note.category == "work") {
        return "1px solid red";
      }
    },
  },
});
function NoteCard({ note, handleDelete }) {
  const classes = useStyles(note);
  return (
    <div>
      <Card elevation={1} className={classes.test}>
        <CardHeader
          avatar={<Avatar>{note.category[0].toUpperCase()}</Avatar>}
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlineOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default NoteCard;

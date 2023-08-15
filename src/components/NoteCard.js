import React from "react";
import { Avatar, Card, IconButton, Typography } from "@mui/material";
import { CardHeader } from "@mui/material";
import { CardContent } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { DeleteOutlineOutlined } from "@mui/icons-material";
import { blue, green, pink, yellow } from "@mui/material/colors";
// const useStyles = makeStyles({
//   avatar: {
//     backgroundColor: (note) => {
//       if (note.category == "work") {
//         return yellow[700];
//       }
//       if (note.category == "money") {
//         return green[500];
//       }
//       if (note.category == "todos") {
//         return pink[500];
//       }
//       return blue[500];
//     },
//   },
// });
const AvatarColor = (note) => {
  if (note.category === "work") {
    return yellow[700];
  }
  if (note.category === "money") {
    return green[500];
  }
  if (note.category === "todos") {
    return pink[500];
  }
  return blue[500];
};

function NoteCard({ note, handleDelete }) {
  // const classes = useStyles(note);
  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          avatar={
            <Avatar sx={{ backgroundColor: AvatarColor(note) }}>
              {note.category[0].toUpperCase()}
            </Avatar>
          }
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

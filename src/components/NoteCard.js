import React from "react";
import { Card, IconButton, Typography } from "@mui/material";
import { CardHeader } from "@mui/material";
import { CardContent } from "@mui/material";
import { DeleteOutlineOutlined } from "@mui/icons-material";

function NoteCard({ note }) {
  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          action={
            <IconButton>
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

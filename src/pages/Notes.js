import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Grid from "@mui/system/Unstable_Grid/Grid";
import { Container, Paper } from "@mui/material";
import NoteCard from "../components/NoteCard";
import Masonry from "react-masonry-css";

export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/juliadavydenko/material-ui-notes-app/notes"
    )
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch(
      "https://my-json-server.typicode.com/juliadavydenko/material-ui-notes-app/notes" +
        id,
      {
        method: "DELETE",
      }
    );
    const newNotes = notes.filter((note) => note.id != id);
    setNotes(newNotes);
  };

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((note) => (
          <div key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
}

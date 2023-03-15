import React, { useEffect, useState } from "react";
import { EditorState } from "draft-js";
export const Note = () => {
  const note = {
    id: "9999",
    content: "<p>This is a new note <p/>",
  };
  const [editorState, setEditorState] = useState(() => {
    editorState.creaateEmpty();
  });
  const [rawHTML, setRawHTML] = useState(note.content);
  useEffect(() => {
    setRawHTML(note.content);
  }, [note.content]);
  return <div>Note 123</div>;
};

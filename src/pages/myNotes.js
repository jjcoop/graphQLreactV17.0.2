import React, { useEffect } from "react";

const MyNotes = () => {
  useEffect(() => {
    // update the document title
    document.title = "My Notes";
  });
  return (
    <div>
      <p>This is my notes</p>
    </div>
  );
};

export default MyNotes;

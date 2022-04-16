import React from "react";
// import our GraphQL dependencies
import { useQuery } from "@apollo/client";

// import the Note component
import Note from "../components/Note";
import { GET_NOTE } from "../gql/query";
import { useParams } from "react-router-dom";

const NotePage = () => {
  // store the id found in the url as a variable
  const { id } = useParams();

  // query hook, passing the id value as a variable
  const { loading, error, data } = useQuery(GET_NOTE, {
    variables: { id },
  });

  // if the data is loading, display a loading message
  if (loading) return <p>Loading...</p>;
  // if there is an error fetching the data, display an error message
  if (error) return <p>Error! Note not found</p>;

  // if the data is successful, display the data in our UI
  return <Note note={data.note} />;
};

export default NotePage;

import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import ReactMarkdown from "react-markdown";
import Button from "../components/Button";
import NoteFeed from "../components/NoteFeed";

const GET_NOTES = gql`
  query NoteFeed($cursor: String) {
    noteFeed(cursor: $cursor) {
      cursor
      hasNextPage
      notes {
        id
        createdAt
        content
        favoriteCount
        author {
          username
          id
          avatar
        }
      }
    }
  }
`;

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  });

  const { data, loading, error, fetchMore } = useQuery(GET_NOTES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  return <NoteFeed notes={data.noteFeed.notes} />;
};

export default Home;

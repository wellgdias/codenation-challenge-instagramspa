import React, { useState, useEffect } from "react";

import Stories from "../../containers/Stories";
import Loading from "../../components/Loading";

import Posts from "../../containers/Posts";

import api from "../../services/api";

import "./FeedRoute.scss";

const FeedRoute = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [stories, setStories] = useState([]);
  const [usersLogged, setUsersLogged] = useState(0);

  useEffect(() => {
    api.get("/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  useEffect(() => {
    if (usersLogged === users.length) {
      return;
    }

    api.get(`/users/${users[usersLogged].id}/posts`).then((response) => {
      setPosts([...posts, ...response.data]);
      setUsersLogged(usersLogged + 1);
    });
  }, [users, usersLogged]);

  useEffect(() => {
    api.get("/stories").then((response) => {
      setStories(response.data);
    });
  }, [users]);

  const getUserPostById = (postUserId) =>
    users.find((user) => postUserId === user.id);

  return (
    <div data-testid="feed-route">
      {users.length > 0 && stories.length > 0 && (
        <Stories stories={stories} getUserHandler={getUserPostById} />
      )}

      {users.length !== usersLogged ? (
        <Loading />
      ) : (
        <Posts posts={posts} getUserHandler={getUserPostById} />
      )}
    </div>
  );
};

export default FeedRoute;

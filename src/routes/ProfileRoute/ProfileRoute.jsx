import React, { useState, useEffect } from "react";

import UserProfile from "../../containers/UserProfile";
import UserPosts from "../../containers/UserPosts";

import Loading from "../../components/Loading";

import api from "../../services/api";

const ProfileRoute = () => {
  const [name, setName] = useState("");
  const [id, setUserId] = useState("");
  const [avatar, setAvatar] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [userPosts, setUserPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const { pathname } = window.location;
    const param = pathname.split("/")[2];

    api.get(`/users?search=${param}`).then((response) => {
      setAvatar(response.data[0].avatar);
      setEmail(response.data[0].email);
      setName(response.data[0].name);
      setUsername(response.data[0].username);
      setUserId(response.data[0].id);
    });
  }, []);

  useEffect(() => {
    if (id) {
      api.get(`/users/${id}/posts`).then((response) => {
        setUserPosts(response.data);
        setIsLoading(false);
      });
    }
  }, [id]);

  return (
    <div data-testid="profile-route">
      <UserProfile
        name={name}
        avatar={avatar}
        username={username}
        email={email}
      />

      {isLoading ? <Loading /> : <UserPosts posts={userPosts} />}
    </div>
  );
};

export default ProfileRoute;

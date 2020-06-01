import React, { useState, useEffect } from "react";

import UsersList from "../../containers/UsersList/UsersList";

import api from "../../services/api";

const UsersRoute = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("/users").then((response) => {
      setUsers(response.data);
    });    
  }, []);

  return (
    <div className="container" data-testid="users-route">
      <UsersList users={users} />
    </div>
  );
};

export default UsersRoute;

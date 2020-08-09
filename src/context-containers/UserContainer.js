import React, { useState, useEffect } from "react";
import { UserProvider } from "../contexts/UserContext";
import { useHistory } from "react-router-dom";

function UserContainer({ children }) {
  const [user, setUser] = useState({ user_type: "admin" });
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUser();
    }
  }, []);

  async function getUser() {
    setUser({ user_type: "admin" });
  }
  function create(user) {
    setUser(user);
    localStorage.setItem("token", user.api_token);
  }

  function update(user) {
    setUser(user);
  }

  function logout() {
    localStorage.removeItem("token");
    setUser(null);
    history.push("/login");
  }
  return (
    <UserProvider
      value={{
        user,
        create,
        update,
        logout,
      }}
    >
      {children}
    </UserProvider>
  );
}

export default UserContainer;

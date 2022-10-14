import { useState } from "react";
import {Page} from "../../Components/Layout/Page";

import { useLoginStore } from "./useLoginStore";

import useFlashMessageStore from "../../Components/FlashMessages/useFlashMessageStore";

const Login = () => {
  const { setLoggedIn, loggedIn, userInfo, userName } = useLoginStore();

  const { setFlashMessage } = useFlashMessageStore();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setUser({
      ...user,
      [evt.target.name]: value,
    });
  };

  const LogMeIn = (e) => {
    e.preventDefault();

    const endPoint = "https://api.mediehuset.net/token";
    const username = user.username;
    const password = user.password;

    const data = { username: username, password: password };

    fetch(endPoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "Ok") {
          setFlashMessage("Velkommen");
          setLoggedIn(true, data.user, data.username, data.access_token);
        } else {
          setFlashMessage("Ingen brugere med disse kriterier");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return !loggedIn ? (
    <Page title="Login">
    <form onSubmit={LogMeIn}>
      <input type="text" name="username" onChange={(e) => handleChange(e)} />
      <input type="password" name="password" onChange={(e) => handleChange(e)} />
      <button>login</button>
    </form>
    </Page>
  ) : (
    <>
      {userInfo.firstname} - {userName}
      <button onClick={() => setLoggedIn(false, "", "", "")}> Logout</button>
    </>
  );
};

export default Login;

import React, { useState } from "react";
import "./App.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { validate as validateEmail } from "email-validator";
import V from "validate-password";

export default function App(props) {
  const username = useUsername();
  const password = usePassword();

  const h3Style = {
    width: "100 %",
    height: "10px"
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        margin: "300px auto",
        border: "solid black 2px",
        width: "400px",
        height: "350px"
      }}
    >
      <form noValidate autoComplete="off" style={{ padding: "25px" }}>
        <AccountCircleIcon />
        <br />
        <TextField
          id="outlined-basic"
          label="Login"
          variant="filled"
          style={{ margin: "5px" }}
          onChange={username.onChange}
        />
        <br />
        <h3 style={h3Style}>{username.isValid ? null : username.error}</h3>
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          style={{ margin: "5px" }}
          onChange={password.onChange}
        />
        <br />
        <h3 style={h3Style}>{password.isValid ? null : password.error}</h3>
        <Button
          style={{ margin: "25px" }}
          variant="contained"
          color="primary"
          disabled={!(username.isValid && password.isValid)}
        >
          Sign in
        </Button>
      </form>
    </div>
  );
}

function usePassword() {
  const [password, setPassword] = useState("");
  const [isValidPassword, setValidPassword] = useState(false);
  const [error, setError] = useState("");

  function handlePasswordChange(event) {
    const validator = new V();

    // let pass = event.target.value;
    // let reg = new RegExp(
    //   "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.?;:,/!@#$%^&*])(?=.{8,15})"
    // );
    // console.log(pass);

    // let test = reg.test(pass);
    // console.log(test);
    let newPass = validator.checkPassword(event.target.value);

    if (newPass.isValid) {
      setPassword(event.target.value);
      setValidPassword(true);
    } else {
      setError(newPass.validationMessage);
      setValidPassword(false);
    }
  }
  return {
    value: password,
    onChange: handlePasswordChange,
    isValid: isValidPassword,
    error: error
  };
}

function useUsername() {
  const [username, setUsername] = useState("");
  const [isValidUsername, setValidUsername] = useState(false);
  const [error, setError] = useState("");

  function handleUsernameChange(event) {
    let user = event.target.value;
    if (user === "") {
      setError("You didn't enter a username.\n");
      setValidUsername(false);
    } else if (user.length < 5 || user.length > 30) {
      setError("The username is the wrong length.\n");
      setValidUsername(false);
    } else if (!validateEmail(user)) {
      setError("Invalid email!");
      setValidUsername(false);
    } else {
      setUsername(user);
      setValidUsername(true);
    }
  }
  return {
    value: username,
    onChange: handleUsernameChange,
    isValid: isValidUsername,
    error: error
  };
}

import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import StorefrontIcon from "@material-ui/icons/Storefront";
import "./Login.css";
import { auth } from "../firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <StorefrontIcon className="login__logoImage" fontSize="large" />
        <h2 className="login__logoTitle">Shoppify</h2>
      </div>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="login__signInButton"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the eShop Website Conditions of Use & Sale.
          Please ee our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button className="login__registerButton" onClick={register}>
          Create your Shoppify Account
        </button>
      </div>
    </div>
  );
}

export default Login;

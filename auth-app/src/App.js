import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { app, provider } from "./firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import Blog from "./Blog";

function App() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [user, SetUser] = useState({});

  const auth = getAuth();

  async function handleSubmit() {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(result);
      alert("User created");
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  }

  async function handleSignInSubmit() {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log(result);
      alert("User signed in");
      SetUser({
        email: result.user.email,
        uid: result.user.uid,
      });
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  }

  async function signInWithGoogle() {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      alert("User signed in with google");
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  }

  async function logout() {
    try {
      const result = await signOut(auth);
      console.log(result);
      SetUser({});
      alert("User signed out");
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  }

  console.log(user);

  return (
    <>
      {/* <div
        className="App"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div>
          <p>email {user.email}</p>
          <p>uid {user.uid}</p>
          <button onClick={logout}>Logout</button>
        </div>
        <div>
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
          />
          <br />
          <input
            type="text"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
          <br />
          <button type="submit" onClick={handleSubmit}>
            Sign up
          </button>
        </div>
        <br />
        <br />

        <div>
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
          />
          <br />
          <input
            type="text"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
          <br />
          <button type="submit" onClick={handleSignInSubmit}>
            Sign in
          </button>
        </div>

        <div>
          <button onClick={signInWithGoogle}>Sign up with google</button>
        </div>
      </div> */}
      <Blog />
    </>
  );
}

export default App;

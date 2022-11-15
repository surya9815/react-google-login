import logo from "./logo.svg";
import "./App.css";
import { GoogleLogin } from "@react-oauth/google";
import { googleLogout } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

function App() {
  // function logout() {
  //   console.log("logout");
  //   googleLogout();
  // }
  return (
    <div className="App">
      <header className="App-header">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
            console.log(credentialResponse.credential);
            var token = credentialResponse.credential;
            var decoded = jwt_decode(token);
            console.log(decoded);
            console.log("LOGGED IN");
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
        <button
          onClick={() => {
            console.log("logout");
            googleLogout();
          }}
        >
          Logout
        </button>
      </header>
    </div>
  );
}

export default App;

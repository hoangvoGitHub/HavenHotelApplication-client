/* eslint-disable react/no-unescaped-entities */
import { FcGoogle } from "react-icons/fc";
function Login() {
  return (
    <>
      <div className="main-container">
        <div className="auth-sidebar">
          <video autoPlay loop muted>
            <source src="../Video/loginVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="content">
          <h2>Sign in to Haven Hotel</h2>
          <div className="signin-with-google">
            <button>
              <FcGoogle />
              Sign in with Google
            </button>
          </div>
          <hr></hr>
          <div className="input-field">
            <div className="field-set">
              <label>Username or Email</label>
              <input></input>
            </div>
            <div className="field-set">
              <div className="field-set-pass">
                <label>Password</label>
                <a href="password_resets">Forgot password?</a>
              </div>
              <input placeholder=" "type="password"></input>
            </div>
            <div> 
              <button>Sign In</button>
            </div>
          </div>
          <div className="no-account">
            <p>Don't have an account?</p>
            <a href="signup">Sign up</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

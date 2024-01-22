/* eslint-disable react/no-unescaped-entities */
function Signup() {
  return (
    <>
      <div className="main-container">
        <div className="auth-sidebar">
          <video autoPlay loop muted>
            <source
              src="https://cdn.dribbble.com/uploads/48292/original/30fd1f7b63806eff4db0d4276eb1ac45.mp4?1689187515"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="content">
          <h2>Sign up to Haven Hotel</h2>
          <div className="input-field">
            <div className="field-set">
              <div className="field-set-name">
                <div className="field-set">
                  <label>Name</label>
                  <input></input>
                </div>
                <div className="field-set">
                  <label>Username</label>
                  <input></input>
                </div>
              </div>
            </div>
            <div className="field-set">
              <label>Email</label>
              <input></input>
            </div>
            <div className="field-set">
              <label>Password</label>
              <input placeholder="6+ characters" type="password"></input>
            </div>

            <div className="field-set">
              <div className="field-set-policy">
                <input type="checkbox"></input>
                <label>
                  I agree with Dribbble's
                  <a target="_blank" href="/terms">
                    Terms of Service
                  </a>
                  ,
                  <a target="_blank" href="/privacy">
                    Privacy Policy
                  </a>
                  , and default
                  <a target="_blank" href="/notifications">
                    Notification Settings
                  </a>
                  .
                </label>
              </div>
              <button>Create Account</button>
            </div>
            <p className="no-account">
              Already have an account? <a href="/auth/login">Sign In</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;

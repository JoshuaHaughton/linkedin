import React, { useState } from "react";
import classes from "./Login.module.css";
import LinkedInLogo from "../../assets/full_logo.png";
import { auth } from "../../firebase";
import useInputValidate from "../hooks/use-input";
import { useDispatch } from "react-redux";

const Login = () => {
  const [enteredProfilePicture, setEnteredProfilePicture] = useState("");
  const [error, setError] = useState(null);
  const [isSignUp, setIsSignUp] = useState(true);
  const dispatch = useDispatch();

  const {
    value: enteredName,
    hasError: nameInputHasError,
    isValid: enteredNameIsValid,
    reset: resetNameInput,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    submitHandler: nameSubmitHandler,
  } = useInputValidate((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isValid: enteredEmailIsValid,
    reset: resetEmailInput,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    submitHandler: emailSubmitHandler,
  } = useInputValidate((value) => {
    return value.trim() !== "" && value.includes("@") && value.includes(".");
  });

  const {
    value: enteredPassword,
    hasError: passwordInputHasError,
    isValid: enteredPasswordIsValid,
    reset: resetPasswordInput,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    submitHandler: passwordSubmitHandler,
  } = useInputValidate((value) => value.trim().length >= 5);

  const login = (e) => {
    e.preventDefault();

    //Login only requires email and password
    emailSubmitHandler();
    passwordSubmitHandler();

    //If a field is invalid, cancel submission
    if (!enteredEmailIsValid || !enteredPasswordIsValid) {
      return;
    }
    //If valid, continue

    auth.signInWithEmailAndPassword(enteredEmail, enteredPassword)
    .then(userAuth => {
      dispatch(login({
        email: userAuth.user.email,
        uid: userAuth.user.uid,
        displayName: userAuth.user.displayName,
        photoURL: userAuth.user.photoURL
      }))
    }).catch(err => {
      if (err != 'TypeError: e.preventDefault is not a function') {
        alert(err)
        console.log(err)
      }
    })



  };

  const register = (e) => {
    e.preventDefault();
    // Sets all input fields to touched on submission so an error comes up if it is invalid
    nameSubmitHandler();
    emailSubmitHandler();
    passwordSubmitHandler();

    //If a field is invalid, cancel submission
    if (
      !enteredNameIsValid ||
      !enteredEmailIsValid ||
      !enteredPasswordIsValid
    ) {
      return;
    }

    //If valid, continue

    auth
      .createUserWithEmailAndPassword(enteredEmail, enteredPassword)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: enteredName,
            photoURL: enteredProfilePicture ? enteredProfilePicture : null,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoURL: userAuth.user.photoURL
              }),
            );
          });
      })
      .catch(err => {
        if (err != 'TypeError: e.preventDefault is not a function') {
          alert(err)
          console.log(err)
        }
      })
  };

  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
  };

  //Change classes of input field if error has been set
  const nameInputClasses = !nameInputHasError
    ? classes.control
    : `${classes.control} ${classes.invalid}`;

  const emailInputClasses = !emailInputHasError
    ? classes.control
    : `${classes.control} ${classes.invalid}`;

  const passwordInputClasses = !passwordInputHasError
    ? classes.control
    : `${classes.control} ${classes.invalid}`;

  return (
    <div className={classes.login}>
      <img src={LinkedInLogo} alt="Linkedin Logo" />
      <h2>Make the most of your professional life</h2>
      <form onSubmit={isSignUp ? register : login}>
        {isSignUp && (
          <div className={nameInputClasses}>
            <label>Full Name</label>
            <input
              type="text"
              value={enteredName}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            />
            {nameInputHasError && (
              <span className={classes.errorText}>
                Please enter your Username.
              </span>
            )}
          </div>
        )}

        <div className={emailInputClasses}>
          <label>Email</label>
          <input
            type="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailInputHasError && (
            <span className={classes.errorText}>
              Please enter your email address.
            </span>
          )}
        </div>

        <div className={passwordInputClasses}>
          <label>Password (6 or more characters)</label>
          <input
            type="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
          />
          {passwordInputHasError && (
            <span className={classes.errorText}>
              Please enter a valid password.
            </span>
          )}
        </div>

        {isSignUp && (
          <div className={classes.control}>
            <label>Profile Picture (Optional)</label>
            <input
              type="text"
              value={enteredProfilePicture}
              onChange={(e) => setEnteredProfilePicture(e.target.value)}
            />
          </div>
        )}

        {isSignUp && (
          <p>
            By clicking Agree & Join, you agree to the LinkedIn{" "}
            <span className={classes.blue}>User Agreement</span>,{" "}
            <span className={classes.blue}>Privacy Policy</span>, and{" "}
            <span className={classes.blue}>Cookie Policy</span>.
          </p>
        )}

        {isSignUp ? (
          <button> Agree & Join</button>
        ) : (
          <button> Sign In</button>
        )}
        <p className={classes.loginToggle}>
          {isSignUp ? `Already on LinkedIn?` : `Not a member?`}
          <span onClick={toggleForm} className={classes.blue}>
            {" "}
            {isSignUp ? `Sign In` : `Register Now`}
          </span>
        </p>
      </form>
      <p>
        Looking to create a page for a business?
        <span className={classes.blue}> Get help</span>
      </p>
    </div>
  );
};

export default Login;

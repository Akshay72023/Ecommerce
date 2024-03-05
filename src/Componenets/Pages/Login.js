import { useState, useRef, useContext } from 'react';
import { Navigate } from 'react-router-dom'; 
import classes from './Login.module.css';
import AuthContext from '../store/auth-context';

const Login = () => {
  const authCtx= useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
    const emailInputRef = useRef('');
    const passwordInputRef = useRef('');

    const submitHandler = (e) => {
        e.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        setIsLoading(true);
        fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=", {
            method: "POST",
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => {
            setIsLoading(false);
            if (!res.ok) {
                throw new Error('Authentication failed!');
            }
            return res.json();
        })
        .then(data => {
           authCtx.login(data.idToken);
            setIsLoggedIn(true); 
        })
        .catch(error => {
            alert('Authentication failed! Please try again.');
        });
    }
    if (isLoggedIn) {
        return <Navigate to="/store" />;
    }

    return (
        <section className={classes.auth}>
            <h1>Login</h1>
            <form onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='email'>Your Email</label>
                    <input type='email' id='email' required ref={emailInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Your Password</label>
                    <input type='password' id='password' required ref={passwordInputRef} />
                </div>
                <div className={classes.actions}>
                    {!isLoading && <button>Login</button>}
                    {isLoading && <p>Sending request....</p>}
                    <button
                        type='button'
                        className={classes.toggle}
                    >Login with existing account
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Login;

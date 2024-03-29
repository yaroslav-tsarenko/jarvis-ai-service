import React, {useState} from 'react'
import "./LoginForm.css";
import axios from 'axios';
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {GoogleLogin} from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode';


function LoginForm() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://jarvis-ai-logistic-db-server.onrender.com/sign-in', {email, password})
            .then(result => {
                if (result.data.status === "Success") {
                    const carrierID = result.data.carrier ? result.data.carrier.carrierID : null;
                    const role = result.data.role;
                    if (role === 'super-admin') {
                        navigate(`/super-admin-dashboard/${carrierID}`);
                    }else if (role === 'customer' || !role) {
                        axios.get('https://jarvis-ai-logistic-db-server.onrender.com/user', { params: { email: email } })
                            .then(userResponse => {
                                const personalEndpoint = userResponse.data.personalEndpoint;
                                axios.post('https://jarvis-ai-logistic-db-server.onrender.com/create-chat-session', { userEndpoint: carrierID })
                                    .then(chatResponse => {
                                        if (chatResponse.data.status === "Success") {
                                            navigate(`/jarvis-chat/${personalEndpoint}/${chatResponse.data.chatEndpoint}`);
                                        }
                                    })
                                    .catch(err => {
                                        console.error('Error creating chat session:', err);
                                    });
                            })
                            .catch(err => {
                                console.error('Error retrieving user:', err);
                            });
                    } else if (role === 'carrier') {
                        navigate(`/carrier-dashboard/${carrierID}`);
                    }
                } else {
                    console.error('Login failed:', result.data.message);
                }
            })
            .catch(err => {
                console.error('Error during login:', err);
                window.alert('Error during login');
            });
    };
    const handleGoogleLoginSuccess = (credentialResponse) => {
        const credential = credentialResponse.credential;
        const decoded = jwtDecode(credential);
        const email = decoded.email; // Extract email from the decoded token

        axios.get('https://jarvis-ai-logistic-db-server.onrender.com/all-users')
            .then(response => {
                const user = response.data.find(user => user.email === email);

                if (user) {
                    axios.post('https://jarvis-ai-logistic-db-server.onrender.com/google-login', {token: credential})
                        .then(response => {
                            if (response.data.status === "Success") {
                                const personalEndpoint = response.data.user.personalEndpoint;
                                navigate(`/jarvis-chat/${personalEndpoint}/${response.data.chatEndpoint}`);
                            } else {
                                console.error('Login failed:', response.data.message);
                            }
                        })
                        .catch(error => {
                            console.error('Error during login:', error);
                        });
                } else {
                    console.error('User not found:', email);
                }
            })
            .catch(error => {
                console.error('Error during user check:', error);
            });
    };

    return (
        <div className="sign-in-wrapper">
            <div className="left-side">
                <form onSubmit={handleSubmit} className="login-custom-form">
                    <h2 className="h2-title">Welcome Back</h2>
                    <h3 className="h3-title">We hope you will be satisfied using our service</h3>
                    <label htmlFor="email" className="label-text">Email address</label>
                    <input
                        className="input-field"
                        type="email"
                        id="email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="password" className="label-text">Password</label>
                    <input
                        className="input-field"
                        type="password"
                        id="password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="sign-in-button">SIGN IN</button>
                    <div className="question-div">
                        <p className="question-p">Dont have account?</p>
                        <Link to="/" className="sign-in-link">Sign up now</Link>
                    </div>
                    <div className="login-with-google-button">
                        <GoogleLogin
                            onSuccess={handleGoogleLoginSuccess}
                            onError={() => {
                                console.log("Login Failed");
                            }}
                        />
                    </div>
                </form>
            </div>
            <div className="right-side-login">

            </div>
        </div>
    )
}

export default LoginForm;



// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
// src/components/Home.js

import './Home.css';



const Home = () => {
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <p>This is the main content of your home page.</p>
            <div className="login-box">
                <h2>Login</h2>
                <form>
                    <label>
                        Username:
                        <input type="text" />
                    </label>
                    <label>
                        Password:
                        <input type="password" />
                    </label>
                    <button type="submit">Login</button>
                </form>
                <p>
                    Don't have an account? <Link to="/register">Register here</Link>.
                </p>
            </div>
        </div>
    );
};

export default Home;

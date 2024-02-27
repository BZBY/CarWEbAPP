// src/components/Login.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        // 在这里处理登录逻辑

        // 登录成功后跳转到地图显示界面
        navigate('/map');
    };

    return (
        <div className="login-container">
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
                <button onClick={handleLogin}>Login</button>
            </form>
            <p>
            Don't have an account? <Link to="/register">Register here</Link>.
            </p>
        </div>
    );
};

export default Login;

// src/components/Register.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
// src/components/Login.js 和 src/components/Register.js
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const handleRegister = () => {
        // 在这里处理注册逻辑

        // 注册成功后跳转到地图显示界面
        navigate('/map');
    };

    
    return (
        <div className="register-container">
            <h2>Register</h2>
            <form>
                <label>
                    Username:
                    <input type="text" />
                </label>
                <label>
                    Password:
                    <input type="password" />
                </label>
                <button onClick={handleRegister}>Register</button>
            </form>
            <p>
            Already have an account? <Link to="/login">Login here</Link>.
            </p>
        </div>
    );
};

export default Register;

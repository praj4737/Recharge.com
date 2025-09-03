import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './LoginPage.css';
import './LoginRegisterHeader';
import LoginRegisterHeader from "./LoginRegisterHeader";

export default function LoginPage() {
  const navigate = useNavigate();
  const [Lemail, setEmail] = useState('');
  const [Lpassword, setPassword] = useState('');

  const login = async () => {
    try {
      const response = await axios.post('http://localhost:8080/login', {
        email: Lemail,
        password: Lpassword
      }, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: false // Set to true only if using cookies/auth headers
      });

      const { code, msg, data, rechargeData, token } = response.data;
      console.log(code, msg, rechargeData, token);

      if (code === 200) {
        localStorage.setItem("user", JSON.stringify(data));
        navigate('/home');
      } else {
        navigate('/login');
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <>
    <LoginRegisterHeader />
    <form className="login-form" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Phone Number or Email"
        value={Lemail}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={Lpassword}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="remember-me">
        <input type="checkbox" id="remember" />
        <label htmlFor="remember">Remember Me</label>
      </div>

      <button type="submit" onClick={login}>Login</button>
    </form>
    </>
  );
}
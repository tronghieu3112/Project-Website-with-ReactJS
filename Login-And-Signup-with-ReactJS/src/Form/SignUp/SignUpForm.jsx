import React, { useState } from 'react';
import axios from 'axios';
import './signup.css';
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false); // Thêm state mới để theo dõi việc đăng ký thành công

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Bạn chưa điền tên và mật khẩu.');
      return; 
    }

    try {
      const response = await axios.post('http://localhost:5000/signup', { username, password });
      console.log(response.data);

      // Đặt state success thành true khi đăng ký thành công
      setSuccess(true);
      setError(''); // Xóa bỏ bất kỳ lỗi nào nếu có
    } catch (err) {
      setError(err.response.data.error);
      setSuccess(false); // Nếu có lỗi, đặt success thành false
    }
  };

  return (
    <div className='container'>
      <h2>Sign Up</h2>
      {success && <p style={{ color: 'green' }}>Bạn đã đăng ký thành công!</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /><br></br>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br></br>
        <button type="submit" >Sign Up</button><br></br>
        <span>Nếu bạn đã có tài khoản. <Link to="/login">Nhấp vào đây</Link></span>
      </form>
    </div>
  );
};

export default SignUpForm;

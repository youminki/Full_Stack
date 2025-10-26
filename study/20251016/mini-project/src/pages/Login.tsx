import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AuthCard from '../components/AuthCard';
import TextInput from '../components/TextInput';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const nav = useNavigate();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userToLogin = username.trim() || 'guest';
    await login(userToLogin);
    nav('/calc');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <AuthCard title={<h2 className="text-2xl font-semibold">로그인</h2>}>
        <form onSubmit={submit}>
          <TextInput
            label="이메일"
            value={username}
            onChange={setUsername}
            placeholder="you@example.com"
          />
          <TextInput
            label="비밀번호"
            type="password"
            value={password}
            onChange={setPassword}
            placeholder="비밀번호"
          />

          <button
            type="submit"
            className="w-full bg-amber-500 text-white py-3 rounded-md text-lg font-semibold mt-2 shadow-md hover:brightness-95"
          >
            로그인
          </button>

          <div className="mt-3 text-sm text-center">
            <a href="/join" className="text-amber-500 hover:underline">
              회원가입 (이메일)
            </a>
          </div>
        </form>
      </AuthCard>
    </div>
  );
};

export default Login;

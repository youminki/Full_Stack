import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AuthCard from '../components/AuthCard';
import TextInput from '../components/TextInput';

const Join = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { join } = useAuth();
  const nav = useNavigate();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (password !== confirm) {
      setError('비밀번호가 일치하지 않습니다');
      return;
    }
    await join(email);
    nav('/calc');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <AuthCard title={<h2 className="text-2xl font-semibold">회원가입</h2>}>
        <form onSubmit={submit}>
          <TextInput
            label="이메일"
            value={email}
            onChange={setEmail}
            placeholder="you@example.com"
          />

          <TextInput
            label="비밀번호"
            type="password"
            value={password}
            onChange={setPassword}
            placeholder="비밀번호"
          />
          <TextInput
            label="비밀번호 확인"
            type="password"
            value={confirm}
            onChange={setConfirm}
            placeholder="비밀번호 확인"
          />
          {error && <div className="text-sm text-red-500 mb-2">{error}</div>}
          <button
            type="submit"
            className="w-full bg-amber-500 text-white py-3 rounded-md text-lg font-medium mt-2"
          >
            회원가입
          </button>
          <div className="mt-3 text-sm text-center">
            <a href="/login" className="text-gray-600 hover:underline">
              이미 계정이 있으신가요? 로그인
            </a>
          </div>
        </form>
      </AuthCard>
    </div>
  );
};

export default Join;

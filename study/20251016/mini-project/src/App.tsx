import React from 'react';
import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Calc from './pages/Calc';
import About from './pages/About';
import Login from './pages/Login';
import Join from './pages/Join';
import Logout from './pages/Logout';
import { AuthProvider, useAuth } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';

function App() {
  const HeaderBar = () => {
    const { user, logout } = useAuth();
    const nav = useNavigate();
    const onLogout = () => {
      logout();
      nav('/home');
    };
    return (
      <header className="w-full bg-gray-900/80 backdrop-blur-sm border-b border-white/10 px-6 py-3 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-4">
          <Link to="/calc" className="text-xl font-semibold text-white">
            MyCalc
          </Link>
          <nav className="flex gap-3 text-sm text-gray-200">
            <Link
              to="/home"
              className="px-3 py-1 rounded hover:bg-white/10 hover:text-white/90 transition"
            >
              Home
            </Link>
            <Link
              to="/calc"
              className="px-3 py-1 rounded hover:bg-white/10 hover:text-white/90 transition"
            >
              Calc
            </Link>
            <Link
              to="/about"
              className="px-3 py-1 rounded hover:bg-white/10 hover:text-white/90 transition"
            >
              About
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <span className="text-sm text-gray-200">{user}</span>
              <button
                onClick={onLogout}
                className="text-sm bg-amber-500 hover:bg-amber-600 text-gray-900 px-3 py-1 rounded font-medium transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm px-3 py-1 rounded hover:bg-white/10 hover:text-white/90 transition"
              >
                Login
              </Link>
              <Link
                to="/join"
                className="text-sm bg-white/20 px-3 py-1 rounded hover:bg-white/30 text-gray-900 font-medium transition"
              >
                Join
              </Link>
            </>
          )}
        </div>
      </header>
    );
  };

  return (
    <AuthProvider>
      <div className="App h-screen overflow-hidden">
        <HeaderBar />
        <main className="h-full overflow-hidden">
          <Routes>
            {/* Public */}
            <Route path="/home" element={<Home />} />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/join"
              element={
                <PublicRoute>
                  <Join />
                </PublicRoute>
              }
            />

            {/* Private */}
            <Route
              path="/calc"
              element={
                <ProtectedRoute>
                  <Calc />
                </ProtectedRoute>
              }
            />
            <Route
              path="/about"
              element={
                <ProtectedRoute>
                  <About />
                </ProtectedRoute>
              }
            />
            <Route
              path="/logout"
              element={
                <ProtectedRoute>
                  <Logout />
                </ProtectedRoute>
              }
            />

            {/* default */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Calc />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;

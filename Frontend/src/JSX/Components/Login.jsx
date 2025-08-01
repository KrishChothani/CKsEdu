import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock, Loader2, KeyRound } from "lucide-react";
import axios from "axios";
import AuthContext from "../Context/AuthContext";
import { useTheme } from "../Context/ThemeContext";
import BACKEND_URL from "../../Config/index.js";
import toast from "react-hot-toast";


const ForgotPasswordForm = ({ email, setEmail, setShow }) => {
  const [loading, setLoading] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();

    if (!email?.trim()) {
      toast.error("Please enter a valid email.");
      return;
    }

    try {
      setLoading(true);
      await axios.post(`${BACKEND_URL}/api/v1/users/send-reset-password-link`, {
        email,
      });

      toast.success("Password reset link sent to your email.");
      setShow(false);
    } catch (err) {
      const msg = err.response?.data?.message || "Failed to send reset link.";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleReset}>
      <div className="relative">
        <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-500" />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="peer w-full bg-transparent border-b-2 border-slate-300 text-white placeholder:text-slate-400 pl-10 pr-3 py-2 focus:outline-none focus:border-blue-600"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="flex justify-center items-center w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition duration-300 cursor-pointer"
      >
        {loading ? <Loader2 className="animate-spin w-5 h-5" /> : "Send Reset Link"}
      </button>

      <p
        onClick={() => setShow(false)}
        className="text-xs text-gray-400 text-center mt-4 cursor-pointer hover:underline"
      >
        Back to login
      </p>
    </form>
  );
};


const Login = () => {
  const [email, setEmail] = useState("developer123@gmail.com");
  const [password, setPassword] = useState("developer@123");
  const [isLoading, setIsLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const { darkMode } = useTheme();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return toast.error("Please provide both email and password");

    try {
      setIsLoading(true);
      const res = await axios.post(`${BACKEND_URL}/api/v1/users/login`, { email, password }, { withCredentials: true });
      const user = res?.data?.data?.user;
      if (user) {
        login(user);
        toast.success(`Welcome back, ${user.fullName || 'User'}!`);
        navigate("/app");
      } else {
        throw new Error("Unexpected server response.");
      }
    } catch (err) {
      const msg = err.response?.data?.message || err.message || "Login failed. Try again.";
      toast.error(msg);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className={`transition-colors duration-300 min-h-screen flex flex-col items-center justify-center p-4 ${darkMode
        ? "bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900"
        : "bg-gradient-to-br from-indigo-50 via-white to-purple-50"
        }`}>
        <div className="mb-8">
          <img src="/logo.png" alt="CKsEdu Logo" className="h-20 w-auto" />
        </div>

        <div className={`w-full max-w-md p-8 space-y-8 ${darkMode ? "bg-gray-800/30" : "bg-white/30"} backdrop-blur-lg rounded-2xl shadow-lg border ${darkMode ? "border-gray-700/40" : "border-white/40"}`}>
          <div className="text-center">
            <h2 className={`text-3xl font-bold tracking-tight ${darkMode ? "text-white" : "text-slate-800"}`}>
              {showForgotPassword ? "Reset Password" : "Welcome Back"}
            </h2>
            <p className={`mt-2 text-sm ${darkMode ? "text-gray-300" : "text-slate-600"}`}>
              {showForgotPassword
                ? "Enter your email to receive password reset instructions."
                : "Sign in to continue to your dashboard."}
            </p>
          </div>

          {showForgotPassword ? (
            <ForgotPasswordForm email={email} setEmail={setEmail} setShow={setShowForgotPassword} />
          ) : (
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="relative">
                <Mail className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${darkMode ? "text-gray-400" : "text-slate-400"}`} />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className={`peer w-full bg-transparent border-b-2 ${darkMode ? "border-gray-600 text-white placeholder:text-gray-400" : "border-slate-300 text-slate-800 placeholder:text-slate-500"} pl-10 pr-3 py-2 focus:outline-none focus:border-blue-600`}
                />
              </div>

              <div className="relative">
                <Lock className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${darkMode ? "text-gray-400" : "text-slate-400"}`} />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className={`peer w-full bg-transparent border-b-2 ${darkMode ? "border-gray-600 text-white placeholder:text-gray-400" : "border-slate-300 text-slate-800 placeholder:text-slate-500"} pl-10 pr-3 py-2 focus:outline-none focus:border-blue-600`}
                />
              </div>

              <div className="flex justify-between items-center">
                <span
                  onClick={() => setShowForgotPassword(true)}
                  className="text-xs text-blue-600 hover:underline cursor-pointer"
                >
                  Forgot password?
                </span>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`flex justify-center items-center w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300 ${isLoading && 'cursor-not-allowed'}`}
              >
                {isLoading ? <Loader2 className="animate-spin" /> : "Sign In"}
              </button>
            </form>
          )}

          <p className={`text-center text-sm ${darkMode ? "text-gray-300" : "text-slate-600"}`}>
            Don't have an account?{" "}
            <Link to="/signup" className="font-medium text-blue-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};



export default Login;

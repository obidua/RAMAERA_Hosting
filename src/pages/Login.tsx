import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Server } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const email = username.includes('@') ? username : `${username}@test.com`;
      await signIn(email, password);

      const { data: profile } = await supabase
        .from('users_profiles')
        .select('role')
        .eq('email', email)
        .maybeSingle();

      const isAdmin = profile?.role === 'admin' || profile?.role === 'super_admin';
      navigate(isAdmin ? '/admin' : '/dashboard');
    } catch (err: any) {
      setError(err.message || 'Failed to sign in');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-950 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 text-white mb-6">
            <Server className="h-10 w-10 text-cyan-400" />
            <span className="text-2xl font-bold">Ramaera Hosting</span>
          </Link>
          <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-cyan-200">Sign in to access your account</p>
        </div>

        <div className="bg-slate-900/60 backdrop-blur-xl rounded-xl shadow-2xl p-8 border border-cyan-500/30">
          {error && (
            <div className="mb-6 bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-200 mb-2">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/30 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-slate-400"
                placeholder="Enter username"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-200 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/30 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-slate-400"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-cyan-500 border-cyan-500/30 rounded focus:ring-cyan-500 bg-slate-800"
                />
                <span className="ml-2 text-sm text-slate-300">Remember me</span>
              </label>
              <a href="#" className="text-sm text-cyan-400 hover:text-cyan-300 font-semibold">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-lg font-semibold hover:from-cyan-400 hover:to-teal-400 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-cyan-500/50"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-slate-400">
              Don't have an account?{' '}
              <Link to="/signup" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                Sign up
              </Link>
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-cyan-500/20">
            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
              <p className="text-xs font-semibold text-cyan-300 mb-3">Demo Credentials:</p>
              <div className="space-y-3">
                <div className="bg-slate-950/50 rounded-lg p-3 border border-red-500/20">
                  <p className="text-xs font-semibold text-red-400 mb-1">Admin Account:</p>
                  <p className="text-sm text-slate-300">
                    <span className="text-cyan-400">Username:</span> admin
                  </p>
                  <p className="text-sm text-slate-300">
                    <span className="text-cyan-400">Password:</span> 123456
                  </p>
                </div>
                <div className="bg-slate-950/50 rounded-lg p-3 border border-green-500/20">
                  <p className="text-xs font-semibold text-green-400 mb-1">User Account:</p>
                  <p className="text-sm text-slate-300">
                    <span className="text-cyan-400">Username:</span> user
                  </p>
                  <p className="text-sm text-slate-300">
                    <span className="text-cyan-400">Password:</span> 123456
                  </p>
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  Note: Create these accounts via the signup page first
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

// Signup Page
// Allows users to create a new account with email and password
// Styled to match the site's theme with cyan, orange, and yellow colors

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { Mail, Lock, UserPlus, Sparkles } from 'lucide-react';
import Layout from '@/components/Layout';

export default function SignupPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { signup, isAuthenticated } = useAuth();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Redirect if already authenticated
  React.useEffect(() => {
    if (isAuthenticated) {
      const redirectTo = searchParams.get('redirect') || '/';
      router.push(redirectTo);
    }
  }, [isAuthenticated, router, searchParams]);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validate passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Validate password length
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setLoading(true);

    const result = await signup(email, password);

    if (result.success) {
      // Redirect to the page user tried to access, or home
      const redirectTo = searchParams.get('redirect') || '/';
      router.push(redirectTo);
    } else {
      setError(result.error || 'Signup failed');
      setLoading(false);
    }
  };

  return (
    <Layout
      title="Sign Up"
      subtitle="Create Account"
      backgroundImage="url('/images/sportstake5.jpg')"
    >
      <div className="max-w-md mx-auto">
        {/* Signup Form Card */}
        <div className="relative">
          {/* Glow effect background */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#00B2CC]/20 via-[#FF5E00]/20 to-[#FFD500]/20 rounded-2xl blur-xl"></div>
          
          {/* Form card */}
          <div className="relative bg-black/40 backdrop-blur-md rounded-2xl border border-cyan-400/40 p-8 shadow-xl">
            <div className="space-y-6">
              {/* Header icon */}
              <div className="flex justify-center">
                <div className="p-4 rounded-full bg-gradient-to-br from-cyan-500/30 to-orange-500/30 border border-yellow-400/40">
                  <UserPlus className="w-8 h-8 text-yellow-400" />
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email input */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-cyan-200">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400/70" />
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-black/60 border border-cyan-400/40 rounded-xl text-white placeholder-cyan-400/50 focus:outline-none focus:border-yellow-400/60 focus:ring-2 focus:ring-yellow-400/30 transition-all"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                {/* Password input */}
                <div className="space-y-2">
                  <label htmlFor="password" className="block text-sm font-semibold text-cyan-200">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400/70" />
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      minLength={6}
                      className="w-full pl-10 pr-4 py-3 bg-black/60 border border-cyan-400/40 rounded-xl text-white placeholder-cyan-400/50 focus:outline-none focus:border-yellow-400/60 focus:ring-2 focus:ring-yellow-400/30 transition-all"
                      placeholder="•••••••• (min 6 characters)"
                    />
                  </div>
                </div>

                {/* Confirm Password input */}
                <div className="space-y-2">
                  <label htmlFor="confirmPassword" className="block text-sm font-semibold text-cyan-200">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400/70" />
                    <input
                      id="confirmPassword"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-black/60 border border-cyan-400/40 rounded-xl text-white placeholder-cyan-400/50 focus:outline-none focus:border-yellow-400/60 focus:ring-2 focus:ring-yellow-400/30 transition-all"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                {/* Error message */}
                {error && (
                  <div className="p-3 bg-red-500/20 border border-red-500/40 rounded-lg text-red-300 text-sm">
                    {error}
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-6 bg-gradient-to-r from-[#FF5E00] to-[#FF5E00]/80 text-white font-bold rounded-xl border border-yellow-400/40 hover:from-[#FF5E00]/90 hover:to-[#FF5E00]/70 hover:shadow-lg hover:shadow-orange-400/30 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Sparkles className="w-5 h-5 animate-spin" />
                      <span>Creating account...</span>
                    </>
                  ) : (
                    <>
                      <UserPlus className="w-5 h-5" />
                      <span>Sign Up</span>
                    </>
                  )}
                </button>
              </form>

              {/* Sign in link */}
              <div className="text-center pt-4 border-t border-cyan-400/20">
                <p className="text-cyan-200/80 text-sm">
                  Already have an account?{' '}
                  <Link
                    href="/login"
                    className="text-yellow-400 hover:text-yellow-300 font-semibold underline underline-offset-2 transition-colors"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}


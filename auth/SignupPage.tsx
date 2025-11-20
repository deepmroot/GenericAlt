import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import { auth } from '../utils/auth';

const SignupPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        // Validate passwords match
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            setLoading(false);
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            setLoading(false);
            return;
        }

        try {
            await auth.signup(email, password);
            setSuccess(true);
            // Redirect to login after 2 seconds
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Signup failed');
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="min-h-screen bg-[#1a1c14] text-[#fdfff9] flex flex-col items-center justify-center p-4">
                <div className="bg-olive/50 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] shadow-2xl max-w-md text-center">
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-lime rounded-full flex items-center justify-center text-olive shadow-[0_0_20px_rgba(211,245,76,0.4)]">
                            <ShieldCheck size={32} strokeWidth={2.5} />
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Account Created!</h2>
                    <p className="text-ivory/60 mb-4">Redirecting you to login...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#1a1c14] text-[#fdfff9] flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(#d3f54c_2px,transparent_2px)] bg-[length:60px_60px] opacity-[0.05] pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-md">
                <div className="bg-olive/50 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] shadow-2xl">
                    <div className="flex justify-center mb-8">
                        <div className="w-16 h-16 bg-lime rounded-full flex items-center justify-center text-olive shadow-[0_0_20px_rgba(211,245,76,0.4)]">
                            <ShieldCheck size={32} strokeWidth={2.5} />
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-center mb-2">Start Sourcing</h2>
                    <p className="text-center text-ivory/60 mb-8">Create your sovereign account today.</p>

                    {error && (
                        <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-lime mb-2">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-charcoal/50 border border-white/10 rounded-xl px-4 py-3 text-ivory focus:outline-none focus:border-lime transition-colors"
                                placeholder="name@company.com"
                                required
                                disabled={loading}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-lime mb-2">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-charcoal/50 border border-white/10 rounded-xl px-4 py-3 text-ivory focus:outline-none focus:border-lime transition-colors"
                                placeholder="••••••••"
                                required
                                minLength={6}
                                disabled={loading}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-lime mb-2">Confirm Password</label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full bg-charcoal/50 border border-white/10 rounded-xl px-4 py-3 text-ivory focus:outline-none focus:border-lime transition-colors"
                                placeholder="••••••••"
                                required
                                minLength={6}
                                disabled={loading}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-lime text-olive font-bold py-4 rounded-xl hover:bg-white transition-colors uppercase tracking-widest mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={loading}
                        >
                            {loading ? 'Creating Account...' : 'Create Account'}
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-ivory/40">
                            Already have an account? <Link to="/login" className="text-lime hover:text-white transition-colors font-bold">Log In</Link>
                        </p>
                    </div>

                    <div className="mt-8 text-center border-t border-white/5 pt-6">
                        <Link to="/" className="text-sm text-ivory/40 hover:text-lime transition-colors flex items-center justify-center gap-2">
                            <ArrowLeft size={14} /> Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;

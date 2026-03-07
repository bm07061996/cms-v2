import { useForm } from '@inertiajs/react';
import { useState } from 'react';
import PublicHeader from '../Components/PublicHeader';
import PublicFooter from '../Components/PublicFooter';

export default function Login({ status }) {
    const [showForgot, setShowForgot] = useState(false);
    
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    });

    const { data: forgotData, setData: setForgotData, post: postForgot, processing: forgotProcessing, errors: forgotErrors, reset } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post('/login');
    };

    const submitForgot = (e) => {
        e.preventDefault();
        postForgot('/forgot-password', {
            onSuccess: () => {
                reset();
                setShowForgot(false);
            }
        });
    };

    const content = showForgot ? (
        <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-2 text-center text-gray-900 dark:text-white">Forgot Password</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 text-center">
                Enter your email to receive a password reset link
            </p>

            {status && <div className="mb-4 text-sm text-green-600 dark:text-green-400">{status}</div>}

            <form onSubmit={submitForgot}>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input
                        type="email"
                        value={forgotData.email}
                        onChange={e => setForgotData('email', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {forgotErrors.email && <div className="text-red-500 text-xs mt-1">{forgotErrors.email}</div>}
                </div>

                <button
                    type="submit"
                    disabled={forgotProcessing}
                    className="w-full py-2.5 bg-blue-500 text-white rounded font-medium hover:bg-blue-600 disabled:opacity-50 mb-3"
                >
                    {forgotProcessing ? 'Sending...' : 'Send Reset Link'}
                </button>

                <button
                    type="button"
                    onClick={() => setShowForgot(false)}
                    className="w-full text-sm text-blue-500 hover:underline"
                >
                    Back to Login
                </button>
            </form>
        </div>
    ) : (
        <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">Login</h2>

            <form onSubmit={submit}>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input
                        type="email"
                        value={data.email}
                        onChange={e => setData('email', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.email && <div className="text-red-500 text-xs mt-1">{errors.email}</div>}
                </div>

                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input
                        type="password"
                        value={data.password}
                        onChange={e => setData('password', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.password && <div className="text-red-500 text-xs mt-1">{errors.password}</div>}
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="w-full py-2.5 bg-blue-500 text-white rounded font-medium hover:bg-blue-600 disabled:opacity-50"
                >
                    {processing ? 'Logging in...' : 'Login'}
                </button>

                <button
                    type="button"
                    onClick={() => setShowForgot(true)}
                    className="w-full mt-3 text-sm text-blue-500 hover:underline"
                >
                    Forgot Password?
                </button>
            </form>
        </div>
    );

    return (
        <div className="min-h-screen bg-slate-100 flex flex-col">
            <PublicHeader showLogin={false} />
            <main className="flex-1 flex items-center justify-center px-4 py-10">
                {content}
            </main>
            <PublicFooter />
        </div>
    );
}

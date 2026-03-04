import { useState } from 'react';
import { Link } from '@inertiajs/react';
import { useTheme } from '../Context/ThemeContext';

export default function Layout({ children, user }) {
    const [collapsed, setCollapsed] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
            {/* Desktop Sidebar */}
            <aside className={`${collapsed ? 'w-16' : 'w-60'} bg-gray-800 dark:bg-gray-950 text-white transition-all duration-300 overflow-hidden hidden lg:block`}>
                <div className="p-4 flex justify-between items-center">
                    {!collapsed && <h2 className="text-xl font-bold">Menu</h2>}
                    <button onClick={() => setCollapsed(!collapsed)} className="text-white text-xl hover:text-gray-300">
                        {collapsed ? '→' : '←'}
                    </button>
                </div>
                <nav className="mt-6">
                    <Link href="/dashboard" className="flex items-center px-4 py-3 text-white hover:bg-gray-700 dark:hover:bg-gray-800">
                        <span className="text-xl">📊</span>
                        {!collapsed && <span className="ml-3">Dashboard</span>}
                    </Link>
                    {(user.role === 'admin' || user.permissions?.includes('users')) && (
                        <Link href="/users" className="flex items-center px-4 py-3 text-white hover:bg-gray-700 dark:hover:bg-gray-800">
                            <span className="text-xl">👥</span>
                            {!collapsed && <span className="ml-3">Users</span>}
                        </Link>
                    )}
                    {(user.role === 'admin' || user.permissions?.includes('settings')) && (
                        <Link href="/settings" className="flex items-center px-4 py-3 text-white hover:bg-gray-700 dark:hover:bg-gray-800">
                            <span className="text-xl">⚙️</span>
                            {!collapsed && <span className="ml-3">Settings</span>}
                        </Link>
                    )}
                    {(user.role === 'admin' || user.permissions?.includes('reports')) && (
                        <Link href="/reports" className="flex items-center px-4 py-3 text-white hover:bg-gray-700 dark:hover:bg-gray-800">
                            <span className="text-xl">📄</span>
                            {!collapsed && <span className="ml-3">Reports</span>}
                        </Link>
                    )}
                </nav>
            </aside>

            {/* Mobile Sidebar */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    <div className="fixed inset-0 bg-black opacity-50" onClick={() => setMobileMenuOpen(false)}></div>
                    <aside className="fixed left-0 top-0 bottom-0 w-60 bg-gray-800 dark:bg-gray-950 text-white z-50">
                        <div className="p-4 flex justify-between items-center">
                            <h2 className="text-xl font-bold">Menu</h2>
                            <button onClick={() => setMobileMenuOpen(false)} className="text-white text-xl">✕</button>
                        </div>
                        <nav className="mt-6">
                            <Link href="/dashboard" className="flex items-center px-4 py-3 text-white hover:bg-gray-700">
                                <span className="text-xl">📊</span>
                                <span className="ml-3">Dashboard</span>
                            </Link>
                            {(user.role === 'admin' || user.permissions?.includes('users')) && (
                                <Link href="/users" className="flex items-center px-4 py-3 text-white hover:bg-gray-700">
                                    <span className="text-xl">👥</span>
                                    <span className="ml-3">Users</span>
                                </Link>
                            )}
                            {(user.role === 'admin' || user.permissions?.includes('settings')) && (
                                <Link href="/settings" className="flex items-center px-4 py-3 text-white hover:bg-gray-700">
                                    <span className="text-xl">⚙️</span>
                                    <span className="ml-3">Settings</span>
                                </Link>
                            )}
                            {(user.role === 'admin' || user.permissions?.includes('reports')) && (
                                <Link href="/reports" className="flex items-center px-4 py-3 text-white hover:bg-gray-700">
                                    <span className="text-xl">📄</span>
                                    <span className="ml-3">Reports</span>
                                </Link>
                            )}
                        </nav>
                    </aside>
                </div>
            )}

            <div className="flex-1">
                <header className="bg-white dark:bg-gray-800 px-4 sm:px-6 py-4 shadow flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden text-gray-900 dark:text-white text-2xl">
                            ☰
                        </button>
                        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-4">
                        <button onClick={toggleTheme} className="px-2 sm:px-3 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600">
                            {theme === 'light' ? '🌙' : '☀️'}
                        </button>
                        <span className="hidden sm:inline text-gray-900 dark:text-white">{user.name}</span>
                        <Link href="/logout" method="post" as="button" className="px-3 sm:px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm sm:text-base">
                            Logout
                        </Link>
                    </div>
                </header>
                <main className="p-4 sm:p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}

import Layout from '../../Layouts/Layout';
import { Link, router } from '@inertiajs/react';
import { useState } from 'react';

export default function Index({ users, auth }) {
    const [deleting, setDeleting] = useState(null);

    const handleDelete = (userId) => {
        if (confirm('Are you sure you want to delete this user?')) {
            setDeleting(userId);
            router.delete(`/users/${userId}`, {
                onFinish: () => setDeleting(null),
            });
        }
    };

    return (
        <Layout user={auth.user}>
            <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Users</h2>
                    <Link href="/users/create" className="w-full sm:w-auto text-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        Add User
                    </Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[500px]">
                        <thead>
                            <tr className="border-b dark:border-gray-700">
                                <th className="text-left py-3 text-gray-900 dark:text-white">Name</th>
                                <th className="text-left py-3 text-gray-900 dark:text-white">Email</th>
                                <th className="text-left py-3 text-gray-900 dark:text-white">Role</th>
                                <th className="text-right py-3 text-gray-900 dark:text-white">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user._id} className="border-b dark:border-gray-700">
                                    <td className="py-3 text-gray-900 dark:text-gray-300">{user.name}</td>
                                    <td className="py-3 text-gray-900 dark:text-gray-300">{user.email}</td>
                                    <td className="py-3 text-gray-900 dark:text-gray-300">
                                        <span className={`px-2 py-1 rounded text-xs ${user.role === 'admin' ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200' : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}>
                                            {user.role || 'user'}
                                        </span>
                                    </td>
                                    <td className="py-3 text-right space-x-2">
                                        <Link href={`/users/${user._id}/edit`} className="text-blue-500 hover:underline">
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(user._id)}
                                            disabled={deleting === user._id}
                                            className="text-red-500 hover:underline disabled:opacity-50"
                                        >
                                            {deleting === user._id ? 'Deleting...' : 'Delete'}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );
}

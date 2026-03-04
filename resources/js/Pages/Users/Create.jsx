import Layout from '../../Layouts/Layout';
import { useForm } from '@inertiajs/react';

export default function Create({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        role: 'user',
        permissions: [],
    });

    const availablePermissions = ['users', 'settings', 'reports'];

    const togglePermission = (permission) => {
        if (data.permissions.includes(permission)) {
            setData('permissions', data.permissions.filter(p => p !== permission));
        } else {
            setData('permissions', [...data.permissions, permission]);
        }
    };

    const submit = (e) => {
        e.preventDefault();
        post('/users');
    };

    return (
        <Layout user={auth.user}>
            <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow max-w-2xl">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900 dark:text-white">Create User</h2>
                <form onSubmit={submit}>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input
                            type="text"
                            value={data.name}
                            onChange={e => setData('name', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        />
                        {errors.name && <div className="text-red-500 text-xs mt-1">{errors.name}</div>}
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input
                            type="email"
                            value={data.email}
                            onChange={e => setData('email', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        />
                        {errors.email && <div className="text-red-500 text-xs mt-1">{errors.email}</div>}
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input
                            type="password"
                            value={data.password}
                            onChange={e => setData('password', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        />
                        {errors.password && <div className="text-red-500 text-xs mt-1">{errors.password}</div>}
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
                        <select
                            value={data.role}
                            onChange={e => setData('role', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                        {errors.role && <div className="text-red-500 text-xs mt-1">{errors.role}</div>}
                    </div>
                    {data.role === 'user' && (
                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Permissions</label>
                            <div className="space-y-2">
                                {availablePermissions.map(permission => (
                                    <label key={permission} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={data.permissions.includes(permission)}
                                            onChange={() => togglePermission(permission)}
                                            className="mr-2"
                                        />
                                        <span className="text-gray-900 dark:text-white capitalize">{permission}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}
                    <div className="flex flex-col sm:flex-row gap-2">
                        <button type="submit" disabled={processing} className="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                            Create
                        </button>
                        <a href="/users" className="w-full sm:w-auto text-center px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
                            Cancel
                        </a>
                    </div>
                </form>
            </div>
        </Layout>
    );
}

import Layout from '../../Layouts/Layout';
import { Link, router } from '@inertiajs/react';
import { useState } from 'react';
import DataTable from '../../Components/DataTable';

export default function Index({ users, auth }) {
    const [deleting, setDeleting] = useState(null);

    const columns = [
        { key: 'name', label: 'Name' },
        { key: 'email', label: 'Email' },
        {
            key: 'role', label: 'Role',
            render: (row) => (
                <span className={`px-2 py-1 rounded text-xs ${row.role === 'admin' ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200' : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}>
                    {row.role || 'user'}
                </span>
            ),
        },
        {
            key: 'actions', label: 'Actions', className: 'text-right',
            render: (row) => (
                <span className="space-x-2">
                    <Link href={`/users/${row._id}/edit`} className="text-blue-500 hover:underline">Edit</Link>
                    <button
                        onClick={() => {
                            if (confirm('Are you sure?')) {
                                setDeleting(row._id);
                                router.delete(`/users/${row._id}`, { onFinish: () => setDeleting(null) });
                            }
                        }}
                        disabled={deleting === row._id}
                        className="text-red-500 hover:underline disabled:opacity-50"
                    >
                        {deleting === row._id ? 'Deleting...' : 'Delete'}
                    </button>
                </span>
            ),
        },
    ];

    return (
        <Layout user={auth.user}>
            <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow w-full">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Users</h2>
                    <Link href="/users/create" className="w-full sm:w-auto text-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        Add User
                    </Link>
                </div>
                <DataTable columns={columns} data={users.data ?? []} pagination={users} />
            </div>
        </Layout>
    );
}

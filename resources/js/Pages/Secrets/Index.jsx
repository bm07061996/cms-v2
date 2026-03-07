import { useForm, router } from '@inertiajs/react';
import Layout from '../../Layouts/Layout';
import DataTable from '../../Components/DataTable';

export default function Index({ user, secrets }) {
    const { data, setData, post, processing, errors, reset } = useForm({ key: '', value: '' });

    const columns = [
        { key: 'key', label: 'Key', render: (row) => <span className="font-mono">{row.key}</span> },
        { key: 'value', label: 'Value', render: (row) => <span className="font-mono">{row.value}</span> },
        {
            key: 'actions', label: '', className: 'text-right',
            render: (row) => (
                <button onClick={() => router.delete(`/secrets/${row._id}`)} className="text-red-500 hover:text-red-700 text-sm">
                    Delete
                </button>
            ),
        },
    ];

    return (
        <Layout user={user}>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow w-full">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Secrets</h2>

                <form onSubmit={(e) => { e.preventDefault(); post('/secrets', { onSuccess: () => reset() }); }} className="flex gap-3 mb-8">
                    <div className="flex-1">
                        <input
                            type="text"
                            value={data.key}
                            onChange={e => setData('key', e.target.value)}
                            placeholder="Key"
                            className="w-full border rounded px-3 py-2 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                        />
                        {errors.key && <p className="text-red-500 text-xs mt-1">{errors.key}</p>}
                    </div>
                    <div className="flex-1">
                        <input
                            type="text"
                            value={data.value}
                            onChange={e => setData('value', e.target.value)}
                            placeholder="Value"
                            className="w-full border rounded px-3 py-2 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                        />
                        {errors.value && <p className="text-red-500 text-xs mt-1">{errors.value}</p>}
                    </div>
                    <button type="submit" disabled={processing} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50">
                        Save
                    </button>
                </form>

                <DataTable columns={columns} data={secrets.data ?? []} pagination={secrets} />
            </div>
        </Layout>
    );
}

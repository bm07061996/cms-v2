import { useForm } from '@inertiajs/react';
import Layout from '../Layouts/Layout';

export default function Settings({ user, settings }) {
    const { data, setData, post, processing, errors } = useForm({
        app_name:     settings.app_name     ?? 'Laravel',
        app_timezone: settings.app_timezone ?? 'UTC',
        log_level:    settings.log_level    ?? 'debug',
        maintenance:  settings.maintenance  ?? false,
    });

    const submit = (e) => {
        e.preventDefault();
        post('/settings');
    };

    return (
        <Layout user={user}>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Settings</h2>
                <form onSubmit={submit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">App Name</label>
                        <input
                            type="text"
                            value={data.app_name}
                            onChange={e => setData('app_name', e.target.value)}
                            className="w-full border rounded px-3 py-2 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                        />
                        {errors.app_name && <p className="text-red-500 text-sm mt-1">{errors.app_name}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Timezone</label>
                        <input
                            type="text"
                            value={data.app_timezone}
                            onChange={e => setData('app_timezone', e.target.value)}
                            className="w-full border rounded px-3 py-2 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                        />
                        {errors.app_timezone && <p className="text-red-500 text-sm mt-1">{errors.app_timezone}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Log Level</label>
                        <select
                            value={data.log_level}
                            onChange={e => setData('log_level', e.target.value)}
                            className="w-full border rounded px-3 py-2 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                        >
                            {['debug', 'info', 'warning', 'error'].map(l => (
                                <option key={l} value={l}>{l}</option>
                            ))}
                        </select>
                    </div>

                    <div className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            id="maintenance"
                            checked={data.maintenance}
                            onChange={e => setData('maintenance', e.target.checked)}
                            className="w-4 h-4"
                        />
                        <label htmlFor="maintenance" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Maintenance Mode
                        </label>
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
                    >
                        Save Settings
                    </button>
                </form>
            </div>
        </Layout>
    );
}

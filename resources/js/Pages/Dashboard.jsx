import Layout from '../Layouts/Layout';

export default function Dashboard({ user }) {
    return (
        <Layout user={user}>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Welcome, {user.name}!</h2>
                <p className="text-gray-600 dark:text-gray-300">Email: {user.email}</p>
                {user.last_login_at && (
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                        Last login: {new Date(user.last_login_at).toLocaleString()}
                    </p>
                )}
            </div>
        </Layout>
    );
}

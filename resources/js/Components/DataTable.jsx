import { Link } from '@inertiajs/react';

function Pagination({ links, meta }) {
    if (!links || links.length <= 3) return null;

    const prev = links[0];
    const next = links[links.length - 1];
    const pages = links.slice(1, -1);
    const activePage = pages.findIndex(p => p.active);

    const getVisible = () => {
        const total = pages.length;
        if (total <= 5) return pages.map((p, i) => ({ ...p, i }));
        const result = [];
        const add = (i) => result.push({ ...pages[i], i });
        const addDots = (i) => result.push({ label: '...', url: null, active: false, i: `d${i}` });

        add(0);
        if (activePage > 2) addDots('l');
        const start = Math.max(1, Math.min(activePage - 1, total - 4));
        const end = Math.min(start + 2, total - 2);
        for (let i = start; i <= end; i++) add(i);
        if (end < total - 2) addDots('r');
        add(total - 1);
        return result;
    };

    const btnClass = (active, url) =>
        `px-3 py-1 text-sm rounded border ${
            active ? 'bg-blue-600 text-white border-blue-600'
                   : 'text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'
        } ${!url ? 'opacity-40 pointer-events-none' : ''}`;

    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4">
            {meta && (
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    Showing {meta.from}–{meta.to} of {meta.total}
                </p>
            )}
            <div className="flex flex-wrap gap-1">
                <Link href={prev.url ?? '#'} preserveScroll preserveState className={btnClass(false, prev.url)} dangerouslySetInnerHTML={{ __html: prev.label }} />
                {getVisible().map((p) =>
                    p.label === '...' ? (
                        <span key={p.i} className="px-3 py-1 text-sm text-gray-400">…</span>
                    ) : (
                        <Link key={p.i} href={p.url ?? '#'} preserveScroll preserveState className={btnClass(p.active, p.url)} dangerouslySetInnerHTML={{ __html: p.label }} />
                    )
                )}
                <Link href={next.url ?? '#'} preserveScroll preserveState className={btnClass(false, next.url)} dangerouslySetInnerHTML={{ __html: next.label }} />
            </div>
        </div>
    );
}

export default function DataTable({ columns, data, pagination }) {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead>
                        <tr className="border-b dark:border-gray-700">
                            {columns.map(col => (
                                <th key={col.key} className={`py-3 font-semibold text-gray-900 dark:text-white ${col.className ?? ''}`}>
                                    {col.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.length === 0 && (
                            <tr>
                                <td colSpan={columns.length} className="py-6 text-center text-gray-400">
                                    No records found.
                                </td>
                            </tr>
                        )}
                        {data.map((row, i) => (
                            <tr key={row._id ?? row.id ?? i} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/30">
                                {columns.map(col => (
                                    <td key={col.key} className={`py-3 text-gray-800 dark:text-gray-300 ${col.className ?? ''}`}>
                                        {col.render ? col.render(row) : row[col.key]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {pagination && <Pagination links={pagination.links} meta={pagination} />}
        </div>
    );
}

import { Link } from '@inertiajs/react';

export default function Pagination({ links, meta }) {
    if (!links || links.length <= 3) return null;
    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4">
            {meta && (
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    Showing {meta.from}–{meta.to} of {meta.total}
                </p>
            )}
            <div className="flex flex-wrap gap-1">
                {links.map((link, i) => (
                    <Link
                        key={i}
                        href={link.url ?? '#'}
                        preserveScroll
                        preserveState
                        className={`px-3 py-1 text-sm rounded border ${
                            link.active
                                ? 'bg-blue-600 text-white border-blue-600'
                                : 'text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'
                        } ${!link.url ? 'opacity-40 pointer-events-none' : ''}`}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                ))}
            </div>
        </div>
    );
}

import PublicHeader from '../Components/PublicHeader';
import PublicFooter from '../Components/PublicFooter';

export default function Home() {
    return (
        <div className="min-h-screen bg-slate-100 flex flex-col">
            <PublicHeader />
            <main className="w-full">
                <div className="mx-auto w-full max-w-6xl px-4 py-8">
                    <div className="rounded-lg bg-white p-6 shadow">
                        <h2 className="text-xl font-bold text-slate-900">Upcoming Events</h2>
                        <p className="mt-1 text-sm text-slate-600">
                            Community programs and meetings for members.
                        </p>
                        <div className="mt-4 grid gap-4 md:grid-cols-2">
                            <div className="rounded border border-slate-200 p-4">
                                <div className="text-sm font-semibold text-emerald-700">Farmers Training</div>
                                <div className="mt-1 text-xs text-slate-500">March 15, 2026 · 10:00 AM</div>
                                <div className="mt-2 text-sm text-slate-700">
                                    Topic: Modern cultivation methods and soil health.
                                </div>
                            </div>
                            <div className="rounded border border-slate-200 p-4">
                                <div className="text-sm font-semibold text-emerald-700">Seed Distribution</div>
                                <div className="mt-1 text-xs text-slate-500">March 22, 2026 · 9:30 AM</div>
                                <div className="mt-2 text-sm text-slate-700">
                                    Venue: FPO Office, Papparapatti.
                                </div>
                            </div>
                            <div className="rounded border border-slate-200 p-4">
                                <div className="text-sm font-semibold text-emerald-700">Monthly Meeting</div>
                                <div className="mt-1 text-xs text-slate-500">April 3, 2026 · 4:00 PM</div>
                                <div className="mt-2 text-sm text-slate-700">
                                    Updates on procurement, sales, and member services.
                                </div>
                            </div>
                            <div className="rounded border border-slate-200 p-4">
                                <div className="text-sm font-semibold text-emerald-700">Organic Farming Workshop</div>
                                <div className="mt-1 text-xs text-slate-500">April 18, 2026 · 11:00 AM</div>
                                <div className="mt-2 text-sm text-slate-700">
                                    Demonstrations and Q&amp;A with experts.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PublicFooter />
        </div>
    );
}

import { Link } from '@inertiajs/react';
import logo from '../../images/logo.jpg';

export default function PublicHeader({ showLogin = true }) {
    return (
        <header
            className="relative w-full overflow-hidden border-b border-emerald-900/40 shadow-lg"
            style={{
                fontFamily: '"Trebuchet MS", "Segoe UI", sans-serif',
                '--banner-green': '#0a8a33',
                '--banner-green-dark': '#066226',
                '--banner-yellow': '#ffd75a',
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--banner-green-dark)] via-[var(--banner-green)] to-[var(--banner-green-dark)]" />
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage:
                        'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35), transparent 45%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.25), transparent 40%)',
                }}
            />

            <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col justify-center px-5 py-4 text-white">
                <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-[auto,1fr,auto]">
                    <div className="flex items-center justify-center gap-3 md:justify-start">
                        <div className="h-20 w-20 rounded-full bg-white p-1 shadow-md ring-4 ring-emerald-900/20">
                            <img
                                src={logo}
                                alt="PASS-FPO Logo"
                                className="h-full w-full rounded-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="mx-auto inline-flex items-center rounded-full bg-red-600 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white shadow">
                            CIN NO: U01110TZ2021PTC035677
                        </div>
                        <h1
                            className="mt-2 text-lg font-extrabold uppercase tracking-wide text-white sm:text-2xl md:text-3xl"
                            style={{ textShadow: '0 2px 0 rgba(0,0,0,0.35)' }}
                        >
                            Papparapatti Subramaniya Siva Farmer Producer Company Ltd
                        </h1>
                        <p className="mt-1 text-sm font-semibold text-emerald-50">
                            பாப்பாரப்பட்டி சுப்பிரமணிய சிவா உழவர் உற்பத்தியாளர் நிறுவனம் (லிமி)
                        </p>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-emerald-100">
                            Regd Add: 2/434, Indranagar, O.G.Halli Village &amp; (PO), Pennagaram (TK), Dharmapuri
                            (DT). 636809.
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-50/90 md:items-end">
                        <span>mail id: pssfpl@gmail.com</span>
                        {/* {showLogin && (
                            <Link
                                href="/login"
                                className="inline-flex items-center rounded-full border border-white/70 px-4 py-1 text-[11px] font-bold uppercase tracking-widest text-white hover:bg-white/10"
                            >
                                Login
                            </Link>
                        )} */}
                    </div>
                </div>

                <div className="mt-3 border-t border-emerald-200/40 pt-2 text-center text-sm font-bold uppercase text-[var(--banner-yellow)]">
                    Chairman: K. Perumal - 9994529674
                </div>
            </div>
        </header>
    );
}

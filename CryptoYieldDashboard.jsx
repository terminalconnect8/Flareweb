import React from 'react';

const EyeIcon = ({ className = '' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const InfoIcon = ({ className = '' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const CryptoYieldDashboard = () => {
  return (
    <section className="builder-hero bg-white text-gray-900">
      <div className="mx-auto max-w-5xl px-4 py-6 space-y-6 sm:px-6 lg:px-8">
        <div className="border-2 border-pink-500 rounded-xl p-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="relative inline-flex h-8 w-14 shrink-0 items-center rounded-full bg-pink-500 p-1"
              aria-pressed="true"
            >
              <span className="h-6 w-6 rounded-full bg-white shadow transition-transform translate-x-5" />
            </button>
            <div>
              <p className="font-medium text-gray-900">Shown on the homescreen</p>
              <p className="text-sm text-gray-500">Your balance is visible on the homescreen</p>
            </div>
          </div>
          <EyeIcon className="h-6 w-6 text-gray-400" />
        </div>

        <div className="border border-gray-200 rounded-xl bg-white p-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <div className="flex items-center gap-2 text-xs uppercase text-gray-500">
                <InfoIcon className="h-4 w-4" />
                <span>TVL IN XRP</span>
              </div>
              <p className="mt-4 text-2xl font-bold text-gray-900">31.05M</p>
              <p className="mt-1 text-sm text-gray-500">$34,688,504.643</p>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <div className="flex items-center gap-2 text-xs uppercase text-gray-500">
                <InfoIcon className="h-4 w-4" />
                <span>YIELD EARNED</span>
              </div>
              <p className="mt-4 text-2xl font-bold text-gray-900">2.017 FXRP</p>
              <p className="mt-1 text-sm text-gray-500">$2.254</p>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <div className="flex items-center gap-2 text-xs uppercase text-gray-500">
                <InfoIcon className="h-4 w-4" />
                <span>XRP BALANCE</span>
              </div>
              <p className="mt-4 text-2xl font-bold text-gray-900">0.00</p>
              <p className="mt-1 text-sm text-gray-500">$0.00</p>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <div className="flex items-center gap-2 text-xs uppercase text-gray-500">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                <span>UPSHIFT VAULT</span>
              </div>
              <p className="mt-4 text-2xl font-bold text-gray-900">0.00 earnXRP</p>
              <p className="mt-1 text-sm text-gray-500">0.00 FXRP</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 text-sm text-gray-500 sm:flex-row sm:justify-between">
          <a href="#" className="underline">Xaman Disclaimer</a>
          <a href="#" className="underline">Yield FAQ</a>
          <a href="#" className="underline">Contact Support</a>
        </div>

        <div className="border border-gray-200 rounded-xl bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 text-gray-900">
              <InfoIcon className="h-5 w-5" />
              <h2 className="text-lg font-semibold">FXRP Withdrawal</h2>
            </div>
            <span className="inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-700">
              Not Enough Balance
            </span>
          </div>

          <div className="mt-6">
            <p className="text-xs uppercase tracking-[0.15em] text-gray-500">AVAILABLE BALANCE</p>
            <p className="mt-2 text-2xl font-bold text-gray-900">0.286915 FXRP</p>
            <button
              type="button"
              disabled
              className="mt-4 w-full rounded-lg bg-gray-100 py-3 text-sm font-semibold text-gray-400 shadow-none"
            >
              Withdraw to XRPL
            </button>
            <p className="mt-4 text-sm text-gray-500">Withdrawals are only available in multiples of 10.</p>
          </div>
        </div>
      </div>

      <div className="sticky bottom-0 z-20 border-t border-gray-200 bg-white py-4">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 sm:flex-row sm:px-6">
          <button
            type="button"
            disabled
            className="w-full rounded-xl bg-gray-100 py-3 text-sm font-semibold text-gray-400"
          >
            Withdraw
          </button>
          <button
            type="button"
            className="w-full rounded-xl bg-pink-500 py-3 text-sm font-semibold text-white shadow-sm"
          >
            Deposit
          </button>
        </div>
      </div>
    </section>
  );
};

export default CryptoYieldDashboard;

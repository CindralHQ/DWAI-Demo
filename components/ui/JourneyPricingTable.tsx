'use client'

import { useMemo, useState } from 'react'

export type JourneyScheduleEntry = {
  part: string
  videos: number
  weeks: number
  costPerSeriesInr: number
  costEntireSeriesInr: number
  repeatersCostInr: number
  isTotal?: boolean
}

type JourneyPricingTableProps = {
  schedule: ReadonlyArray<JourneyScheduleEntry>
  pacing: ReadonlyArray<string>
  reminders: ReadonlyArray<string>
}

const currencyOptions = [
  {
    code: 'INR',
    label: 'INR (₹)',
    locale: 'en-IN',
    rateFromInr: 1,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  },
  {
    code: 'USD',
    label: 'USD ($)',
    locale: 'en-US',
    rateFromInr: 0.012,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  },
  {
    code: 'EUR',
    label: 'EUR (€)',
    locale: 'de-DE',
    rateFromInr: 0.011,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  },
  {
    code: 'AED',
    label: 'AED (د.إ)',
    locale: 'en-AE',
    rateFromInr: 0.044,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  },
  {
    code: 'GBP',
    label: 'GBP (£)',
    locale: 'en-GB',
    rateFromInr: 0.0095,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }
] as const

type CurrencyCode = (typeof currencyOptions)[number]['code']

export function JourneyPricingTable({ schedule, pacing, reminders }: JourneyPricingTableProps) {
  const [currencyCode, setCurrencyCode] = useState<CurrencyCode>('INR')

  const currency = useMemo(() => {
    return currencyOptions.find((option) => option.code === currencyCode) ?? currencyOptions[0]
  }, [currencyCode])

  const formatter = useMemo(
    () =>
      new Intl.NumberFormat(currency.locale, {
        style: 'currency',
        currency: currency.code,
        minimumFractionDigits: currency.minimumFractionDigits,
        maximumFractionDigits: currency.maximumFractionDigits
      }),
    [currency]
  )

  const formatAmount = (amountInInr: number) => {
    const converted = amountInInr * currency.rateFromInr
    return formatter.format(converted)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm font-medium text-indigo-500">
          Converted from INR using indicative exchange rates. Final billing occurs in INR.
        </p>
        <label className="flex items-center gap-2 text-sm font-semibold text-indigo-900">
          View prices in
          <select
            value={currencyCode}
            onChange={(event) => setCurrencyCode(event.target.value as CurrencyCode)}
            className="rounded-lg border border-indigo-200 bg-white px-3 py-1.5 text-sm font-medium text-indigo-900 shadow-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
          >
            {currencyOptions.map((option) => (
              <option key={option.code} value={option.code}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="overflow-hidden rounded-2xl border border-indigo-100">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-indigo-100 text-left">
            <thead className="bg-indigo-50/60 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-500">
              <tr className="[&>th]:px-4 [&>th]:py-3">
                <th scope="col">Series</th>
                <th scope="col">Videos</th>
                <th scope="col">Weeks</th>
                <th scope="col">Cost Per Series</th>
                <th scope="col">Cost of Entire Series</th>
                <th scope="col">Repeaters Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-indigo-100 text-base leading-7 text-indigo-800">
              {schedule.map((entry) => (
                <tr
                  key={entry.part}
                  className={entry.isTotal ? 'bg-indigo-50/80 font-semibold text-indigo-900' : 'bg-white'}
                >
                  <td className="px-4 py-3">{entry.part}</td>
                  <td className="px-4 py-3">{entry.videos}</td>
                  <td className="px-4 py-3">{entry.weeks}</td>
                  <td className="px-4 py-3">{formatAmount(entry.costPerSeriesInr)}</td>
                  <td className="px-4 py-3">{formatAmount(entry.costEntireSeriesInr)}</td>
                  <td className="px-4 py-3">{formatAmount(entry.repeatersCostInr)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-2 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
        {pacing.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>

      <div className="space-y-3 text-base leading-7 text-indigo-600">
        {reminders.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
    </div>
  )
}

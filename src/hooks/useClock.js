import { useEffect, useState } from 'react'

/**
 * Live-updating clock for Africa/Cairo (EET/EEST handled automatically
 * by Intl). Returns a formatted "HH:MM" string that ticks every second.
 */
export function useClock(timeZone = 'Africa/Cairo') {
  const [time, setTime] = useState(() => formatTime(timeZone))

  useEffect(() => {
    const id = setInterval(() => setTime(formatTime(timeZone)), 1000)
    return () => clearInterval(id)
  }, [timeZone])

  return time
}

function formatTime(timeZone) {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(new Date())
}

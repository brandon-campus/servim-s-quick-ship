export function trackConversion(label: string) {
  const g = (window as any).gtag;
  if (typeof g === 'function') {
    g('event', 'conversion', { 'send_to': `AW-16678975996/${label}` });
  }
}

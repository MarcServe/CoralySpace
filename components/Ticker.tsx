const coral = '#EF7A6C';

interface TickerProps {
  items: string[];
  bg?: string;
  col?: string;
}

export default function Ticker({ items, bg = coral, col = 'white' }: TickerProps) {
  const all = [...items, ...items];
  return (
    <div style={{ background: bg, padding: '11px 0', overflow: 'hidden' }}>
      <div style={{ display: 'flex', gap: '28px', animation: 'ticker 22s linear infinite', width: 'max-content' }}>
        {all.map((t, i) => (
          <span key={i} style={{
            fontFamily: "'DM Mono',monospace", fontSize: '9px', letterSpacing: '3px',
            color: col, whiteSpace: 'nowrap', opacity: t === '·' ? 0.4 : 1,
          }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

'use client'

export default function GlobalError({ error, reset }) {
    return (
        <html lang='en'>
            <body style={{ fontFamily: 'system-ui, sans-serif', margin: 0, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fdf7f0', padding: '1.5rem' }}>
                <div style={{ maxWidth: '32rem', textAlign: 'center' }}>
                    <p style={{ fontSize: '0.75rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#6b7280' }}>Critical error</p>
                    <h1 style={{ fontSize: '2.25rem', margin: '0.75rem 0', fontWeight: 600 }}>Something went badly wrong.</h1>
                    <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
                        The site hit a fault outside the usual flow. Try reloading — if it persists, please let us know.
                    </p>
                    <button
                        type='button'
                        onClick={() => reset()}
                        style={{
                            background: '#d97706',
                            color: 'white',
                            border: 'none',
                            padding: '0.75rem 1.5rem',
                            borderRadius: '9999px',
                            fontWeight: 600,
                            cursor: 'pointer'
                        }}
                    >
                        Reload page
                    </button>
                </div>
            </body>
        </html>
    )
}

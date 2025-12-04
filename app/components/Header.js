'use client';

import Link from 'next/link';

export default function Header() {
    return (
        <header style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            borderBottom: '1px solid var(--border)',
            marginBottom: '3rem',
            paddingBottom: '1rem',
            paddingTop: '1rem',
            paddingLeft: '4rem',
            paddingRight: '4rem'
        }}>
            <div className="logo">
                <Link href="/" style={{ fontWeight: 'bold', fontSize: '1.2rem', border: 'none', color: 'var(--foreground)' }}>
                    vidhupv
                </Link>
            </div>
        </header>
    );
}

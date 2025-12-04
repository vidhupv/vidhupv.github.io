'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function HomeClient({ allPostsData, toysData }) {
    const [activeTab, setActiveTab] = useState('writing');
    const [isSticky, setIsSticky] = useState(false);
    const sentinelRef = useRef(null);

    const handleScroll = () => {
        if (sentinelRef.current) {
            const offset = sentinelRef.current.offsetTop;
            const scrollY = window.scrollY;
            // Stick when the sentinel hits the top (with a small buffer for smoothness)
            setIsSticky(scrollY > offset - 20);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const renderContent = () => {
        switch (activeTab) {
            case 'writing':
                return (
                    <>
                        <div style={{ marginBottom: '2rem' }}>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>writing</h2>
                            <p style={{ opacity: 0.7 }}>thoughts, essays, and logs.</p>
                        </div>
                        <div className="table-container" style={{ marginTop: '0' }}>
                            <div className="table-header">
                                <div>Title</div>
                                <div>Tags</div>
                                <div>Toy</div>
                            </div>
                            {allPostsData.length > 0 ? (
                                allPostsData.map(({ id, date, title, tags, toy }) => (
                                    <div key={id} className="table-row">
                                        <div>
                                            <Link href={`/blog/${id}`} style={{ fontSize: '14px', fontWeight: '500' }}>
                                                {title}
                                            </Link>
                                            <div style={{ fontSize: '11px', opacity: 0.5, marginTop: '4px' }}>{date}</div>
                                        </div>
                                        <div>
                                            {tags && tags.map(tag => (
                                                <span key={tag} className="tag-pill">{tag}</span>
                                            ))}
                                        </div>
                                        <div style={{ fontSize: '12px', opacity: 0.7 }}>
                                            {toy && <span>Toy: {toy}</span>}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div style={{ padding: '2rem', opacity: 0.5, fontStyle: 'italic' }}>
                                    No posts yet.
                                </div>
                            )}
                        </div>
                    </>
                );
            case 'toys':
                return (
                    <>
                        <div style={{ marginBottom: '2rem' }}>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>toys</h2>
                            <p style={{ opacity: 0.7 }}>technical experiments and machines.</p>
                        </div>
                        <div className="table-container" style={{ marginTop: '0' }}>
                            <div className="table-header">
                                <div>Project Name</div>
                                <div>Tech Stack</div>
                                <div>Type</div>
                            </div>
                            {toysData.length > 0 ? (
                                toysData.map((toy) => (
                                    <div key={toy.id} className="table-row">
                                        <div>
                                            {/* Assuming toys might have detail pages later, or just link to repo */}
                                            <span style={{ fontSize: '14px', fontWeight: '500' }}>{toy.name}</span>
                                        </div>
                                        <div>
                                            <span className="tag-pill">{toy.tech}</span>
                                        </div>
                                        <div style={{ fontSize: '12px', opacity: 0.7 }}>
                                            {toy.type}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div style={{ padding: '2rem', opacity: 0.5, fontStyle: 'italic' }}>
                                    No toys yet.
                                </div>
                            )}
                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    const handleLogoClick = (e) => {
        e.preventDefault();
        setActiveTab('writing');
        window.scrollTo({ top: 0 });
    };

    return (
        <div className="home-container" style={{ alignItems: 'center', justifyContent: 'flex-start', minHeight: 'auto', paddingTop: '1rem' }}>
            {/* Initial Logo (scrolls away) */}
            <div style={{
                width: 'calc(100% + 8rem)',
                marginLeft: '-4rem',
                marginRight: '-4rem',
                padding: '1rem 4rem',
                marginBottom: '2rem',
                borderBottom: '1px solid var(--border)'
            }}>
                <div className="logo" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                    <a href="/" onClick={handleLogoClick} style={{ border: 'none' }}>vidhupv</a>
                </div>
            </div>

            <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>hi!</h1>
                <p style={{ fontSize: '1.1rem', opacity: 0.8 }}>im an engineer following my curiosities</p>
            </div>

            {/* Sentinel to track scroll position */}
            <div ref={sentinelRef} style={{ height: '1px', width: '100%' }} />

            {/* Placeholder to prevent layout shift when nav becomes fixed */}
            {isSticky && <div style={{ height: '184px', width: '100%' }} />}

            {/* Navigation Tabs / Cards */}
            <div
                className={`nav-tabs-container ${isSticky ? 'sticky' : ''}`}
            >
                {isSticky && (
                    <div style={{ position: 'absolute', left: '4rem', fontWeight: 'bold', fontSize: '1.2rem' }}>
                        <a href="/" onClick={handleLogoClick} style={{ border: 'none' }}>vidhupv</a>
                    </div>
                )}

                <button
                    className={`nav-tab ${activeTab === 'writing' ? 'active' : ''}`}
                    onClick={() => setActiveTab('writing')}
                >
                    writing
                </button>
                <button
                    className={`nav-tab ${activeTab === 'toys' ? 'active' : ''}`}
                    onClick={() => setActiveTab('toys')}
                >
                    toys
                </button>
            </div>

            <div style={{ width: '100%', marginTop: '2rem' }}>
                {renderContent()}
            </div>
        </div>
    );
}

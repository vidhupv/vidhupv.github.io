import Link from 'next/link';

import Header from '../components/Header';

export default function Toys() {
    return (
        <div style={{ width: '100%' }}>
            <Header />
            <h1 style={{ marginBottom: '2rem' }}>toys</h1>

            <div className="table-container">
                <div className="table-header">
                    <div>Project Name</div>
                    <div>Tech Stack</div>
                    <div>Type</div>
                </div>

                {/* Empty State */}
                <div style={{ padding: '2rem', opacity: 0.5, fontStyle: 'italic' }}>
                    No toys yet.
                </div>
            </div>
        </div>
    );
}

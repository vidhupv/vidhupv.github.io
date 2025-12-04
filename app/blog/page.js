import Link from 'next/link';
import { getSortedPostsData } from '../../lib/posts';

import Header from '../components/Header';

export default async function Blog() {
    const allPostsData = getSortedPostsData('blog');

    return (
        <div style={{ width: '100%' }}>
            <Header />
            <h1 style={{ marginBottom: '2rem' }}>writing</h1>

            <div className="table-container">
                <div className="table-header">
                    <div>Title</div>
                    <div>Tags</div>
                    <div>Quest / Toy</div>
                </div>

                {allPostsData.length > 0 ? (
                    allPostsData.map(({ id, date, title, tags, quest, toy }) => (
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
                                {quest && <span>Quest: {quest}</span>}
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
        </div>
    );
}

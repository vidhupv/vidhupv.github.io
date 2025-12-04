import { getPostData } from '../../../lib/posts';
import Header from '../../components/Header';

export default async function Post({ params }) {
    const { id } = await params;
    const postData = await getPostData('blog', id);

    return (
        <>
            <Header />
            <article style={{ maxWidth: '700px' }}>
                <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{postData.title}</h1>
                <div style={{ marginBottom: '2rem', opacity: 0.6 }}>
                    <span>{postData.date}</span>
                </div>
                <div style={{ marginBottom: '2rem' }}>
                    {postData.tags && postData.tags.map(tag => (
                        <span key={tag} className="tag-pill">{tag}</span>
                    ))}
                </div>
                <div
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                    style={{ lineHeight: '1.8' }}
                />
            </article>
        </>
    );
}

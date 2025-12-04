import { getSortedPostsData } from '../lib/posts';
import HomeClient from './components/HomeClient';

export default async function Home() {
  const allPostsData = getSortedPostsData('blog');
  const toysData = getSortedPostsData('toys');

  return (
    <HomeClient
      allPostsData={allPostsData}
      toysData={toysData}
    />
  );
}

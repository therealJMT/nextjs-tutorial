import Link from 'next/link';

export default function Home() {
  return (
  <>
  <h1>Willkommen Zuhause</h1>
  <Link href="/blog">Blog</Link>
  <Link href="/products">Products</Link>
  <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
  <Link href="/articles/breaking-news-123?lang=de">Read in German</Link>
  </>
  )
}
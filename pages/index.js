import Link from 'next/link'

export default function Blog() {
  return (
    <>
      <h1>Blog</h1>
      <h1 className="title">
        Read{' '}
        <Link href="/posts/first-post">
          <a>this post!</a>
        </Link>
      </h1>
    </>

  )
}


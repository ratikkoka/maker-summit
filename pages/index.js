import Link from 'next/link';

export default function Home() {

  return (
    <>
      <style jsx global>{`
        body {
          background-color: #7ed0d9;
        }
      `}</style>
      <div className='welcome'>
        <h1>Maker Summit 2022</h1>
        <Link href="/submissions" passHref>
          <button type='button' className='btn btn-outline-primary'>View Submissions</button>  
        </Link>
      </div>
    </>
  )
}
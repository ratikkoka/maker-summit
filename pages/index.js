import Link from 'next/link';
import { Button } from 'react-bootstrap';

export default function Home() {
  
  let description = `Vote for your favorite project!
    The public will have the opportunity to vote for their top 
    2 favorite projects in each category. Voting will open via our website on Monday, 
    April 4, 2022, and close on Friday, April 8, 2022 at 8 am.
    All participants are encouraged to join us online on Friday, 
    April 8, 2022 (time to be announced later) where we will announce the winners of each category!`; 
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
          <Button variant="outline-primary">View Submissions</Button>  
        </Link>
        <p>{description}</p>
      </div>
    </>
  )
}
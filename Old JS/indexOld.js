import Link from "next/link";
import { Button } from "react-bootstrap";
import Layout from "../components/layout";

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
          background-color: #4b2e83;
        }
      `}</style>
      <div className="welcome">
        <h1 className="welcome-title">Maker Summit 2022</h1>
        <Link href="/submissions" passHref>
          <Button variant="outline-primary">View Submissions</Button>
        </Link>
        <p>{description}</p>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

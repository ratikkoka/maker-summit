import * as React from "react";
import dbConnect from "../lib/dbConnect";
import Submission from "../models/Submission";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AppBar, IconButton, Toolbar, Collapse } from "@mui/material";
import { useState, useEffect } from "react";
import { Link as Scroll } from "react-scroll";
import Image from "next/image";
import Submissions from "./submissions";

export default function NewHome({ submissions }) {
  useEffect(() => {
    setChecked(true);
  }, []);

  const [checked, setChecked] = useState(false);

  const StyledAppBar = styled(AppBar)({
    background: "none",
  });

  const StyledToolbar = styled(Toolbar)({
    width: "90%",
    margin: "0 auto",
    display: "flex",
    gap: "5px",
    alignItems: "baseline",
  });

  const StyledExpandMore = styled(ExpandMoreIcon)({
    color: "#ffffff",
    fontSize: "4rem",
  });

  return (
    <>
      <div className="mui-header" id="header">
        <StyledAppBar elevation={0}>
          <StyledToolbar>
            <Image
              src="/img/logo_yellow.svg"
              className="d-inline-block align-top"
              alt="Database Logo"
              width={36}
              height={36}
            />
            <h1 className="mui-appbar-title">Maker Summit</h1>
          </StyledToolbar>
        </StyledAppBar>
        <Collapse
          in={checked}
          {...(checked ? { timeout: 1000 } : {})}
          collapsedSize={50}
        >
          <div className="mui-container">
            <h1 className="mui-title">
              Maker
              <br />
              Summit
              <br />
              2022
            </h1>
            <Scroll to="submissionStart" offset={-70} smooth={true}>
              <IconButton>
                <StyledExpandMore />
              </IconButton>
            </Scroll>
          </div>
        </Collapse>
      </div>
      <Submissions submissions={submissions} />
    </>
  );
}

export async function getServerSideProps() {
  try {
    await dbConnect();

    /* find all the data in our database */
    const result = await Submission.find({});
    const submission = result.map((doc) => {
      const submission = doc.toObject();
      submission._id = submission._id.toString();
      return submission;
    });

    return { props: { submissions: submission } };
  } catch (e) {
    console.log(e);
  }
}

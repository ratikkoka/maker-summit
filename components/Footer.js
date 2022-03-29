import { Container, Row, Col } from "react-bootstrap";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import { IconButton } from "@mui/material";
import Image from "next/image";

export default function Footer() {
  const WhiteButton = styled(IconButton)({
    color: "#ffffff",
  });

  return (
    <footer className="text-center text-white">
      <div className="mainfooter">
        <Container className="p-4">
          <Row>
            <Col lg={3} className="d-none d-lg-block pt-4">
              <Image
                src="/img/HFS_LOGO.png"
                alt="HFS Logo"
                layout="intrinsic"
                width={683}
                height={135}
              ></Image>
            </Col>
            <Col lg={3} className="d-none d-lg-block">
              <Image
                src="/img/PERKS_REC_LOGO.png"
                alt="Perks & Rec Logo"
                layout="intrinsic"
                width={4096}
                height={1617}
              ></Image>
            </Col>
            <Col md={5} lg={3} className="pt-4 pt-md-0">
              <p className="mb-2">
                <strong>CONNECT WITH US</strong>
              </p>
              <p className="mb-2">
                <WhiteButton
                  href="https://www.facebook.com/UWHFS/"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </WhiteButton>
                <WhiteButton
                  href="https://www.instagram.com/uwhfs/"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </WhiteButton>
                <WhiteButton
                  href="https://twitter.com/uofwhfs"
                  aria-label="Twitter"
                >
                  <TwitterIcon />
                </WhiteButton>
                <WhiteButton
                  href="https://www.youtube.com/user/UWHFS"
                  aria-label="YouTube"
                >
                  <YouTubeIcon />
                </WhiteButton>
              </p>
              <p className="mb-0">
                1045 NE Campus Parkway
                <br />
                Seattle, WA 98105 |
                <Link href="mailto:hfsinfo@uw.edu"> hfsinfo@uw.edu</Link>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        className="subfooter"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <Container>
          <Row>
            <Col md={6} lg={9} className="mb-3 mb-md-0">
              © 2022 HOUSING & FOOD SERVICES | UNIVERSITY OF WASHINGTON
            </Col>
            <Col md={2} lg={1}>
              <Link href="https://www.washington.edu/online/privacy">
                PRIVACY
              </Link>
            </Col>
            <Col md={2} lg={1}>
              <Link href="https://www.washington.edu/online/privacy">
                TERMS
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}

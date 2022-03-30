import ReactGA from "react-ga4";

const myGa = () => {
  const GA_ID = "G-RTC5HTLFKB"; // your google analytics id
  ReactGA.initialize(GA_ID);
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname + window.location.search,
  });
};

export default myGa;

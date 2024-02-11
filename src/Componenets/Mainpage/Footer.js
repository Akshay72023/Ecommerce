import { Fragment } from "react";
import { BsYoutube, BsSpotify, BsFacebook} from "react-icons/bs";

const Footer = () => {
  return (
    <Fragment>
      <div className="p-1 bg-info text-white d-flex align-items-center ">
        <p style={{ fontSize: "2em", fontFamily: "bold", marginLeft: "15%" }}>
          The Generics
        </p>
        <BsYoutube style={{ marginLeft: "40%" }} size={36} />
        <BsSpotify style={{ marginLeft: "2%" }} size={36} />
        <BsFacebook style={{ marginLeft: "2%" }} size={36} />
      </div>
    </Fragment>
  );
};
export default Footer;
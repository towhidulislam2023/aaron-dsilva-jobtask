import Navbar from "../../Components/Navbar/Navbar";
import regimg from "../../../public/112454-form-registration.json";
import Lottie from "lottie-react";
import "./home.css";
import AddUserInfo from "../../Components/AddUserInfo/AddUserInfo";
const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="page-layout">
        <div className="lottie-section">
          <Lottie className="lottie-style" animationData={regimg} loop={true} />
        </div>
        <div className="formsection">
          <div className="title">
            <h1>Registration Form</h1>
          <p>Fill This form With Right Information</p>

          </div>
          <AddUserInfo></AddUserInfo>
        </div>
      </div>
    </div>
  );
};

export default Home;

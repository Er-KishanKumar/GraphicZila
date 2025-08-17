import { Link } from "react-router-dom";
import "./calender.scss";
const Calender = () => {
  return (
    <div id="calender">
      <div className="cal-wrapper">
        <div className="cal-info">
          <p className="cal-subtitle">The year of the rabbit has come</p>
          <h3 className="cal-title">
            Hop on for <span className="gold-text"> New Year</span> with
            GraphicZila
          </h3>
          <Link to="calender" className="cal-btn">
            Celebrate now
          </Link>
        </div>
        <div className="cover-image">
          <div className="cover-wrapper">
            <img src="assets/images/calender/cover.jpg" alt="caover-img" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Calender;


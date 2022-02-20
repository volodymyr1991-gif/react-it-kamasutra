import sideBar from "./sideBar";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    sidebar: state.sideBar,
  };
};

const SideBarContainer = connect(mapStateToProps)(sideBar);

export default SideBarContainer;

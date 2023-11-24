import React from 'react'
import "./feature.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
//import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CheckCircleOutline from '@mui/icons-material/CheckCircleOutline';
const Featured = () => {
  return (
    <div className="featured">
    <div className="top">
      <h1 className="title">Request for Proposals</h1>
      <MoreVertIcon fontSize="small" />
    </div>
    <div className="bottom">
      <div className="featuredChart">
        <CircularProgressbar value={70} text={"70%"} strokeWidth={5} 
        />
      </div>
      <p className="title">Total RFPs received</p>
      <p className="amount">25</p>
      <p className="desc">
        This is the current status of the RFP submissions. More proposals may be pending processing.
      </p>
      <div className="summary">
        <div className="item">
          <div className="itemTitle">Deadline Approaching</div>
          <div className="itemResult negative">
            <KeyboardArrowDownIcon fontSize="small" />
            <div className="resultAmount">3</div>
          </div>
        </div>
        <div className="item">
          <div className="itemTitle">Shortlisted</div>
          <div className="itemResult positive">
            <CheckCircleOutline fontSize="small" />
            <div className="resultAmount">8</div>
          </div>
        </div>
        <div className="item">
          <div className="itemTitle">Under Review</div>
          <div className="itemResult positive">
            <KeyboardArrowUpOutlinedIcon fontSize="small" />
            <div className="resultAmount">14</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Featured

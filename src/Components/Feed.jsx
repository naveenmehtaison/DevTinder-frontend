import axios from "axios";
import React, { useEffect, useState } from "react";
import { Base_Url } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addFeed } from "../Redux/feedSlice";
import UserCard from "./UserCard";
import { useSelector } from "react-redux";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Feed = () => {
  const dispatch = useDispatch();
  const [FeedData, setFeedData] = useState(null);
  const ReduxData = useSelector((state) => state.feed.feeddata);
  const [current_idx, set_current_idx] = useState(0);

  const getFeedData = async () => {
    try {
      const feeddata = await axios.get(`${Base_Url}` + "/user/feed", {
        withCredentials: true,
      });
      setFeedData(feeddata?.data);
      console.log(feeddata?.data);
      dispatch(addFeed(feeddata?.data));
    } catch (err) {
      console.log(err);
    }
  };
  const handleLeftClick = async () => {
    set_current_idx((prevIndex) =>
      prevIndex === 0 ? ReduxData.length - 1 : prevIndex - 1
    );
  };

  // Function to handle the right arrow click
  const handleRightClick = async () => {
    set_current_idx((prevIndex) =>
      prevIndex === ReduxData.length - 1 ? 0 : prevIndex + 1
    );
  };
  useEffect(() => {
    getFeedData();
  }, []);
  return (
    <div className="flex justify-center items-center">
      <FaArrowCircleLeft onClick={handleLeftClick} className=" size-12 " />
      {ReduxData && (
        <UserCard
          props={ReduxData[current_idx]}
          old_index={current_idx}
          index={set_current_idx}
        />
      )}
      <FaArrowCircleRight
        onClick={handleRightClick}
        className=" size-12 my-16"
      />
    </div>
  );
};

export default Feed;

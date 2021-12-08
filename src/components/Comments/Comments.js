import React from "react";
import Post from "../Posts/Post";
import Comment from "./Comment";
import "./Comments.css";

const Comments = (props) => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;

  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      {comments.map((comment, idx) => {
        return <Comment comment={comment} key={idx} />;
      })}
    </div>
  );
};

export default Comments;

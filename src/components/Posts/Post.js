import React from "react";
import Comments from "../Comments/Comments";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

const Post = (props) => {
  // 🔥 Make sure the parent of Post is passing the right props!
  const { post, likePost } = props;
  const like = () => {
    return likePost(post.id);
  };
  return (
    <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      {/* Is LikeSection getting all the props it needs to work correctly? */}
      <LikeSection
        // likePost={() => likePost(post.id)}
        likePost={like}
        numberOfLikes={post.likes}
      />
      {/* Comments also wants its props! */}
      <Comments />
    </div>
  );
};

export default Post;

import React from "react";

const Post = ({ title, body }) => {
  return (
    <div>
      <p>
        <b>Title:</b>
        {title}
      </p>
      <p>
        <b>Body:</b>
        {body}
      </p>
    </div>
  );
};

export default Post;

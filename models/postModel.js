import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: { type: String, maxLength: 500 },
    img: { type: String },
    likes: { type: [mongoose.Schema.Types.ObjectId], ref: "User", default: [] },
    replies: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        text: { type: String, required: true },
        userProfilePic: { type: String, default: "" },
        username: { type: String },
      },
    ],
    createdAt: { type: Date, default: Date.now },
  }
  // {
  //   timestamp: true,
  // }
);

const Post = mongoose.model("Post", postSchema);

export default Post;

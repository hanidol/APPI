const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "users" },
  name: { type: String },
  avatar: { type: String },
  mail: { type: String },
  phone: { type: Number },
  message: { type: String },
  creator: { type: String },
  tags: [String],
  selectedFile: { type: String },
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },

  likes: [{ user: { type: Schema.Types.ObjectId, ref: "users" } }],
  comments: [
    {
      user: { type: Schema.Types.ObjectId, ref: "users" },
      //selectedFile: { type: String, required: true },
      name: { type: String },
      avatar: { type: String },
      date: { type: Date, default: Date.now },
    },
  ],
  date: { type: Date, default: Date.now },
});

module.exports = Post = mongoose.model("post", PostSchema);

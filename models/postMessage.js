const  mongoose= require ("mongoose");

//create mongoose schema

const postSchema = mongoose.Schema({
  name: String,
  mail: String,
  phone: Number,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

//use like a model
//var PostMessage = mongoose.model("PostMessage", postSchema);
const PostMessage = mongoose.model("PostMessage", postSchema);

module.export = PostMessage;

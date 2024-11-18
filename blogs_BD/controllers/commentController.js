const Post = require("../models/postModel");
const Comment = require("../models/comModel");

exports.createComment = async (req, res) => {
  try {
    const { post, user, body } = req.body;
    const comment = new Comment({
      post,
      user,
      body,
    });

    const savedComment = await comment.save();

    //to update the comment in post
    const updatePost = await Post.findByIdAndUpdate(
      post,
      { $push: { comments: savedComment._id } },
      { new: true }
    )
      .populate("comments") //populate the comments array with comment documents
      .exec();

    res.json({ post: updatePost,
    });
  } catch (err) {
    return res.status(500).json({
      error: "Error While Creating comment",
    });
  }
};

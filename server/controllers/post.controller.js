import Post from '../models/postAdmin.model.js'

export const createPost  = async (req, res) => {

    try {

        const newPost = new Post(req.body);
        await newPost.save();
        res.status(201).json(newPost);

    } catch (error) {
        res.status(500).json({
            err: error.message
        })
    }
}

export const addReaction  = async (req, res) => {

    try {
        const { postId } = req.params;
        const { user, type } = req.body;

        const post = await Post.findByIdAndUpdate(
            postId,
            {
                $push: {
                    reactions: {
                        user,
                        type
                    }
                },
                $set: {
                    updatedAt: new Date()
                },
            },
            {
                new: true
            }
        )

        res.status(200).json(post)

    } catch (error) {
        res.status(500).json({
            err: error.message

        });
    }

}

export const addComment  = async (req, res) => {

    try {
        const { postId } = req.params;
        const { user, content, parentComment } = req.body;

        const post = await Post.findByIdAndUpdate(
            postId, {
            $push: {
                comments: {
                    user,
                    content,
                    parentComment
                },
                $set: {
                    updatedAt: new Date()
                }
            }
        },
            {
                new: true
            }
        );

        res.status(200).json(post)


    } catch (error) {

        res.status(500).json({
            err: error.message
        })

    }
}

export const getPostWithDetails  = async (req, res) => {
    try {
      const post = await Post.findById(req.params.postId)
        .populate("user", "name username profilePicture")
        .populate("tags", "name username")
        .populate("reactions.user", "name username")
        .populate("comments.user", "name username");
  
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
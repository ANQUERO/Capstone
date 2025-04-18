import mongoose, { Schema } from "mongoose";

const postSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'Admin',
    required: true,
  },
  content: {
    type: String,
    default: ''
  },
  media: [{
    url: String,
    type: {
      type: String,
      enum: ['image', 'video'],
      required: true
    }
  }],
  privacy: {
    type: String,
    enum: ['public', 'private'],
    default: 'public'
  },

  tags: [{
    type: Schema.Types.ObjectId,
    ref: 'Admin'
  }],

  reactions: [{
    user: {
      type: Schema.Types.ObjectId,
      ref: 'Admin',
      required: true
    },
    type: {
      type: String,
      enum: ['like', 'heart', 'wow'],
      required: true
    },
    reactedAt: {
      type: Date,
      default: Date.now
    }
  }],

  comments: [{
    user: {
      type: Schema.Types.ObjectId,
      ref: 'Admin',
      required: true
    },
    content: {
      type: String,
      required: true
    },
    parentComment: {
      type: Schema.Types.ObjectId,
      ref: 'Post.comments'
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],

  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }

});

export default mongoose.model('Post', postSchema);

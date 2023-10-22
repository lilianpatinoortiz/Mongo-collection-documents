const { Schema, model } = require("mongoose");

const thougtsSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: () => Date.now(), // Set default value to the current timestamp
      get: (date) => date.toLocaleString(), // Use a getter method to format the timestamp on query
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [
      {
        type: Schema.Types.ObjectId,
        ref: "Reaction",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(), // Set default value to the current timestamp
    get: (date) => date.toLocaleString(), // Use a getter method to format the timestamp on query
  },
});

// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
thougtsSchema.virtual("reactionCount").get(function () {
  return `${this.first} ${this.last}`;
});

// Initialize our User model
const User = model("thougts", thougtsSchema);

module.exports = User;

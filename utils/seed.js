const connection = require("../config/connection");
const { Thought, User } = require("../models");
const {
  getRandomUsername,
  getRandomEmail,
  getRandomThoughts,
} = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  // Delete the collections if they exist
  let usersCheck = await connection.db
    .listCollections({ name: "users" })
    .toArray();
  if (usersCheck.length) {
    await connection.dropCollection("users");
  }

  let toughtsCheck = await connection.db
    .listCollections({ name: "thoughts" })
    .toArray();
  if (toughtsCheck.length) {
    await connection.dropCollection("thoughts");
  }

  // users
  const users = [];
  for (let i = 0; i < 20; i++) {
    const username = getRandomUsername();
    const email = getRandomEmail();

    users.push({
      username,
      email,
    });
  }

  await User.collection.insertMany(users);

  // thoughts
  const thoughts = [];
  for (let i = 0; i < 20; i++) {
    const thought = getRandomThoughts(1);
    const username = users[Math.floor(Math.random() * users.length)].username;

    thoughts.push({
      thought,
      username,
    });
  }

  await Thought.collection.insertMany(thoughts);

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info("Seeding users complete! 🌱");
  console.table(thoughts);
  console.info("Seeding thoughts complete! 🌱");
  process.exit(0);
});

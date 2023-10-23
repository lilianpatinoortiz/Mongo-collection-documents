# Mongo-collection-documents

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

### ~ NoSQL Challenge: Social Network API 📝

## Description

Motivation:

- We learned how to use a non sql database, like mongoDB.

Why this project was created:

- This challenge was created to understand better hhow to interact with MongoDB and mongoose!

- Details


USER STORY

```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

ACCEPTANCE CRITERIA

```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

What we learned / used:

DATABASE

- `dotenv`
- `Connection`
- `MongoDB`
- `mongoose`

MODELS

- `mongoose`
- `NodeJS`

ROUTES

- `Express`
- `Express Routes`
- `Sequalize`
  - `findAll`
  - `findOne`
  - `Create`
  - `Update`
  - `Destroy`


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contributions](#contributing)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)

## Installation

To run the project in your local machine:

1. Open visual studio in your computer or laptop
2. Clone the git project: https://github.com/lilianpatinoortiz/Mongo-collection-documents
3. Pull the latest from the 'main' branch
4. Open a new terminal and type `npm install` to install the dependencies
5. Run the following commands in this order:
6. `npm run seed`
7. Locate the server file and locate yourself there
8. Open a new terminal and type `npm run start`

## Usage

Please use insomnia to test the apis!
Here is the link to the recoording video: https://drive.google.com/file/d/10S_0lBoknqP6KDh55_I4BPE_CwlMyb4h/view?usp=share_link

## Testing

This challenge does not contain specific test files, but below you can find a gif with the flow of the challenge functioning correctly.

![test](public/assets/img/git.gif)

## Contributing

If you want to contribute on this project please contact me directly via email lilly.0608@gmail.com. Happy coding!

## Credits

The main resources used:

- Module 18 information provided in canva
- Screencastify for video recording
- Mongoose: https://mongoosejs.com/docs/

## License

Please refer to the license badge, on top of this file.

## Questions

Any question, please feel free to contact me directly via email lilly.0608@gmail.com or via https://github.com/lilianpatinoortiz

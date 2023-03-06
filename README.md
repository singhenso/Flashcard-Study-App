# Flashcard App
This is a practice project to build a flashcard app designed to help users memorize specific programming knowledge concepts. The app is meant to act as a tool to assist users in retaining and recalling important information over time.

---

## About
As the developer of this app, I will be using it to apply knowledge in my long-term memory through repetition. Flashcards have been proven to be an effective learning tool for memorizing and retaining information, especially when used consistently over time.

This project aims to create a web app that displays data from a Google Sheets document. We will use the Google Sheets API to retrieve the data in JSON format, which we will then display on the front end of the app using BEM-style HTML and CSS.

---

## Benefits of a Flashcard App
A flashcard app can provide several benefits, including:

- **Increased retention**: Flashcards can help users retain information by repeating concepts until they become familiar and automatic.
- **Active recall**: Flashcards require active recall, which has been shown to improve long-term memory retention.
- **Efficient studying**: Flashcards are a convenient and efficient way to review and memorize information, as they can be used anytime, anywhere.
- **Personalized learning**: Flashcard apps can be customized to suit the user's specific learning needs, allowing them to focus on the concepts that they need to work on the most.

---
## Technology Stack

- **HTML**: We will use BEM (Block Element Modifier) methodology to structure the HTML code.
- **CSS**: We will write the CSS code using LESS, a preprocessor that extends the functionality of CSS.
- **Gulp**: We will use Gulp, a task runner, to automate tasks such as preprocessing the CSS code for deployment.
- **Google Sheets API**: We will use the Google Sheets API to retrieve the data in JSON format.

## Usage
To use this flashcard app, simply run the program and begin reviewing the flashcards. Each card will display a programming concept or term on the front, and the corresponding definition or explanation on the back. Use the app regularly to improve your memory retention and recall of important programming concepts.

---

## Installation

### First Install the NPM Packages

Open your terminal or command prompt.
Navigate to the root directory of your project.
Run the following command to install all of the required packages as development dependencies in your project:

```
npm install --save-dev gulp gulp-less gulp-sourcemaps gulp-autoprefixer gulp-clean-css gulp-rename gulp-uglify
```

Wait for the installation to complete. You should see a progress indicator in your terminal as each package is installed.
Once the installation is complete, you can require these packages in your Gulpfile using require() statements, like this:
```
const gulp = require('gulp');
const less = require('gulp-less');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
```
That's it! You can now use these packages in your Gulpfile to automate your build process.

### Open the index.html

Open the index.html to view the web app.

## JavaScript file notes:
In summary, this code fetches data from a Google Sheet in CSV format, parses the CSV data into an array of objects representing flashcards, and then dynamically creates HTML elements for each flashcard using JavaScript. The parseCSV() function is used to convert the CSV data into an array of objects, and the fetch() API is used to retrieve the data from the Google Sheet. Finally, event listeners are added to each flashcard element to allow them to be flipped over when clicked.

In this updated code, we've added a new shuffleArray function that randomly shuffles the items in the flashcards array.

We then call this function to create a new shuffledFlashcards array, which we use in the forEach loop to create the HTML elements.

With this change, the flashcards will be displayed in a random order each time the page is loaded.

## Contributing
Contributions to this project are welcome. If you encounter any issues or have suggestions for improvements, please submit a pull request or open an issue on the project's GitHub page.
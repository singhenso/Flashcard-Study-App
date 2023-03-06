// Retrieve data from Google Sheet
//  This section fetches data from a Google Sheet using the fetch API. It sends an HTTP request to the URL specified in the argument, which is a public Google Sheet in CSV format. The response is converted to text using the response.text() method. Then, the data is passed to the next "then" method as an argument.
fetch(
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQlBwUvFAaHZIF_qkWGa-1chrXhLWOgH4W1wfk6obyT-U6e4p42J-LQDLuImQ8JT3OT35qqDVNPWOEW/pub?output=csv"
)
  .then((response) => response.text())
  .then((data) => {
    // After the data is converted to text, it's parsed into an array of objects using the parseCSV() function.
    const flashcards = parseCSV(data);
    // The resulting array is shuffled randomly using the shuffleArray() function.
    const shuffledFlashcards = shuffleArray(flashcards); // Shuffle the flashcards
    // The HTML container for the flashcards is retrieved and stored in the "container" variable.
    const container = document.getElementById("flashcards__container");
    // Dynamically create HTML elements for each flashcard
    // For each flashcard in the shuffledFlashcards array, an HTML element is dynamically created and appended to the container.
    shuffledFlashcards.forEach((flashcard) => {
      const card = document.createElement("div");
      card.classList.add("flashcards__card");
      card.innerHTML = `
        <div class="flashcards__card--question">${flashcard.question}</div>
        <div class="flashcards__card--answer">${
          flashcard.answer !== undefined ? flashcard.answer : ""
        }</div>
      `;
      // A click event listener is added to each card element to toggle its class between "flipped" and not flipped.
      card.addEventListener("click", () => {
        card.classList.toggle("flipped");
      });
      // The card element is then appended to the container element.
      container.appendChild(card);
    });
    /*
    The regular expression /(".*?"|[^",]+)(?=\s*,|\s*$)/g matches either a sequence of characters enclosed in double quotes, or a sequence of characters that do not contain commas, followed by either a comma or the end of the line. The g flag at the end of the expression makes it global, so it will match all occurrences within the string.
    With this updated function, any commas within double quotes will be preserved, and not treated as delimiters.
    */
    function parseCSV(data) {
      const lines = data.split("\n");
      const headers = lines[0].split(",");
      return lines.slice(1).map((line) => {
        const values = line.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g);
        const obj = {};

        headers.forEach((header, index) => {
          obj[header.trim()] = values[index].trim();
        });

        return obj;
      });
    }
  });

// This function takes the CSV data as an argument and parses it into an array of objects. It's used in the fetch block to parse the CSV data.
function parseCSV(data) {
  const lines = data.split("\n");
  const headers = lines[0].split(",");
  return lines.slice(1).map((line) => {
    const values = line.split(",");
    const obj = {};
    headers.forEach((header, index) => {
      obj[header.trim()] = values[index].trim();
    });
    return obj;
  });
}

// This function takes an array as an argument and shuffles it randomly using the Fisher-Yates shuffle algorithm.
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

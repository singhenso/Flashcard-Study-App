// Retrieve data from Google Sheet
fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vQlBwUvFAaHZIF_qkWGa-1chrXhLWOgH4W1wfk6obyT-U6e4p42J-LQDLuImQ8JT3OT35qqDVNPWOEW/pub?output=csv")
  .then(response => response.text())
  .then(data => {
    const flashcards = parseCSV(data);
    const shuffledFlashcards = shuffleArray(flashcards); // Shuffle the flashcards
    const container = document.getElementById("flashcards__container");
    // Dynamically create HTML elements for each flashcard
    shuffledFlashcards.forEach(flashcard => {
      const card = document.createElement("div");
      card.classList.add("flashcards__card");
      card.innerHTML = `
        <div class="flashcards__card--question">${flashcard.question}</div>
        <div class="flashcards__card--answer">${flashcard.answer !== undefined ? flashcard.answer : ''}</div>
      `;
      card.addEventListener("click", () => {
        card.classList.toggle("flipped");
      });
      container.appendChild(card);
    });
  });

// Parse CSV data into an array of objects
function parseCSV(data) {
  const lines = data.split("\n");
  const headers = lines[0].split(",");
  return lines.slice(1).map(line => {
    const values = line.split(",");
    const obj = {};
    headers.forEach((header, index) => {
      obj[header.trim()] = values[index].trim();
    });
    return obj;
  });
}

// Shuffle the items in an array randomly
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

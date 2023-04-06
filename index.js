import { Note } from "./Note.js";
import { DefaultNote } from "./Note.js";

const notesContainer = document.querySelector(".notes__container");
const addNoteButton = document.querySelector(".notes__add-button");

function addNewCard(container) {
  const NoteElement = new Note("#NoteTemplate");
  const newNote = NoteElement.generateNote();
  container.prepend(newNote);
}

addNoteButton.addEventListener("click", () => {
  addNewCard(notesContainer);
});

// addNewCard(notesContainer);

const arr = [
  {
    title: "Oh Shit",
    text: "here we go again",
    tag: "Shit Idea",
  },
  { title: "Start Up", text: "kill all people", tag: "Plan" },
  { title: "Must-buy", text: "nothing", tag: "Shopping list" },
];

function addDefaultCard(container, data) {
  const NoteElement = new DefaultNote(data, "#NoteTemplate");
  const newNote = NoteElement.generateDefaultNote();
  container.append(newNote);
}

arr.forEach((item) => addDefaultCard(notesContainer, item));

// addDefaultCard(notesContainer, data);

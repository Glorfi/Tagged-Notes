// const textArea = document.querySelector(".note__text")
// console.log(textArea.value);

// const NoteTitle = document.querySelector(".note__title");
// console.log(NoteTitle);
// NoteTitle.disabled = false;

class Note {
  constructor(template) {
    this._template = template;
  }
  _getNoteTemplate() {
    const NoteElement = document
      .querySelector(this._template)
      .content.querySelector(".note")
      .cloneNode(true);
    return NoteElement;
  }
  generateNote() {
    this._element = this._getNoteTemplate();
    this._noteTitle = this._element.querySelector(".note__title");
    this._noteText = this._element.querySelector(".note__text");
    this._editButton = this._element.querySelector(".note__button_type_edit");
    this._saveButton = this._element.querySelector(".note__button_type_submit");
    this._resetButton = this._element.querySelector(".note__button_type_reset");
    this._deleteButton = this._element.querySelector(
      ".note__button_type_delete"
    );
    this._setEventListeners();
    return this._element;
  }
  _setEventListeners() {
    this._editButton.addEventListener("click", () => {
      console.log("Клик блять!");
      this._enableTextFields();
      this._disableButton(this._editButton);
      this._enableButton(this._saveButton);
      this._enableButton(this._resetButton);
    });
    this._saveButton.addEventListener("click", () => {
      this._disableTextFields();
      this._disableButton(this._resetButton);
      this._disableButton(this._saveButton);
      this._enableButton(this._editButton);
    });
    this._resetButton.addEventListener("click", () => {
      this._noteTitle.value = "";
      this._noteText.value = "";
    });
  }
  _enableTextFields() {
    this._noteTitle.disabled = false;
    this._noteText.disabled = false;
  }
  _disableTextFields() {
    this._noteTitle.disabled = true;
    this._noteText.disabled = true;
  }
  _enableButton(button) {
    button.classList.remove("note__button_disabled");
  }
  _disableButton(button) {
    button.classList.add("note__button_disabled");
  }
}

function addNewCard(note, container) {
  container.prepend(note);
}

const notesContainer = document.querySelector(".notes__container");

console.log(notesContainer);

const note = new Note("#NoteTemplate");
const newNote = note.generateNote();
addNewCard(newNote, notesContainer);
const notesOverlay = notesContainer.querySelectorAll(".note");
console.log(notesOverlay);
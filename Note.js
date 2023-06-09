export class Note {
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
    this._addTagButton = this._element.querySelector(
      ".note__button_type_add-tag"
    );
    this._tagInput = this._element.querySelector(".note__tag-input");
    this._saveTagButton = this._element.querySelector(
      ".note__button_type_save-tag"
    );
    this._resetTagButton = this._element.querySelector(
      ".note__button_type_reset-tag"
    );
    this._tagButton = this._element.querySelector(".note__button_type_tag");
    this._noteButtonList = this._element.querySelectorAll(".note__button");
    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._preventDefaultButton();
    this._editButton.addEventListener("click", () => {
      console.log("Клик блять!");
      this._enableTextFields();
      this._noteTitle.focus();
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
      this._resetTextFields();
    });
    this._addTagButton.addEventListener("click", () => {
      this._disableButton(this._addTagButton);
      this._disableButton(this._deleteButton);
      this._enableButton(this._saveTagButton);
      this._enableButton(this._resetTagButton);
      this._enableButton(this._tagInput);
      this._tagInput.focus();
    });
    this._resetTagButton.addEventListener("click", () => {
      this._enableButton(this._addTagButton);
      this._enableButton(this._deleteButton);
      this._disableButton(this._saveTagButton);
      this._disableButton(this._resetTagButton);
      this._disableButton(this._tagInput);
      this._tagInput.value = "";
    });
    this._tagInput.addEventListener("input", () => {
      this._handleSaveTagButton();
    });
    this._saveTagButton.addEventListener("click", () => {
      this._disableButton(this._addTagButton);
      this._enableButton(this._tagButton);
      this._enableButton(this._deleteButton);
      this._tagButton.textContent = this._tagInput.value;
      this._disableButton(this._saveTagButton);
      this._disableButton(this._resetTagButton);
      this._disableButton(this._tagInput);
    });
    this._deleteButton.addEventListener("click", () => {
      this._element.remove();
    });
  }
  _preventDefaultButton() {
    this._noteButtonList.forEach((item) => {
      item.addEventListener("click", (evt) => {
        evt.preventDefault();
      });
    });
  }
  _handleSaveTagButton() {
    if (this._tagInput.value === "") {
      this._saveTagButton.disabled = true;
    } else {
      this._saveTagButton.disabled = false;
    }
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
  _resetTextFields() {
    this._noteTitle.value = "";
    this._noteText.value = "";
  }
}

export class DefaultNote extends Note {
  constructor(data, template) {
    super(template);
    this._title = data.title;
    this._text = data.text;
    this._tag = data.tag;
  }
  generateDefaultNote() {
    super.generateNote();
    this._noteTitle.value = this._title;
    this._noteText.value = this._text;
    this._tagButton.textContent = this._tag;
    super._disableButton(this._addTagButton);
    super._enableButton(this._tagButton);
    return this._element;
  }
}

class AddScoreFormView {
  #addScoreForm = document.getElementById('add-score-form');

  #nameInput = document.getElementById('name-input');

  #scoreInput = document.getElementById('score-input');

  #addScoreMessage = document.getElementById('add-score-message');

  #errorMessage = document.getElementById('error-message');

  clearInputFields() {
    this.#nameInput.value = '';
    this.#scoreInput.value = '';
  }

  focusOnNameInput() {
    this.#nameInput.focus();
  }

  renderAddScoreMessage() {
    this.#addScoreMessage.classList.remove('opacity-0');
    setTimeout(() => {
      this.#addScoreMessage.classList.add('opacity-0');
    }, 2000);
  }

  renderErrorMessage() {
    this.#errorMessage.classList.remove('opacity-0');
    setTimeout(() => {
      this.#errorMessage.classList.add('opacity-0');
    }, 2000);
  }
}

const addScoreFormView = new AddScoreFormView();

export default addScoreFormView;

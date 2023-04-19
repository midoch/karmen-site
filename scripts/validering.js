document.querySelector("#form-tilmelding").addEventListener("submit", validate);
const messageField = document.querySelector("#besked");

function validate(evt) {
    // en tom variabel til fejlmeddelelser...
  let error;

  
  // test om email er udfyldt
  if (this.email.value == "") {
      evt.preventDefault();
      error = "Udfyld venligst din e-mail adresse";
      messageField.textContent = error;
      this.email.focus();
      return false;
  }
  
    // test om email er indtastet korrekt
    const atpos = this.email.value.indexOf("@"); // find placering af snabel-a (@)
    const dotpos = this.email.value.lastIndexOf("."); // find placering af sidste punktum (.)
    if (atpos < 1 || dotpos < atpos || dotpos + 2 >= this.email.value.length) {
        evt.preventDefault();
        error = "Din e-mail adresse skal være gyldig (fx navn@mail.dk";
        messageField.textContent = error;
        this.email.focus();
        return false;
    }
  
}
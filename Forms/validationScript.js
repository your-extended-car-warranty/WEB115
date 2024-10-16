    // JavaScript code for form validation
let myForm = document.getElementById("myForm");
document.querySelector("button").addEventListener("click", formValidation);

function formValidation(evt) {
	// Prevent form from submitting
  evt.preventDefault();
      // Retrieve the input field value
      var inputData = myForm.inputField;
      // Regular expression pattern for alphanumeric input
      var isValid = /^[a-z0-9]+$/i.test(inputData.value);
      // Check if the input value matches the pattern
      if (isValid) {
        // Valid input: display confirmation and submit the form
        window.alert("Form has been submitted");
        inputData.setCustomValidity("");
        myForm.submit();
      } else {
        // Invalid input: display error message
        inputData.setCustomValidity("Input must be alphanumeric");
      }

      inputData.reportValidity();
}
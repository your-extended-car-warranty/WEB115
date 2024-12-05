// Buttons to clear page, print page, download page, or form a plan for the week
clearButton = document.getElementById("clearButt");
printButton = document.getElementById("printButt");
downloadButton = document.getElementById("downloadButt");
formButton = document.getElementById("formButt");

planner = document.getElementById("planner");

myForm = document.getElementById("myForm");

clearButton.addEventListener("click", function() {
    myForm.reset()
});

printButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    window.print()
});

downloadButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    myText = ("<html>\n<head>\n<title>Meal Plan</title>\n</head>\n<body style=\"background-color:#e6ffff;\">\n");
    myText += ("Your Meal Plan is Ready " + myForm.name.value + "<br>Email: " + myForm.email.value + "<br>Goal: " + myForm.goal.value + "<br><br>\n");
    myText += ("--Monday--<br>\nBreakfast: " + myForm.mbreakfast.value + "<br>1st Snack: " + myForm.msnack1.value + "<br>Lunch: " + myForm.mlunch.value + "<br>2nd Snack: " + myForm.msnack2.value + "<br>Dinner: " + myForm.mdinner.value + "<br><br>\n");
    myText += ("--Tuesday--<br>\nBreakfast: " + myForm.tbreakfast.value + "<br>1st Snack: " + myForm.tsnack1.value + "<br>Lunch: " + myForm.tlunch.value + "<br>2nd Snack: " + myForm.tsnack2.value + "<br>Dinner: " + myForm.tdinner.value + "<br><br>\n");
    myText += ("--Wednesday--<br>\nBreakfast: " + myForm.wbreakfast.value + "<br>1st Snack: " + myForm.wsnack1.value + "<br>Lunch: " + myForm.wlunch.value + "<br>2nd Snack: " + myForm.wsnack2.value + "<br>Dinner: " + myForm.wdinner.value + "<br><br>\n");
    myText += ("--Thursday--<br>\nBreakfast: " + myForm.thbreakfast.value + "<br>1st Snack: " + myForm.thsnack1.value + "<br>Lunch: " + myForm.thlunch.value + "<br>2nd Snack: " + myForm.thsnack2.value + "<br>Dinner: " + myForm.thdinner.value + "<br><br>\n");
    myText += ("--Friday--<br>\nBreakfast: " + myForm.fbreakfast.value + "<br>1st Snack: " + myForm.fsnack1.value + "<br>Lunch: " + myForm.flunch.value + "<br>2nd Snack: " + myForm.fsnack2.value + "<br>Dinner: " + myForm.fdinner.value + "<br><br>\n");
    myText += ("--Saturday--<br>\nBreakfast: " + myForm.sabreakfast.value + "<br>1st Snack: " + myForm.sasnack1.value + "<br>Lunch: " + myForm.salunch.value + "<br>2nd Snack: " + myForm.sasnack2.value + "<br>Dinner: " + myForm.sadinner.value + "<br><br>\n");
    myText += ("--Sunday--<br>\nBreakfast: " + myForm.sbreakfast.value + "<br>1st Snack: " + myForm.ssnack1.value + "<br>Lunch: " + myForm.slunch.value + "<br>2nd Snack: " + myForm.ssnack2.value + "<br>Dinner: " + myForm.sdinner.value + "<br><br>\n");
    myText += ("</body>\n</html>");
    // Create a blob with the content you want to download
    var blob = new Blob([myText], { type: 'text/plain' });

    // Create a link element
    var link = document.createElement('a');

    // Set the download attribute with a filename
    link.download = 'meal_plan.htm';

    // Create a URL for the blob and set it as the href attribute
    link.href = window.URL.createObjectURL(blob);

    // Append the link to the body
    document.body.appendChild(link);

    // Programmatically click the link to trigger the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
});

formButton.addEventListener("click", formValidation);

function formValidation(evt) {
	// Prevent form from submitting
  evt.preventDefault();
      // Retrieve the input field value
      var inputData = myForm.email;
      // Regular expression pattern for alphanumeric input
      var isValid = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(inputData.value);
      // Check if the input value matches the pattern
      if (isValid) {
        // Valid input
        inputData.setCustomValidity("");

        nameInput = myForm.name.value;
        goalInput = myForm.goal.value;

        myText = ("<html>\n<head>\n<title>Meal Plan</title>\n</head>\n<body style=\"background-color:#e6ffff;\">\n");
        myText += ("Your Meal Plan is Ready " + nameInput + "<br>Email: " + inputData.value + "<br>Goal: " + goalInput + "<br><br>\n");
        myText += ("--Monday--<br>\nBreakfast: " + myForm.mbreakfast.value + "<br>1st Snack: " + myForm.msnack1.value + "<br>Lunch: " + myForm.mlunch.value + "<br>2nd Snack: " + myForm.msnack2.value + "<br>Dinner: " + myForm.mdinner.value + "<br><br>\n");
        myText += ("--Tuesday--<br>\nBreakfast: " + myForm.tbreakfast.value + "<br>1st Snack: " + myForm.tsnack1.value + "<br>Lunch: " + myForm.tlunch.value + "<br>2nd Snack: " + myForm.tsnack2.value + "<br>Dinner: " + myForm.tdinner.value + "<br><br>\n");
        myText += ("--Wednesday--<br>\nBreakfast: " + myForm.wbreakfast.value + "<br>1st Snack: " + myForm.wsnack1.value + "<br>Lunch: " + myForm.wlunch.value + "<br>2nd Snack: " + myForm.wsnack2.value + "<br>Dinner: " + myForm.wdinner.value + "<br><br>\n");
        myText += ("--Thursday--<br>\nBreakfast: " + myForm.thbreakfast.value + "<br>1st Snack: " + myForm.thsnack1.value + "<br>Lunch: " + myForm.thlunch.value + "<br>2nd Snack: " + myForm.thsnack2.value + "<br>Dinner: " + myForm.thdinner.value + "<br><br>\n");
        myText += ("--Friday--<br>\nBreakfast: " + myForm.fbreakfast.value + "<br>1st Snack: " + myForm.fsnack1.value + "<br>Lunch: " + myForm.flunch.value + "<br>2nd Snack: " + myForm.fsnack2.value + "<br>Dinner: " + myForm.fdinner.value + "<br><br>\n");
        myText += ("--Saturday--<br>\nBreakfast: " + myForm.sabreakfast.value + "<br>1st Snack: " + myForm.sasnack1.value + "<br>Lunch: " + myForm.salunch.value + "<br>2nd Snack: " + myForm.sasnack2.value + "<br>Dinner: " + myForm.sadinner.value + "<br><br>\n");
        myText += ("--Sunday--<br>\nBreakfast: " + myForm.sbreakfast.value + "<br>1st Snack: " + myForm.ssnack1.value + "<br>Lunch: " + myForm.slunch.value + "<br>2nd Snack: " + myForm.ssnack2.value + "<br>Dinner: " + myForm.sdinner.value + "<br><br>\n");
        myText += ("</body>\n</html>");
    
        flyWindow = window.open('about:blank','myPop','width=800,height=800,left=200,top=200');
        flyWindow.document.write(myText);
        myForm.submit();
      } else {
        // Invalid input: display error message
        inputData.setCustomValidity("Please enter your email");
      }

      inputData.reportValidity();
}
//form validation
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("Name").value.trim();
    let email = document.getElementById("Email").value.trim();

    let valid = true;

    //for name
    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        valid = false;
      }

      // Email validation
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //This pattern for email validation, i got it from Chatgpt
      if (email === "") {
        document.getElementById("emailError").textContent = "Email is required.";
        valid = false;
      } else if (!email.match(emailPattern)) {
        document.getElementById("emailError").textContent = "Enter a valid email.";
        valid = false;
      }


    if (valid) {
        alert("Form submitted successfully!");
      }

});
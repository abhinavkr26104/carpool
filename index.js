
// // JavaScript to handle form submission
// document.getElementById("passengerForm").addEventListener("submit", function (event) {
//   event.preventDefault(); // Prevent the form from submitting normally

//   // Get input values
//   const passengerName = document.getElementById("passengerName").value;
//   const mobileNo = document.getElementById("mobileNo").value;
//   const email = document.getElementById("email").value;
//   const gender = document.getElementById("gender").value;

//   // Send passenger data to the server
//   fetch('http://localhost:3000/api/passengers', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ name: passengerName, mobile: mobileNo, email: email, gender: gender }),
//   })
//   .then(response => {
//     if (response.ok) {
//       alert("Passenger registered successfully!");
//       document.getElementById("passengerForm").reset(); // Clear the form fields
//     } else {
//       alert("Error registering passenger.");
//     }
//   })
//   .catch(error => console.error('Error:', error));
// });

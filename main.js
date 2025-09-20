// script.js
function getObjectInfo() {
//   alert("Hello from the external JavaScript file!");
  let sessionId = document.getElementById("inputField").value;
  let orgUrl = document.getElementById("inputField").value;
  console.log("Session ID:", sessionId);
  console.log("Org URL:", orgUrl);

  Toastify({

text: "This is a toast",

duration: 3000

}).showToast();
}



function exportQuery(){

}

function testApiCall(){
//       Toastify({

// text: "This is a test api call",

// duration: 3000

// }).showToast();



const apiUrl = "https://bajaj234--uat.sandbox.my.salesforce.com/services/data/v48.0/query?q=SELECT+Id+FROM+Account+LIMIT+10";

// Replace this with the bearer token you have obtained (e.g., after a login)

const bearerToken = document.getElementById("sessionId").value; // Example token, replace with actual token
console.log("Bearer Token:", bearerToken);

// Define the headers for the request
const requestHeaders = new Headers();
requestHeaders.append('Authorization', `Bearer ${bearerToken}`);
requestHeaders.append('Content-Type', 'application/json'); // Example for a JSON body

// The configuration for the fetch request
const requestOptions = {
    method: 'GET', // Can be 'POST', 'PUT', 'DELETE', etc.
    headers: requestHeaders,
};

// Make the fetch call
fetch(apiUrl, requestOptions)
    .then(response => {
        // Check if the response was successful
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Or response.text() if not JSON
    })
    .then(data => {
        console.log('Success:', data);
        // Process the data received from the API
    })
    .catch(error => {
        console.error('Error during API call:', error);
        // Handle any errors that occurred during the fetch
    });



genericToast();
}





function genericToast() {
    Toastify({
    text: "Success: Your data has been saved!",
    duration: 3000,
    close: true,
    gravity: "top",
    position: "right",
    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
}).showToast();


// Toastify({
//     text: "Success: Your data has been saved!",
//     duration: 3000,
//     close: true,
//     gravity: "top",
//     position: "right",
//     backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
// }).showToast();


// Toastify({
//     text: "Warning: Your session will expire soon.",
//     duration: 4000,
//     close: true,
//     gravity: "top",
//     position: "right",
//     backgroundColor: "linear-gradient(to right, #f7b731, #fbd786)",
// }).showToast();


// Toastify({
//     text: "Info: New updates are available.",
//     duration: 3000,
//     close: true,
//     gravity: "top",
//     position: "right",
//     backgroundColor: "linear-gradient(to right, #2196f3, #42a5f5)",
// }).showToast();
}
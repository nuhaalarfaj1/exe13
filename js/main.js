
var stringsArray = ["Home", "Car", "Apple", "Googel", "BlackBook"];
var newStringsArray = [];
for (var i = 0; i < stringsArray.length; i++) {
    newStringsArray.push(stringsArray[i].toLowerCase());
  };
  console.log(newStringsArray);
  for (var i = 0; i < newStringsArray.length; i++) {

  console.log("First Letter is: " + newStringsArray[i].charAt(0), "Last Letter is: " + newStringsArray[i].charAt(newStringsArray[i].length - 1));};
  var name = "Nuha Alarfaj";
  var splitName = name.split("");
  for (var i = 0; i < splitName.length; i++) {
    console.log(splitName[i]);
  };
  splitName = splitName.join(" ");
console.log(splitName.replace(/o/g, "y"));

function validateEmail() {
    var userEmail = document.getElementById("userEmail");
    var regEx = /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,5}$/;
  
    console.log(regEx.test(userEmail.value));
  };
  document.getElementById("testEmail").addEventListener("click", validateEmail);

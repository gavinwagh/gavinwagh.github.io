function myFunction() {
var dots = document.getElementById("dots");
var moreText = document.getElementById("more");
var btnText = document.getElementById("myBtn");

if (dots.style.display === "none") {
dots.style.display = "inline";
btnText.innerHTML = "Read more";
moreText.style.display = "none";
} else {
dots.style.display = "none";
btnText.innerHTML = "Read less";
moreText.style.display = "inline";
}
}

var signUpbtn = document.getElementById("signUpbtn");

//signUpbtn.onclick = function showSignUpForm(){
  //// TODO:  popup show
  //showUser();
  //on submit call saveUser(formDetails)
//}

saveUser = function (formDetails){
  //set the user name and pwd into a properties file
}

function showUserOld(){
  //read username and pwd;
  var myReader = new FileReader();
  myReader.onload = function(e){
    var text = myReader.result;
  }
  console.log("userDetails: " + myReader.readAsText("userDetails.json"));
};

function showUser() {
  //read username and pwd;
    var text = '{"username" : "gavin","password" : "password"}';
    //JSON.parse(this.responseText);
    var user = JSON.parse(text);
    console.log("userDetails: " + user + "username: " + user.username);
  }

//$.getJSON("userDetails.json", function(result){
        //var text = "";//JSON.parse(userDetails);
        //$.getJSON('userDetails.json', function(data){
        //  text = data;
        //});
  //      console.log("userDetails: " + text);
  //    });

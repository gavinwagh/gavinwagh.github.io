var text;
function myFunction1() {
var dots = document.getElementById("dots1");
var moreText = document.getElementById("more1");
var btnText = document.getElementById("myBtn1");

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

var text = '{"users":[{"username" : "gavin","password" : "Password123#"}, {"username" : "atharva","password" : "Password123#"}]}';
var logindata = '{"users":{"gavin" : "Password123#", "atharva" : "Password123#"}}';
function myFunction2() {
var dots = document.getElementById("dots2");
var moreText = document.getElementById("more2");
var btnText = document.getElementById("myBtn2");

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

function saveuser(){
  //input.name, input.password){
    debugger;
    console.log("saveuser called: " + SignUpForm.username.value);
    username = SignUpForm.username.value;
    password = SignUpForm.password1.value;
    var jsonObj = JSON.parse(text);
    jsonObj.users.push({"username":username,"password":password});
    text = JSON.stringify(jsonObj);
    console.log(text);
    debugger;
}

function loginuser(){
  //input.name, input.password){
    debugger;
    console.log("loginuser called: " + signinform.username1.value);
    username = signinform.username1.value;
    password = signinform.password.value;
    var jsonObj = JSON.parse(logindata);
    if(jsonObj.users[username] == null){
      console.log("No Such User! Wanna sign up?");
    } else if(jsonObj.users[username] == password){
      console.log("Logged in");
    } else {
      console.log("Incorrect Password! Tip: " + text);
    }
    debugger;
}

function showUser() {
  //read username and pwd;
    text = '{"users":[{"username" : "gavin","password" : "Password123#"}, {"username" : "atharva","password" : "Password123#"}]}';
    //JSON.parse(this.responseText);
    var users = JSON.parse(text);
    console.log("userDetails: " + users + "username: " + users.username);
  }

  function openPage(evt, pageName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(pageName).style.display = "block";
    evt.currentTarget.className += " active";
  }





  function function3() {
    alert("Thanks a lot for subscribing!");
  }
//$.getJSON("userDetails.json", function(result){
        //var text = "";//JSON.parse(userDetails);
        //$.getJSON('userDetails.json', function(data){
        //  text = data;
        //});
  //      console.log("userDetails: " + text);
  //    });

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

var text;
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

saveUser = function (formDetails){
  //set the user name and pwd into a properties file
  //text.add
}

function showUser() {
  //read username and pwd;
    text = '{"users":[{"username" : "gavin","password" : "password"}, {"username" : "atharva","password" : "password"}]}';
    //JSON.parse(this.responseText);
    var user = JSON.parse(text);
    console.log("userDetails: " + user + "username: " + user.username);
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

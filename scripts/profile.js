//data
var myName = "Maciej Piątkowski";
var desc = "Hej tu ja";
var imgHref = "styles/profile.jpg"

//-------Name and desc-------
var myNameANDDesc = myName + "<br><span id='desc'>" + desc + "</span>"
document.getElementById("name").innerHTML = myNameANDDesc;
//--------Profile IMG--------
var imgTxt = "<img id='profile-img-main' src=" + imgHref + ">";
document.getElementById("profile-img-main-div").innerHTML = imgTxt;
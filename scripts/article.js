var fileHref = "text.txt";
var imgHref = "hp.jpg";
var Tags = ["POLSKA, WOJSKO"];
var topic = "HAMBURGERS VS PIEROGI";
//---------Topic--------------
document.getElementById("topic").innerHTML = topic;
//--------Article-Tags----------
var artTabTxt = "TAGI:";
if(Tags.length > 0)
{
    for(let i = 0; i < Tags.length-1 ; i++)
    {
        artTabTxt += " " + Tags[i] + ",";
    }
    artTabTxt += " " + Tags[Tags.length-1];
}

document.getElementById("tags").innerHTML = artTabTxt;
//--------Artice-Content-----

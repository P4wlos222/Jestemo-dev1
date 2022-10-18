//data
Polska = ["Polska",0];
Cities = ["Warszawa","Kołobrzeg"];
Tags = ["Tech","Polityka","Gospodarka"];
//--------Right-Bar----------
if(document.getElementById("bar") != null)
{
var barTxt = "";

if(Polska[1] == 1)
{  
    barTxt = "<ul><li><a href=''>POLSKA</a>";
    if(Tags.length > 0)
    {
        barTxt += "<ul>";
        for(let i = 0; i < Tags.length;i++)
        {
            barTxt += "<li><a href=''>";
            barTxt += Tags[i];
            barTxt += "</a><li>";
        }
        barTxt += "</ul>";
    }
    barTxt += "</li>";

    if(Cities.length > 0)
    {
        for(let i = 0; i < Cities.length;i++)
        {
            barTxt += "<li><a href=''>";
            barTxt += Cities[i];
            barTxt += "</a>";
            if(Tags.length > 0)
            {
                barTxt += "<ul class='bar-tag'>";
                for(let j = 0; j < Tags.length;j++)
                {
                    barTxt += "<li><a href=''>";
                    barTxt += Tags[j];
                    barTxt += "</a></li>";
                }
                barTxt += "</ul>";
            }
            barTxt += "</li>";
        }
    }
    barTxt += "</ul>";
}
else if(Cities.length > 0)
{
    barTxt = "<ul>";
    for(let i = 0; i < Cities.length;i++)
    {
        barTxt += "<li><a href=''><b>";
        barTxt += Cities[i];
        barTxt += "</b></a>";
        if(Tags.length > 0)
        {
            barTxt += "<ul class='bar-tag'>";
            for(let j = 0; j < Tags.length;j++)
            {
                barTxt += "<li><a href=''>";
                barTxt += Tags[j];
                barTxt += "</a></li>";
            }
            barTxt += "</ul>";
        }
        barTxt += "</li>";
    }
    barTxt += "</ul>"
}
else
{
    document.getElementById("bar").style.border = "0";
}
document.getElementById("bar").innerHTML = barTxt;
}

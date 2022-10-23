var postsTxt = "";

//userId,authorImgHref,authorName,postData,imgHref,postContent

var post1 = [1,"styles/profile.jpg","Wojciech Pociecha","2022.02.12",null,"Wybory na Prezydenta wygrał Jan Kowalski."];
var post2 = [1,"styles/profile.jpg","Ignacy Michalski","2022.02.12",null,"2020.06.01 na placu w centrum miasta odbędzie się święto z okazji 123 rocznicy nadania praw miejskich."];
var post3 = [1,"styles/profile.jpg","Ignacy Michalski","2022.02.10",null,"Na ulicy bitowej niedługo powstanie nowe osiedle, mieszkańcy podekscytowani. Miejsca będzie dla około 2 tyś. ludzi."];
var post4 = [1,"styles/profile.jpg","Ignacy Michalski","2022.02.9",null,"UWAGA!!! Przy stadionie miejskim ktoś kradnie rowery! Sprawe bada policja."];
var post5 = [1,"styles/profile.jpg","Ignacy Michalski","2022.02.8",null,"Nie polecam fastfoodów na starówce, BHP tam nie istnieje!!!"];
var post6 = [1,"styles/profile.jpg","Ignacy Michalski","2022.02.7",null,"Właśnie otworzyłem nowy sklep wędkarski na ulicy Spokojnej. Zapraszam!"];

//crate post
function createPost(post)
{
    let postTxt = "";
    let authorProfileLink = "LINKSTRONY" + post[0];
    postTxt += "<div class='post'><a href=''";
    postTxt += authorProfileLink;
    postTxt += "'><div class='post-author'><div class='profile-icon'><img class='profile-icon-img' src='";
    postTxt += post[1];
    postTxt += "'><div class='post-author-name'>";
    postTxt += post[2]
    postTxt += "</div></div></div></a><div class='post-data'>";
    postTxt += post[3]
    postTxt += "</div><div class='post-img'>"
    if(post1[4] != null)
    {
        postTxt += "<img src='";
        postTxt += post[4];
        postTxt += "'>"
    }
    postTxt += "</div><hr><div class='post-content'><div class='post-text'>";
    postTxt += post[5];
    postTxt += "</div></div><br><div class='post-options'><div class='share'>Udostępnij</div></div></div>";

    return postTxt;

}

postsTxt += createPost(post1);
postsTxt += createPost(post2);
postsTxt += createPost(post3);
postsTxt += createPost(post4);
postsTxt += createPost(post5);
postsTxt += createPost(post6);
console.log(postsTxt)
document.getElementById("feed").innerHTML = postsTxt;
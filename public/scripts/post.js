var post1
var postsTxt = "";

//userId,authorImgHref,authorName,postData,imgHref,postContent

post1 = [1,"styles/profile.jpg","Wojciech Pociecha","2022.02.12",null,"Wybory na Prezydenta wygrał Jan Kowalski."];
post2 = [1,"styles/profile.jpg","Ignacy Michalski","2022.02.12",null,"2020.06.01 na placu w centrum miasta odbędzie się święto z okazji 123 rocznicy nadania praw miejskich."];

//crate post
function createPost()
{
    let postTxt = "";
    let authorProfileLink = "LINKSTRONY" + post1[0];
    postTxt += "<div class='post'><a href=''";
    postTxt += authorProfileLink;
    postTxt += "'><div class='post-author'><div class='profile-icon'><img class='profile-icon-img' src='";
    postTxt += post1[1];
    postTxt += "'><div class='post-author-name'>";
    postTxt += post1[2]
    postTxt += "</div></div></div></a><div class='post-data'>";
    postTxt += post1[3]
    postTxt += "</div><div class='post-img'>"
    if(post1[4] != null)
    {
        postTxt += "<img src='";
        postTxt += post1[4];
        postTxt += "'>"
    }
    postTxt += "</div><hr><div class='post-content'><div class='post-text'>";
    postTxt += post1[5];
    postTxt += "</div></div><br><div class='post-options'><div class='share'>Udostępnij</div></div></div>";

    return postTxt;

}

postsTxt += createPost(post1);
postsTxt += createPost(post2);
document.getElementById("feed").innerHTML = postsTxt;
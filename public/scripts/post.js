var user1
var postsTxt = "";



fetch('/feedme', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
    'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
})
.then((response) => response.json())
.then((json) => {
    for (let i = 0; i < 4; i++)
    {
        fetch('/getpost?post='+json[i], {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
            'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
        })
        .then((response) => response.json())
        .then((json) => {
            fetch('/user?uuid='+json.root.author, {
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                'Content-Type': 'application/json'
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
            })
            .then((response) => response.json())
            .then((ujson) => {
                displayName = ujson.DisplayName
                var newDate = new Date()
                newDate.setTime(json.root.date);
                dateString = newDate.toUTCString();
                user1 = [1,"styles/profile.jpg",displayName,dateString,null,json.root.content];
                postsTxt += createPost(user1);
                document.getElementById("feed").innerHTML = postsTxt;
                //console.log(postsTxt);
            })
            
        })
    }
})


//userId,authorImgHref,authorName,postData,imgHref,postContent

//user1 = [1,"styles/profile.jpg","Maciej Piątkowski","2022.02.12","styles/hp.jpg","lorem ipsum sadinfffffff fffffffffff fffffffffffffffffffffff ffffffffffffffffffffffffffffff ffffffffffff fffffffffffffffffffffffffffffffffffffffffffffffffffffff fffffffffffffffffffffff ffffffffffffffffffffff ffffffffffffffffffffffffffff ffffffffffffffffffffffffff"];


//crate post
function createPost()
{
    let postTxt = "";
    let authorProfileLink = "LINKSTRONY" + user1[0];
    postTxt += "<div class='post'><a href=''";
    postTxt += authorProfileLink;
    postTxt += "'><div class='post-author'><div class='profile-icon'><img class='profile-icon-img' src='";
    postTxt += user1[1];
    postTxt += "'><div class='post-author-name'>";
    postTxt += user1[2]
    postTxt += "</div></div></div></a><div class='post-data'>";
    postTxt += user1[3]
    postTxt += "</div><div class='post-img'>"
    if(user1[4] != null)
    {
        postTxt += "<img src='";
        postTxt += user1[4];
        postTxt += "'>"
    }
    postTxt += "</div><hr><div class='post-content'><div class='post-text'>";
    postTxt += user1[5];
    postTxt += "</div></div><br><div class='post-options'><div class='share'>Udostępnij</div></div></div>";

    return postTxt;

}


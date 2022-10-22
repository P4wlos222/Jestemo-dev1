const fs = require("fs")
const crypto = require("crypto")
const xml2js = require("xml2js")


function createPost(req,callback){
    let content = req.body.postContent
    let user = req.session.uuid

    let dataobj = {author: user, content: content, location: null, likes: 0, tags: null, images: null}
    var builder = new xml2js.Builder();
    let data = builder.buildObject(dataobj);

    let filename = "post_" + crypto.randomUUID() + ".xml"
    fs.writeFile(__dirname + "/posts/" + filename,data, () => {
        console.log("success")
    })
}


module.exports = createPost
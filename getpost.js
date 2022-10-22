const fs = require('fs')
const xml2js = require('xml2js')


function getPost(id,callback){
    var parser = new xml2js.Parser();
    fs.readFile(__dirname + "/posts/post_" + id + ".xml", (error, data) =>{
        if (error) throw error
        parser.parseString(data, function (error, result) {
            if (error) throw error
            console.log(typeof result)
            callback(result)
        })
    })
    
}


module.exports = getPost
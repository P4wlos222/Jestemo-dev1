const fs = require('fs')
const xml2js = require('xml2js')


function getPost(file,callback){
    var parser = new xml2js.Parser();
    fs.readFile(__dirname + "/posts/" + file, (error, data) =>{
        if (error) throw error
        parser.parseString(data, function (error, result) {
            if (error) throw error
            callback(result)
        })
    })
    
}


module.exports = getPost
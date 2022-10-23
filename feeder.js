const fs = require("fs")

fs.mkdir(__dirname + "/posts", (err,res) =>{})

function readdirSortTime(dir, timeKey = 'mtime') {
    return (
      fs.readdirSync(dir)
      .map(name => ({
        name,
        time: fs.statSync(`${dir}/${name}`)[timeKey].getTime()
      }))
      .sort((a, b) => (a.time - b.time)) // ascending
      .map(f => f.name)
    );
}

function getFeed(callback)
{
    //let tags = ["Sprzedaż"] //req.body.tags || ["Warszawa"]
    let files = readdirSortTime(__dirname + "/posts")
    callback(files)
}

module.exports = getFeed

let ejs = require('ejs')
let fs = require('fs')
let json = JSON.parse(fs.readFileSync('calendar.json', 'utf8'))

ejs.renderFile('./index.ejs', { json: json }, { }, function(err, str){
  if (err) {
    console.log(err)
    return
  }
  fs.writeFileSync('index.html', str)
});

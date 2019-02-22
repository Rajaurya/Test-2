var express = require('express')
var app = express();
var bodyparser = require('body-parser');
var path = require('path');
var fs = require('fs');

app.use(bodyparser.urlencoded({ extended: false }));
app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname, "Account.html"))
})

app.post('/Confirm',function(req,res){
    if(typeof(req.body.Name || req.body.Email || req.body.Password) !== undefined)
    {
       
    console.log("hello");
       if (req.body.Password == req.body.CPassword) 
        {
            console.log("hello, hi");
        let details = [req.body.Name,req.body.Email,req.body.Password];
        var abc=JSON.stringify(details);
        fs.appendFile("Account.json",abc,function(req,res){
            //res.write(details);
            
            console.log("Your Data Has Been Saved");
        });
     } 
     else 
     {
         console.log("Enter into else part");
        res.redirect('/');
        console.log("Miss match Password");
    }
}
    else
 {
    res.redirect('/');  
        console.log("please fill the field first");
    }

});


app.listen(8000);
console.log("Running");
const express = require('express');
const bodyParser = require('body-parser');
var app = express();
var fs = require("fs");

//app.get('/listUsers', function (req, res) {
//  console.log("start") 
//  fs.readFile("/home/pengwang/httptest/test-server/users.json", 'utf8', function (err, data) {
//      console.log( "test" );
//      res.end( data );
//   });
//})

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/addUser', function (req, res) {
  
const http = require('http')

//console.log(JSON.stringify(req.body))
//console.log(req.headers)

const data = JSON.stringify(req.body)

//const data_static = JSON.stringify({
//
//    "requestInfo": {
//        "id": "83f53388-de46-432f-831c-74f1a917cdb8",
//        "recipient": "JTP",
//        "sender": "TOF_TR",
//        "ts": "2021-12-16T08:51:45.757+09:00",
//        "exchangeId": "447f6b7d-afc3-42f3-24b7c61b2bd1"
//    },
//    "cipheredCardInformation": "eyJhbGciOiJSU0EtT0FFUC0yNTYiLCJlbmMiOiJBMTI4R0NNIiwia2lkIjoidG1wMi50b2Z0cm1vY2suZ3BheS50cmFucy5yc2EuMDAwMDAwMDEifQ.cZCXZAag7uShL6wNe5jJOAn3qX9S8Hg1HGDRP0Ro-_lRF_sCuCLoAOUr5IJeOj1DEJ9GG--8493kZTS2v2L089rkyIpxk3LcGB0D4gCh9NmkTaYfnD6jR9fj-i7nEZOv6qtE3SO-Wtgi2D7RdXE0ocLJ1VbcVqp9A7RTsAHoNIG0UPyQHRre8cAdLQCJbhBxnK8GfB0hcf6JpKpgSl0-23Bp7dUeyMYZKWp_-Do_gT21oDBXxKpl0_xPz_I7Oi6yn9EuicSwALBJ3Hzbr4jXZfexGgJH7u-c7M71gH40lXknApCMfQkS7ejHSV9d4vtKfgIiTSg2LLzgC6QsCzB9gA.uqt8kuONXBImdD8x.3cK9ZBA8Ki61XUV9CrH9LlXy7wxaNnDAM1qrRLt3ZvVZo3svG7EFJHsBbXcvRxYgX3RqbdteDfyv9KL6JC3ZYR9Ysw0pVEdse8GFPUXLODPDwJbmWQBwnouJDnTPmP3pfBiQQ39ymljBm6oj13fbBYt061ZM5pAgMdmGg41425pKl6OszMm2a6kkM7IMPjuB3wXhZmNM8TFngs7ecCjM2Ww_haasggRh6LUw0GYzaf4LaKYYsJuoDhGQk7UbBRa1LQ.hGJCktPwEeQSMqkLj_Y4FQ",
//    "cipheredCardInformationFormat": {
//        "content": "JSON_CARDINFO",
//        "encoding": "JWE_COMPACT"
//    },
//    "cardInputMethod": "MANUAL",
//    "tokenRequestorId": "09876543210"
//})

const options = {
  hostname: '10.122.152.93',
  port: 20000,
  path: '/otdep/v2.23/enroll/enrollCard',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length,
    'Authorization': 'Basic YWNiZWIyYTE4ZmM5Zjg0YWZjYTBlZDAxNjM3YTc5M2NiNDpkNjI2MDQzZDUzNzI0YWZmYTgxYzEzNjViYjZhM2U2Nw=='
  }
}

console.log("start")
var cardArt =
         [{
            "resourceId": "432490E5D19070E098CC66A469A2BD675C5C86E8857EF4DE9C5F06599240ED3A",
            "mimeType": "image/png",
            "type": "DIGITAL_ART",
            "color": {
                "background": "#0000FF",
                "foreground": "#FFFFFF"
            }
        }
    ]


let newData = {
    "country": "England"
}
const req1 = http.request(options, res1 => {
  console.log(`statusCode: ${res1.statusCode}`)

  res1.on('data', d => {
    var myObject= JSON.parse(d);
//    console.log(myObject.user1.name)
        myObject['cardArts'] = cardArt;
            myObject = JSON.stringify(myObject);
                console.log(myObject)
             res.end(myObject)
                  })
                  })

                  req1.on('error', error => {
                    console.error(error)
                    })

                    req1.write(data)
                    req1.end()


// fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data1) {
//      data1 = JSON.parse( data1 );
//      console.log( data1 );
//      res.end(myObject);
//   });
})

var server = app.listen(8381, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})

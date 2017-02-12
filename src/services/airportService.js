var http = require('http');
var https = require('https');


var airportService = function () {
  
    var getAllAirport = function (cb) {
    var options = {
          host: 'www.qantas.com.au',
          port: 443,
          path: '/api/airports',
          method: 'GET',
          headers : {   
                   'Content-Type': 'application/json'
            }
      };

     var callback = function (response) 
      {
           var results = "";
           response.on('data', function (returnedData) {
               results += returnedData;
           });

           response.on('end',function () {
              var parsed = JSON.parse(results);
              cb(null, parsed.airports);
          });

           response.on('error', function (e) {
             console.log("error in calling qantas airport service :" + e.message);
           }); 
       };

      var prot = options.port == 443 ? https : http ;
      prot.request(options,callback).end();
   };

    return {
       getAllAirport:getAllAirport
    };
};

module.exports = airportService;
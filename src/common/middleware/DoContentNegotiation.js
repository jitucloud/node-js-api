'use strict';
var jsonToXml = require('jsontoxml');

var DoContentNegotiation = function (jsonResponse, accepHeaderType ,res) {
   if(accepHeaderType.toLowerCase() === "application/json")           
     return  res.json(jsonResponse);
   else if(accepHeaderType.toLowerCase() === "application/xml")
     return  res.send(jsonToXml(jsonResponse));
   else 
     return  res.json(jsonResponse);
};

module.exports = DoContentNegotiation;
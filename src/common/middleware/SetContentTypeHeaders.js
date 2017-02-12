'use strict';


var SetContentTypeHeader = function (req, res, next) {
  if (req.headers.accept.toLowerCase() === 'application/json') 
         res.header("Content-Type", "application/json");
    else if(req.headers.accept.toLowerCase() === 'application/xml')
         res.header("Content-Type", "application/xml");
    else 
         res.header("Content-Type", "application/json");

    next();
}

module.exports = SetContentTypeHeader;
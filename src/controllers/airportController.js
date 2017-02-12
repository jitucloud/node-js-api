var airportFilter =  require('../filters/airportFilter')();
var DoContentNegotiation = require('../common/middleware/DoContentNegotiation');
var CommonErrorResponse = require('../common/errors/error')();

var airportController = function (airportService) {

var getAllAirportList = function (req,res) {
    
  var airportcode = req.query.airportcode ;
  var countrycode = req.query.countrycode ;
  var international = req.query.international ;
  var domestic = req.query.domestic ;

 // Here we can validte each input and throw the appropriate error message.

  airportService.getAllAirport( 
       function (err, airportList) {   
         if(airportList != null && airportList != "")
         {
           var filtteredList = airportFilter.getAllAirportList(airportList,countrycode,airportcode,international,domestic, req.headers.host)
		   
           if(filtteredList != null && filtteredList != "")
            DoContentNegotiation(filtteredList ,req.headers.accept,res);
           else
             CommonErrorResponse.NotFoundResponse(req,res);
	     }
		 else
		  CommonErrorResponse.InternalServerResponse(req,res);
              
    }
 ); 
};

var getAirportByCode = function (req,res) {
   var airportcode = req.params.airportcode ;
   airportService.getAllAirport(
       function (err, airportList) {
         var filtteredList = airportFilter.getFilteredAirportByCode(airportList,airportcode,req.headers.host);
         DoContentNegotiation(filtteredList ,req.headers.accept,res);
    }
   );
};

var getAirportListByCountryCode = function (req,res) {
   var countrycode = req.params.countrycode ;
   airportService.getAllAirport(
       function (err, airportList) {
         var filtteredList = airportFilter.getFilteredAirportByCountryCode(airportList,countrycode,req.headers.host);
         DoContentNegotiation(filtteredList ,req.headers.accept,res);
    }
   );
};

var getInternationalAirportList = function (req,res) {
   var international = req.params.international ;
   airportService.getAllAirport(
       function (err, airportList) {
         var filtteredList = airportFilter.getFilteredInternationalAirport(airportList,international,req.headers.host);
         DoContentNegotiation(filtteredList ,req.headers.accept,res);
    }
   );
};

var getDomesticAirportList = function (req,res) {
   var domestic = req.params.domestic ;
   airportService.getAllAirport(
       function (err, airportList) {
         var filtteredList = airportFilter.getFilteredDomesticAirport(airportList,domestic,req.headers.host);
         DoContentNegotiation(filtteredList ,req.headers.accept,res);
    }
   );
};


return {
    getAllAirportList: getAllAirportList,
    getAirportByCode: getAirportByCode,
    getAirportListByCountryCode: getAirportListByCountryCode,
    getInternationalAirportList: getInternationalAirportList,
    getDomesticAirportList: getDomesticAirportList
};

};

module.exports = airportController;
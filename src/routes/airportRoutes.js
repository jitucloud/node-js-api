var express = require('express');

var airportRouter = express.Router();

var router = function() {   
    var airportService =  require('../services/airportService')();
    var airportController = require('../controllers/airportController')(airportService);
    var commonController = require('../controllers/commonController')();

  
   // This route will handle all request as query parameter
   // localhost:8080/api/airports
   // localhost:8080/api/airports?airportcode=del
   // localhost:8080/api/airports?countrycode=au
   // localhost:8080/api/airports?international=false
   // localhost:8080/api/airports?domestic=true
   // localhost:8080/api/airports?countrycode=au&international=true
    airportRouter.route('/')
    .get(airportController.getAllAirportList)
    .post(commonController.postNotSupported)
    .delete(commonController.deleteNotSupported);


   // localhost:8080/api/airports/:airportcode
    airportRouter.route('/:airportcode')
    .get(airportController.getAirportByCode)
    .post(commonController.postNotSupported)
    .delete(commonController.deleteNotSupported); 

   // localhost:8080/api/airports/countries/:countrycode  
     airportRouter.route('/countries/:countrycode')
    .get(airportController.getAirportListByCountryCode)
    .post(commonController.postNotSupported)
    .delete(commonController.deleteNotSupported); 
    
   // localhost:8080/api/airports/:international  
    airportRouter.route('/international/:international')
    .get(airportController.getInternationalAirportList)
    .post(commonController.postNotSupported)
    .delete(commonController.deleteNotSupported); 

    // localhost:8080/api/airports/domestic/:true  
    airportRouter.route('/domestic/:domestic')
    .get(airportController.getDomesticAirportList)
    .post(commonController.postNotSupported)
    .delete(commonController.deleteNotSupported);  
  
    return airportRouter;
}
module.exports = router;    
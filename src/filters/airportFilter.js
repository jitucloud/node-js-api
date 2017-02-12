var filterService = function () {
  
   var getAllAirportList = function (airportList,countrycode,airportcode,international,domestic,host) {
     if(airportList != null && airportList != "")
     {
          
        var filteredCountryList  = [];
            //Filter for countrycode
        if(countrycode != null && countrycode != ""){
           airportList.forEach(function(element,index,array) {
              if(element.country.code.toLowerCase() === countrycode.toLowerCase()){
                 filteredCountryList.push(element);
              };
           });
        } 
        else
        filteredCountryList = airportList;

       //Filter for airportcode
       var filteredAirportList =  [];
       if(airportcode != null && airportcode != ""){
             filteredCountryList.forEach(function(element,index,array) {
              if(element.code.toLowerCase() === airportcode.toLowerCase()){
                 filteredAirportList.push(element);
              };
           }); 
         }
         else   
         filteredAirportList =   filteredCountryList;
         
       //Filter for international
        var filteredInternationalList =  [];
        if(international != null && international != ""){
             filteredAirportList.forEach(function(element,index,array) {
              if(element.international_airport.toString().toLowerCase() === international.toLowerCase()){
                 filteredInternationalList.push(element);
              };
           }); 
         }
         else
         filteredInternationalList = filteredAirportList;

       //Filter for domestic
       var filteredDomesticList =  [];
       if(domestic != null && domestic != ""){
             filteredInternationalList.forEach(function(element,index,array) {
              if(element.regional_airport.toString().toLowerCase() === domestic.toLowerCase()){
                 filteredDomesticList.push(element);
              };
           }); 
         }
         else
         filteredDomesticList = filteredInternationalList;    
     };
     return filteredDomesticList != null && filteredDomesticList != "" ? beautifyQueryOutPutResult(filteredDomesticList ,host) :[];
   };

   var getFilteredAirportByCode = function (airportList,airportcode,host) {
   var filteredAirportList  = [];
    if(airportList != null && airportList != "")
     {
        //Filter for countrycode
        if(airportcode != null && airportcode != ""){
           airportList.forEach(function(element,index,array) {
              if(element.code.toLowerCase() === airportcode.toLowerCase()){
                 filteredAirportList.push(element);
              };
           });
        } 
        else
        filteredAirportList = airportList;
     }
     return filteredAirportList != null && filteredAirportList != "" ? beautifyFlatOutPutResult(filteredAirportList ,host) :[];
   };

   var getFilteredAirportByCountryCode = function (airportList,countrycode,host) {
    var filteredCountryList  = [];
    if(airportList != null && airportList != "")
     {
        //Filter for countrycode
        if(countrycode != null && countrycode != ""){
           airportList.forEach(function(element,index,array) {
              if(element.country.code.toLowerCase() === countrycode.toLowerCase()){
                 filteredCountryList.push(element);
              };
           });
        } 
        else
        filteredCountryList = airportList;
     }
     return filteredCountryList != null && filteredCountryList != "" ? beautifyFlatOutPutResult(filteredCountryList ,host) :[];
   };

   var getFilteredInternationalAirport = function (airportList,international,host)
    {
    var filteredInternationalAirportList  = [];
    if(airportList != null && airportList != "")
     {
        if(international != null && international != ""){
           airportList.forEach(function(element,index,array) {
              if(element.international_airport.toString().toLowerCase() === international.toLowerCase()){
                 filteredInternationalAirportList.push(element);
              };
           });
        } 
      }
     return filteredInternationalAirportList != null && filteredInternationalAirportList != "" ? beautifyFlatOutPutResult(filteredInternationalAirportList ,host) :[];
   };

  var getFilteredDomesticAirport = function (airportList,domestic,host) {
   var filteredDomesticAirportList  = [];
    if(airportList != null && airportList != "")
     {
        if(domestic != null && domestic != ""){
           airportList.forEach(function(element,index,array) {
              if(element.regional_airport.toString().toLowerCase() === domestic.toLowerCase()){
                 filteredDomesticAirportList.push(element);
              };
           });
        } 
      }
     return filteredDomesticAirportList != null && filteredDomesticAirportList != "" ? beautifyFlatOutPutResult(filteredDomesticAirportList ,host) :[];
   };

// To beautify query like endpoint
  var beautifyQueryOutPutResult = function (airportList ,host) {
    var result  = {
        totalItem : 0,
        payload : []
    };    

    result.totalItem =Object.keys(airportList).length;
    airportList.forEach(function(element,index,array) {
        result.payload.push({
           airportCode : element.code,
           links :[{
                 self : "http://" + host + "/api/airports?airportcode=" + element.code.toLowerCase()
           }],
           displayName : element.display_name != null && element.display_name != "" ? element.display_name :null,
           isInternationalAirport : element.international_airport,
           isDomesticairport  : element.regional_airport,
           location : element.location,
           currencyCode : element.currency_code,
           timeZone : element.timezone,
           country :
               {  code : element.country.code,
                  displayName : element.country.display_name != null && element.country.display_name != ""  ? element.country.display_name : null, 
                  links :[{
                    self : "http://" + host + "/api/airports?countrycode=" + element.country.code.toLowerCase()
                 }]   
               }     
        });
     });

     return result;
   };

// To beautify flat endpoint
  var beautifyFlatOutPutResult = function (airportList ,host) {
    var result  = {
        totalItem : 0,
        payload : []
    };    

    result.totalItem =Object.keys(airportList).length;
    airportList.forEach(function(element,index,array) {
        result.payload.push({
           airportCode : element.code,
           links :[{
                 self : "http://" + host + "/api/airports/" + element.code.toLowerCase()
           }],
           displayName : element.display_name != null && element.display_name != "" ? element.display_name :null,
           isInternationalAirport : element.international_airport,
           isDomesticairport  : element.regional_airport,
           location : element.location,
           currencyCode : element.currency_code,
           timeZone : element.timezone,
           country :
               {  code : element.country.code,
                  displayName : element.country.display_name != null && element.country.display_name != ""  ? element.country.display_name : null, 
                  links :[{
                    self : "http://" + host + "/api/airports/country/" + element.country.code.toLowerCase()
                 }]   
               }     
        });
     });
     
     return result;
   };




return {
       getAllAirportList:getAllAirportList,
       getFilteredAirportByCode:getFilteredAirportByCode,
       getFilteredAirportByCountryCode:getFilteredAirportByCountryCode,
       getFilteredInternationalAirport:getFilteredInternationalAirport,
       getFilteredDomesticAirport:getFilteredDomesticAirport

    };
};

module.exports = filterService;
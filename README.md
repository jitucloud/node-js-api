#Create REST API in nodejs and consume third party service in nodejs

Go to code-challenge folder and run the below commands from node command prompt 

Step 1 : npm init

Step 2 : npm install

Step 3 : gulp server 

Step 4 : visit site on localhost:3000/api/airports

More end point :
 
api/airports   - all airport               - will give al airport across world
api/airports?countrycode=in                - give all airport in a country   -  in , au, gb
api/airports?airportcode=del               - airport with code del, lhr, syd
api/airports?international=true            - where international true
api/airports?domestic=true                 - where domestic true
api/airports?countrycode=in&airportcode=del&international=false        - any combination of query parameter
api/airports?countrycode=au&domestic=true        - all domestic airport in australia
api/airports?countrycode=au                  - all airport in australia

api/airports?airportcode=syd                 - all airport in australia

http://localhost:3000/api/airports?airportcode=sydf          -  Not Found 404 




api/airports/:{airportcode}                             -  airport with airport code  - del, lhr, syd         
api/airports/countries/:{countrycode}                 -  all airport in a country   - au ,in, gb
api/airports/intrnational/:{boolean}                  -  all international airport  - true otherwise false
api/airports/domestic/:{boolean}                      -  all domestic airport  -  true otherwise false





"# node-js-api" 

var CommonErrorResponse = function (res) {

    var BadRequestResponse = function (req,res) {
       res.status(400).json({message: "Bad Request"});
    };

     var NotFoundResponse = function (req,res) {
       res.status(404).json({message: "Not Found"});
    };

     var InternalServerResponse = function (req,res) {
       res.status(500).json( {message: "Internal Server Error"});
    };
  
    return {
    BadRequestResponse: BadRequestResponse,
    NotFoundResponse: NotFoundResponse,
    InternalServerResponse: InternalServerResponse
   };
};

module.exports = CommonErrorResponse;
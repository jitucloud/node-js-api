var commonController = function () {

    var postNotSupported = function (req,res) {
        res.json({message:"post is not supported"});
    };

     var deleteNotSupported = function (req,res) {
        res.json({message:"delete is not supported"});
    };

     var patchNotSupported = function (req,res) {
        res.json({message:"patch is not supported"});
    };

     var updateNotSupported = function (req,res) {
        res.json({message:"update is not supported"});
    };


    return {
    postNotSupported: postNotSupported,
    deleteNotSupported: deleteNotSupported,
    patchNotSupported: patchNotSupported,
    updateNotSupported: updateNotSupported

};
};

module.exports = commonController;
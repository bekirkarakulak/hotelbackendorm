
var C2 		= require('../dao/c2');






  exports.getCityList = function(req, res) {
     
    C2.getCityList(function(err, data){
        if( err ) console.log(err);
        else res.send(data);
      }, req.body);
  };

  

  






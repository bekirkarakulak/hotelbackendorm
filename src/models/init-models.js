var DataTypes = require("sequelize").DataTypes;
var _Cities = require("./Cities");

function initModels(sequelize) {
  var Cities = _Cities(sequelize, DataTypes);


  return {
    Cities,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

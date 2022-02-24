const { Sequelize } = require('sequelize');

const initModels = require("../models/init-models");


const sequelize = new Sequelize('Hotel', 'sa', 123, {
    host: 'LAPTOP-PAA2U09F',//'109.235.251.248',
    dialect: 'mssql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  });

  const Model = new initModels(sequelize);
  exports.getCityList = async function(callback) {

	var FUNCTIONNAME = "getCityList";

		var sqlStatement = `
		
		select CityID, CityName from [DBO].[Cities] order by CityID
		`;			 


        
        try {
            var result = await Model.Cities.findAll({
                attributes: ['CityID', 'CityName'  ]
            }); //select sorgusu
            var returnVal = {
                result:"Success",
                message:"",
                data:result
            };
        } catch (error) {
            var returnVal = {
                result:"Failed",
                message:"Hata oluştu, lütfen daha sonra tekrar deneyin."+error,
                data:null
            }
            
        }




	// Prepate and Execute the Statment
	


			callback(null,returnVal);

			
};
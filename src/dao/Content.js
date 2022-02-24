const mssqlconfig = require('../../mssqlconfig');


// Include MSSQL Driver
var sql = require("mssql");

// Create Connection Pool
const pool = new sql.ConnectionPool(mssqlconfig, function (err) {
    console.log('Connected to SQL server successfully!');
}); 


// METHOD ...
exports.getPriceList = function(callback) {

	var FUNCTIONNAME = "getPriceList";

		var sqlStatement = `
		
		select h.HotelName, rt.RoomTypeName, p.Price,p.StartDate,p.EndDate, ct.CityName,cn.CountyName 
from Prices p 
join RoomDetails rd on p.RoomDetailID=rd.RoomDetailID 

join Hotels h on h.HotelID= rd.HotelID 
join Counties cn on h.CountyID= cn.CountyID 
join Cities ct on cn.CityID=ct.CityID  
join RoomTypes rt on rt.RoomTypeID=rd.RoomTypeID
join Stars s on s.StarID=h.StarID
		`;			 

	console.log(sqlStatement);

	// Prepate and Execute the Statment
	const ps = new sql.PreparedStatement(pool)
	ps.prepare(sqlStatement, err => {
		// ... error checks
		ps.execute({
				}, (err, result) => {

					if (err) {
						console.log(err);
						var returnVal = {
							result:"Failed",
							message:"Hata oluştu, lütfen daha sonra tekrar deneyin.",
							data:null
						}
					} else {
						var returnVal = {
							result:"Success",
							message:"",
							data:result.recordsets[0]
						}
					}


			callback(null,returnVal);

			ps.unprepare(err => {
				// ... error checks
			})
		})
	});	
};





exports.getHotelList = function(callback) {

	var FUNCTIONNAME = "getHotelList";

		var sqlStatement = `
		
		select HotelName from Hotels
		`;			 

	console.log(sqlStatement);

	// Prepate and Execute the Statment
	const ps = new sql.PreparedStatement(pool)
	ps.prepare(sqlStatement, err => {
		// ... error checks
		ps.execute({
				}, (err, result) => {

					if (err) {
						console.log(err);
						var returnVal = {
							result:"Failed",
							message:"Hata oluştu, lütfen daha sonra tekrar deneyin.",
							data:null
						}
					} else {
						var returnVal = {
							result:"Success",
							message:"",
							data:result.recordsets[0]
						}
					}


			callback(null,returnVal);

			ps.unprepare(err => {
				// ... error checks
			})
		})
	});	
};

exports.getRoomTypes = function(callback) {

	var FUNCTIONNAME = "getRoomTypes";

		var sqlStatement = `
		
		select RoomTypeName from RoomTypes
		`;			 

	console.log(sqlStatement);

	// Prepate and Execute the Statment
	const ps = new sql.PreparedStatement(pool)
	ps.prepare(sqlStatement, err => {
		// ... error checks
		ps.execute({
				}, (err, result) => {

					if (err) {
						console.log(err);
						var returnVal = {
							result:"Failed",
							message:"Hata oluştu, lütfen daha sonra tekrar deneyin.",
							data:null
						}
					} else {
						var returnVal = {
							result:"Success",
							message:"",
							data:result.recordsets[0]
						}
					}


			callback(null,returnVal);

			ps.unprepare(err => {
				// ... error checks
			})
		})
	});	
};


exports.getLocation = function(callback) {

	var FUNCTIONNAME = "getLocation";

		var sqlStatement = `
		
		select c.CityName,ct.CountyName from Cities c join Counties ct on c.CityID=ct.CityID 
order by c.CityID,ct.CountyID
		`;			 

	console.log(sqlStatement);

	// Prepate and Execute the Statment
	const ps = new sql.PreparedStatement(pool)
	ps.prepare(sqlStatement, err => {
		// ... error checks
		ps.execute({
				}, (err, result) => {

					if (err) {
						console.log(err);
						var returnVal = {
							result:"Failed",
							message:"Hata oluştu, lütfen daha sonra tekrar deneyin.",
							data:null
						}
					} else {
						var returnVal = {
							result:"Success",
							message:"",
							data:result.recordsets[0]
						}
					}


			callback(null,returnVal);

			ps.unprepare(err => {
				// ... error checks
			})
		})
	});	
};


exports.getStars = function(callback) {

	var FUNCTIONNAME = "getStars";

		var sqlStatement = `
		
		select StarName from Stars
		`;			 

	console.log(sqlStatement);

	// Prepate and Execute the Statment
	const ps = new sql.PreparedStatement(pool)
	ps.prepare(sqlStatement, err => {
		// ... error checks
		ps.execute({
				}, (err, result) => {

					if (err) {
						console.log(err);
						var returnVal = {
							result:"Failed",
							message:"Hata oluştu, lütfen daha sonra tekrar deneyin.",
							data:null
						}
					} else {
						var returnVal = {
							result:"Success",
							message:"",
							data:result.recordsets[0]
						}
					}


			callback(null,returnVal);

			ps.unprepare(err => {
				// ... error checks
			})
		})
	});	
};








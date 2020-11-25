const client = require("../db");
const queryBuilder = require("../controllers/query-builder");

exports.add_charges = async function (data) {
  console.log("In controller for add Function. Data obtained is: ", data);
  
  const add_charges = queryBuilder.insert_function(table="charges", data.data)
  
  console.log(add_charges);

  result = await client.query(add_charges.sql, add_charges.values);
  if(result){
    return result;
  }

}

exports.fetch_charges = async function (data) {
  console.log("In controller for fetch members Function. Data obtained is: ", data);

  const fetch_charges = queryBuilder.select_function(table="charges", where = data.where)

  console.log(fetch_charges);

  result = await client.query(fetch_charges.sql, fetch_charges.values);
  if(result){
    return result;
  }
};

exports.update_charges = async function (data) {
  console.log("In controller for update Function. Data obtained is: ", data);

  const update_charges = queryBuilder.update_function(table = "charges", jsonData = data.data, where = data.where);
  console.log(update_charges);

  result = await client
    .query(update_charges.sql, update_charges.values)
    if(result){
      return result;
    }

};

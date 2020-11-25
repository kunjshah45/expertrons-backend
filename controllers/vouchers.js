const client = require("../db");
const queryBuilder = require("../controllers/query-builder");

exports.add_vouchers = async function(data){
    console.log("In controller for add Function. Data obtained is: ", data);
    const add_vouchers = queryBuilder.insert_function(table="voucher",jsonData)
    console.log(add_vouchers);

    result = await client.query(add_vouchers.sql, add_vouchers.values);
    if(result){
      return result;

    }

    const add_vouchers_entry = queryBuilder.insert_function(table="voucher_entry",jsonData)
    console.log(add_vouchers_entry);

    result = await client.query(add_vouchers_entry.sql, add_vouchers_entry.values);
    if(result){
        return result;
    }

}

exports.fetch_one_voucher = async function(data){
    //console.log("In controller for fetch one voucher Function. Data obtained is: ", data);
    const fetch_one_query = queryBuilder.select_function(table="voucher", where = {"society_id": data.society_id})
    //console.log(fetch_one_query);

    result = await client.query(fetch_one_query.sql, fetch_one_query.values);
    if (result){
      return result;
    }
  
}

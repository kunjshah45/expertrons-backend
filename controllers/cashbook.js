const client = require("../db");
const queryBuilder = require("../controllers/query-builder");


exports.fetch_cashbook = async function(data){
    console.log("controller - view ledger. Data obtained is: ", data);
    const fetch_query = queryBuilder.select_function(table="ledger", where = data.where)
    console.log(fetch_query);
    
    result = await client.query(fetch_query.sql, fetch_query.values);
    if(result){
        return result;
    }

}

exports.fetch_bankbook = async function(data){
    console.log("In controller for view ledger Function. Data obtained is: ", data);
    const fetch_query = queryBuilder.select_function(table="ledger", where = data.where)
    console.log(fetch_query);
    
    result = await client.query(fetch_query.sql, fetch_query.values);
    if(result){
        return result;
    }

}
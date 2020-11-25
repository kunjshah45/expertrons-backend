const client = require("../db");
const queryBuilder = require("../controllers/query-builder");


//fetch all socities
exports.fetch_all_societies = async function(data){
    console.log("In controller for fetch socities Function. Data obtained is: ", data);
    const fetch_query = queryBuilder.select_function(table="socities", where = {"accountant_id": data.accountant_id})
    console.log(fetch_query);

    result = await client.query(fetch_query.sql, fetch_query.values);
    if(result){
        return result;
    }


}

//fetch society
exports.fetch_one_society = async function(data){
    console.log("In controller for fetch one society Function. Data obtained is: ", data);
    const fetch_one_query = queryBuilder.select_function(table="socities", where = {"id":data.id,"accountant_id": data.accountant_id})
    console.log(fetch_one_query);

    result = await client.query(fetch_one_query.sql, fetch_one_query.values);
    if(result){
        return result;
    }


}


//add a new society/socities
exports.add_society = async function(data){
    console.log("In controller for add Function. Data obtained is: ", data);
    const add_society = queryBuilder.insert_function(table="socities",data)
    console.log(add_society);

    result = await client.query(add_society.sql, add_society.values);
    if(result){
        return result;
    }

}



//update a existing society/socities
exports.update_society = async function(data){
    console.log("In controller for update Function. Data obtained is: ", data);

    const update_society = queryBuilder.update_function(table = "socities", data.data,
    where =data.where);
    console.log(update_society);

    result = await client.query(update_society.sql, update_society.values);
    if(result){
        return result;
    }



}



//delete a existing society/socities
exports.delete_society = async function(data){
    console.log("In controller for delete Function. Data obtained is: ", data);
    const delete_society = queryBuilder.delete_function(table = "socities", data,
    where = { "society_id": data.society_id, "auditor_id": data.auditor_id });
    console.log(delete_society);

    result = await client.query(delete_society.sql, delete_society.values);
    if(result){
        return result;
    }


}

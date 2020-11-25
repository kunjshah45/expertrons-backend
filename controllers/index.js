const client = require("../db");
const queryBuilder = require("../controllers/query-builder");

exports.login = async function (data) {
  console.log("In controller for login Function. Data obtained is: ", data);

  //process your data here and perform check with postgres    
  const select_query = queryBuilder.select_function(table = "users", where = {"username":data.username, "password":data.password} );
  console.log(select_query);

  //execute query
  result = await client.query(select_query.sql, select_query.values); 
    console.log(result);
    if(result){
      // session operations
      return result
    }
    else{
      return false
    }

};

exports.update = async function(data) {
    console.log("In controller for login Function. Data obtained is: ", data);

    //process your data here and perform check with postgres

    //call update controller and query builder 
    const update_query = queryBuilder.update_function(table = "users", jsonData = { "username": data.username, "password": data.password }, where = { "username": data.username, "password": data.password });
    console.log(update_query);



    // const select_query = queryBuilder.select_function(table = "users", where = {$or: [{name: 'John'},{age: 12}]} );
    // call select controller and query builder
    const select_query = queryBuilder.select_function(table = "users", where = { "username": data.username, "password": data.password });
    console.log(select_query);

    
    const delete_query = queryBuilder.delete_function(table = "users", where = { "username": data.user_id });
    console.log(delete_query);
    
    //execute query 
    client.query(select_query.sql, select_query.values).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    });

    // result
    return true
};

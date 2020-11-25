const client = require("../db");
const queryBuilder = require("../controllers/query-builder");


//fetch all members
exports.fetch_all_members = async function (data) {
    console.log("In controller for fetch members Function. Data obtained is: ", data);
    const fetch_query = queryBuilder.select_function(table = "members", where = data.where)
    console.log(fetch_query);

    result = await client.query(fetch_query.sql, fetch_query.values);
    if (result) {
        return result;
    }
    else{
        return false
    }

}

//fetch member
exports.fetch_one_member = async function (data) {
    console.log("In controller for fetch one member Function. Data obtained is: ", data);
    const fetch_one_query = queryBuilder.select_function(table = "members", where = data.where)
    console.log(fetch_one_query);

    result = await client.query(fetch_one_query.sql, fetch_one_query.values);
    if (result) {
        return result;
    }
    else{
        return false
    }

}


//add a new member/members
exports.add_member = async function (data) {
    console.log("In controller for add Function. Data obtained is: ", data);
    const add_member = queryBuilder.insert_function(table = "members", data.data);
    console.log(add_member);

    result = await client.query(add_member.sql, add_member.values);
    if (result) {
        return result;
    }
    else{
        return false
    }
}


//update a existing member/members
exports.update_member = async function (data) {
    console.log("In controller for update Function. Data obtained is: ", data);

    const update_member = queryBuilder.update_function(table = "members", data.data,
        where = data.where);
    console.log(update_member);

    result = await client.query(update_member.sql, update_member.values);
    if (result) {
        return result;
    }
    else{
        return false
    }

};



//delete a existing member/members
exports.delete_member = async function (data) {
    console.log("In controller for delete Function. Data obtained is: ", data);
    const delete_member = queryBuilder.delete_function(table = "members",
        where = data.where);
    console.log(delete_member);

    result = await client.query(delete_member.sql, delete_member.values);
    if (result) {
        return result;
    }
    else{
        return false
    }
}
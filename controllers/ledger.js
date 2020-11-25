const client = require("../db");
const queryBuilder = require("../controllers/query-builder");

exports.fetch_ledger = async function (data) {
    console.log(
        "In controller for fetch ledger Function. Data obtained is: ",
        data
    );
    const fetch_query = queryBuilder.select_function(
        (table = "ledger"),
        (where = data.where)
    );
    console.log(fetch_query);

    result = await client.query(fetch_query.sql, fetch_query.values);
    if (result) {
        return result;
    } else {
        return false;
    }
};

exports.add_ledger = async function (data) {
    console.log("In controller for add Function. Data obtained is: ", data);
    const add_ledger = queryBuilder.insert_function(
        (table = "ledger"),
        data.data
    );
    console.log(add_ledger);

    result = await client.query(add_ledger.sql, add_ledger.values);
    if (result) {
        return result;
    } else {
        return false;
    }
};

exports.upate_ledger = async function (data) {
    console.log("In controller for update function. Data obtained is: ", data);
    const update_ledger = queryBuilder.update_function(
        (table = "ledger"),
        data.data,
        (where = data.where)
    );
    console.log(update_ledger);

    result = await client.query(update_ledger.sql, update_ledger.values);
    if (result) {
        return result;
    } else {
        return false;
    }
};
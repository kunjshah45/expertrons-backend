const SQLBuilder = require('json-sql-builder2');
var sql = new SQLBuilder('PostgreSQL');

exports.select_function = ((table, where) => {
    select_query = sql.$select({
        $from: table,
        $where: where
    })
    return select_query;
});

// sql.$select({
//     job_title: true,
//     total_salary: { $sum: 'salary' }
//     $from: 'people',
//     $where: {
//         job_title: { $in: ['Sales Manager', 'Account Manager'] },
//         age: { $gte: 18 },
//         country_code: 'US',
//     },
//     $groupBy: 'job_title',
// });


exports.insert_function = ((tables, jsonData) => {
    insert_query = sql.$insert({
        $table: tables,
        $documents: jsonData
    });
    return insert_query;
});

exports.update_function = ((table, jsonData, where) => {
    update_query = sql.$update({
        $table: table,
        $set: jsonData,
        $where: where
    })
    return update_query;
});

exports.delete_function = ((table, where) => {
    delete_query = sql.$delete({
        $table: table,
        $where: where
    })
    return delete_query;
});
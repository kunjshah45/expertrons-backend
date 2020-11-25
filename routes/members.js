const members = require("../controllers/members");
const indexHelper = require("../routes/index");


exports.init = function (app) {


  app.post("/members/fetch_all", async (req, res) => {
    //   const user = users.find(user => user.name == req.body.name)
    let body = req.body;

    let list_of_column = await indexHelper.fetch_column_names("members");
    let data_in_body = await indexHelper.body_helper_function(body, list_of_column);

    //console.log(list_of_column);

    let jsonData = {}

    if (data_in_body.society_id) {
      jsonData.where = {
        "society_id": data_in_body.society_id
      }
    } else {
      return res
        .status(200)
        .json({
          message: "Society id excepted for fetching all members, but missing",
          status_code: 3500
        });
    }

    members
      .fetch_all_members(jsonData)
      .then((result) => {
        if (result.rows.length > 0) {
          return res
            .status(200)
            .json({
              message: "fetched all members successfully",
              status_code: 3000,
              result: result.rows
            });
        }
        else{
          return res
            .status(200)
            .json({
              message: "fetching all member failed. no member found",
              status_code: 3404
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });


  app.post("/members/fetch_one", async (req, res) => {
    //   const user = users.find(user => user.name == req.body.name)
    let body = req.body;

    let list_of_column = await indexHelper.fetch_column_names("members");
    let data_in_body = await indexHelper.body_helper_function(body, list_of_column);


    let jsonData = {}

    if (data_in_body.society_id && data_in_body.id) {
      jsonData.where = {
        "society_id": data_in_body.society_id,
        "id": data_in_body.id
      }
    } else {
      return res
        .status(200)
        .json({
          message: "society-id and id excepted for fetching one members, but either is missing",
          status_code: 3500
        });
    }

    members
      .fetch_one_member(jsonData)
      .then((result) => {
        if (result.rows.length > 0) {
          return res
            .status(200)
            .json({
              message: "fetching one member successfully",
              status_code: 3001,
              result: result.rows
            });
        }
        else{
          return res
            .status(200)
            .json({
              message: "fetching one member failed. no member found",
              status_code: 3404
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });



  app.post("/members/add", async (req, res) => {
    let body = req.body;

    let list_of_column = await indexHelper.fetch_column_names("members");
    let data_in_body = await indexHelper.body_helper_function(body, list_of_column);

    let jsonData = {
      data: data_in_body
    }

    members
      .add_member(jsonData)
      .then((result) => {
        if (result) {
          return res
            .status(200)
            .json({
              message: "add member operation successfully",
              status_code: 3000
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });


  app.post('/members/update', async (req, res) => {
    let body = req.body;

    let list_of_column = await indexHelper.fetch_column_names("members");
    let data_in_body = await indexHelper.body_helper_function(body, list_of_column);

    let jsonData = {}
    if (data_in_body.id){
      
      jsonData = {
        data: data_in_body,
        where: {
            'id': data_in_body.id
        }
      };
      
      delete jsonData.data.id;
      
    }
    else{
      return res
        .status(200)
        .json({
          message: "id excepted for updating member, but is missing",
          status_code: 3500
        });
    }

    members
      .update_member(jsonData)
      .then((result) => {
        if (result) {
          return res
            .status(200)
            .json({
              message: "updated member data successfully",
              status_code: 3200,
              result: result
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });

  app.post("/members/delete", async (req, res) => {
    let body = req.body;

    jsonData = {
      where: {
        "id": body.id
      }
    };


    members
      .delete_member(jsonData)
      .then((result) => {
        if (result) {
          return res
            .status(200)
            .json({
              message: "deleted member successfully",
              status_code: 3400,
              result: result
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });
};
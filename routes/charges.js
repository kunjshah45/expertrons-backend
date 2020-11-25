const charges = require("../controllers/charges");
const indexHelper = require("../routes/index");


exports.init = function (app) {

  // api for fetching all/unique charges
  app.post("/charges/fetch_all", async (req, res) => {

    let body = req.body;

    let list_of_column = await indexHelper.fetch_column_names("charges");

    let data_in_body = await indexHelper.body_helper_function(body, list_of_column);

    let jsonData = {
      where: data_in_body,
    };

    charges.fetch_charges(jsonData).then((result) => {
        if (result) {
          return res.status(200).json({
            message: "Fetched charge Successful",
            status_code: 6000,
            result: result,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });

  // api for adding charges
  app.post("/charges/add", async (req, res) => {
    let body = req.body;

    list_of_column = await indexHelper.fetch_column_names("charges");
    let data_in_body = await indexHelper.body_helper_function(body, list_of_column);

    let jsonData = {
      data: data_in_body,
    };

    charges.add_charges(jsonData).then((result) => {
        if (result) {
          return res.status(200).json({
            message: "Adding Charges Successful",
            status_code: 6001,
            result: result,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });

  app.post("/charges/update", async (req, res) => {
    let body = req.body;

    list_of_column = await indexHelper.fetch_column_names("charges");

    let data_in_body = await indexHelper.body_helper_function(
      body,
      list_of_column
    );

    let jsonData = {
      data: data_in_body,
      where: {
        id: data_in_body.id,
      },
    };

    // remove primary key from data as we should never update PK
    delete jsonData.data.id;

    charges
      .update_charges(jsonData)
      .then((result) => {
        if (result) {
          return res.status(200).json({
            message: "updated charges Successful",
            status_code: 6003,
            result: result,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });
};
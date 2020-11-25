const ledger = require("../controllers/ledger");
const indexHelper = require("../routes/index");

exports.init = function (app) {
  app.post("/ledger/fetch_ledger", async (req, res) => {
    let body = req.body;

    list_of_column = await indexHelper.fetch_column_names("ledger");
    let data_in_body = await indexHelper.body_helper_function(
      body,
      list_of_column
    );

    let jsonData = {
      where: data_in_body,
    };

    ledger
      .fetch_ledger(jsonData)
      .then((result) => {
        if (result) {
          return res.status(200).json({
            message: "fetched ledger successful",
            status_code: 4001,
            result: result.rows,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });

  app.post("/ledger/add_ledger", async (req, res) => {
    let body = req.body;

    list_of_column = await indexHelper.fetch_column_names("ledger");
    let data_in_body = await indexHelper.body_helper_function(
      body,
      list_of_column
    );

    let jsonData = {
      data: data_in_body,
    };

    ledger
      .add_ledger(jsonData)
      .then((result) => {
        console.log(result);
        if (result) {
          return res
            .status(200)
            .json({ message: "added ledger Successful", status_code: 4200 });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });

  app.post("/ledger/update_ledger", async (req, res) => {
    let body = req.body;

    list_of_column = await indexHelper.fetch_column_names("ledger");

    let data_in_body = await indexHelper.body_helper_function(
      body,
      list_of_column
    );

    let jsonData = {
      where: {
        id: data_in_body.id,
      },
      data: data_in_body,
    };

    // because we don't want the data to be updated.
    delete jsonData.data.id;

    ledger
      .upate_ledger(jsonData)
      .then((result) => {
        console.log(result);
        if (result) {
          return res.status(200).json({
            message: "updated ledger Successful",
            status_code: 4200,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

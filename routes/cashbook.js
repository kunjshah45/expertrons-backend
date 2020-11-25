const cashbook = require("../controllers/cashbook");
const indexHelper = require("../routes/index");

exports.init = function (app) {
    
  // status_codes
  // 6000 successful cashbook and bank book operation requuest
    
    app.post("/fetch_cashbook", async (req, res) => {
        //   const user = users.find(user => user.name == req.body.name)
        let body = req.body;

        list_of_expected_values = ["society_id", "ledger_id", "date_from", "date_to", "nature"]

        let data_in_body = await indexHelper.body_helper_function(body,list_of_expected_values);

        let jsonData = {
          where: data_in_body,
        };

        cashbook
          .fetch_cashbook(jsonData)
          .then((result) => {
            console.log(result);
            if (result) {
              return res
                .status(200)
                .json({ message: "successful", status_code: 6000, data: result });
            }
          })
          .catch((error) => {
            console.log(error);
          });
    });

    app.post("/fetch_bankbook", async (req, res) => {
        //   const user = users.find(user => user.name == req.body.name)
        let body = req.body;
        
        list_of_expected_values = ["society_id", "ledger_id", "date_from", "date_to", "nature"]

        let data_in_body = await indexHelper.body_helper_function(body,list_of_expected_values);

        let jsonData = {
          where: data_in_body,
        };

        cashbook
          .fetch_bankbook(jsonData)
          .then((result) => {
            console.log("result: ", result);
            if (result) {
              return res
                .status(200)
                .json({ message: "successful", status_code: 6000, data: result });
            }
          })
          .catch((error) => {
            console.log(error);
          });
    });
}
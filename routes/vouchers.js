const vouchers = require("../controllers/vouchers");
exports.init = function(app){
  app.post("/vouchers/add", async (req, res) => {
  //   const user = users.find(user => user.name == req.body.name)
  let body = req.body;

  list_of_column = await indexHelper.fetch_column_names("vouchers");
  let jsonData = await indexHelper.body_helper_function(body,list_of_column);

  //console.log(list_of_column);

  vouchers
    .add_vouchers(jsonData)
    .then((result) => {
      //console.log(result);
      if (result == true) {
        return res
          .status(200)
          .json({ message: "Adding Vouchers Successful", status_code: 7001, result: result });
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

app.post("/vouchers/fetch_one", async (req, res) => {
    //   const user = users.find(user => user.name == req.body.name)
    let body = req.body;

    list_of_column = await indexHelper.fetch_column_names("vouchers");
    let jsonData = await indexHelper.body_helper_function(body,list_of_column);

    //console.log(list_of_column);

    vouchers
      .fetch_one_voucher(jsonData)
      .then((result) => {
        //console.log(result);
        if (result == true) {
          return res
            .status(200)
            .json({ message: "Adding voucher Successful", status_code: 7001, result: result });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });
}

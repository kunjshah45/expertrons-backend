const societies = require("../controllers/societies");
const indexHelper = require("./index");

exports.init = function (app) {

    app.post("/socities/fetch_all", async (req, res) => {
        //   const user = users.find(user => user.name == req.body.name)
        let body = req.body;


        list_of_column = await indexHelper.fetch_column_names("socities");
        let jsonData = await indexHelper.body_helper_function(body,list_of_column);


        societies
          .fetch_all_societies(jsonData)
          .then((result) => {
            console.log(result.rows);
            if (result) {
              return res
                .status(200)
                .json({ message: "Adding society Successful", status_code: 3001,result: result });
            }
          })
          .catch((error) => {
            console.log(error);
          })
    });


    app.post("/socities/fetch_one", async (req, res) => {
        //   const user = users.find(user => user.name == req.body.name)
        let body = req.body;

        list_of_column = await indexHelper.fetch_column_names("socities");
        let jsonData = await indexHelper.body_helper_function(body,list_of_column);
        console.log(list_of_column);

        societies
          .fetch_one_society(jsonData)
          .then((result) => {
            console.log(result);
            if (result) {
              return res
                .status(200)
                .json({ message: "Adding society Successful", status_code: 3001,result: result });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      });


    app.post("/socities/add", async (req, res) => {
    //   const user = users.find(user => user.name == req.body.name)
    let body = req.body;


    list_of_column = await indexHelper.fetch_column_names("socities");
    // let jsonData = await indexHelper.body_helper_function(body,list_of_column);

    


    societies
      .add_society(jsonData)
      .then((result) => {
        console.log(result);
        if (result) {
          return res
            .status(200)
            .json({ message: "Adding society Successful", status_code: 3001,result: result });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });


  app.post("/socities/update", async (req, res) => {
    //   const user = users.find(user => user.name == req.body.name)
    let body = req.body;

    
    list_of_column = await indexHelper.fetch_column_names("socities");
    //let jsonData = await indexHelper.body_helper_function(body,list_of_column);
    console.log(list_of_column);
    
    jsonData = {
      data:{
        "key1":"value1",
        "key2":"value2",
        "key3":"value3",
      },
      where:
      {
        $or:[{
      'accountant_id':'223dsd','id':'absaea'}]}
        
    };
    //console.log(list_of_column);


    societies
      .update_society(jsonData)
      .then((result) => {
        console.log(result);
        if (result) {
          return res
            .status(200)
            .json({ message: "updating society Successful", status_code: 3200,result: result });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });


  app.post("/societies/delete", async (req, res) => {
    let body = req.body;
    let society_id = body.society_id;
    let auditor_id = body.auditor_id;

    console.log(list_of_column);

    let jsonData = {
      society_id: society_id,
      auditor_id: auditor_id

    };
    societies
      .delete_society(jsonData)
      .then((result) => {
        console.log(result);
        if (result) {
          return res
            .status(200)
            .json({ message: "deleting society Successful", status_code: 3400,result: result });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });

};

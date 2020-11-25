const index = require("../controllers/index");
const client = require("../db");

const body_helper_function_const = function body_helper_function(body, list_of_value = []){

  // body, list of things we want too check
  returnObj = {}
  list_of_value.forEach(element => {
      if (body[element]){
          returnObj[element] = body[element];
      }
  });
  return returnObj;
}
exports.body_helper_function = body_helper_function_const

  exports.fetch_column_names = async function fetch_column_names(tablename){
      // to get all the column available
    const fetch_columns_query = "SELECT column_name FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = $1";
    // tablename
    const table_name = [tablename];
    // list of column name in that table 
    let column_names = []
    await client.query(fetch_columns_query, table_name).then((result) => {
      result.rows.forEach(element => {
        column_names.push(element.column_name)
      });
    }).catch((error) => {
      return false
    })
    return column_names;
  }

exports.init = function(app){


    // app.get("/", (req, res) => {
    //     console.log("Hello World!");
    //     res.render("index.html")
    // })
    
    // app.post("/login", (req, res) => {
    //     console.log("Inside Login Function");
    //     let body = req.body;
    //     console.log("body", body);
    //     const result = index.login(body);
    //     if (result){
    //         return res.status(200).json({status_code:2000, message:"Inserted data into table USERS successfully!"});
    //     }
    //     else{
    //         return res.status(400).json({status_code:2400, message:"Failed to insert into tables!"});
    //     }
    // })

    // app.get('/users',(req,res) =>{
    //     res.json(users)
    //   });
      
      
      
    //   app.post('/users',async (req,res) =>{
    //       try {
    //           const hashed_password = await bcrypt.hash(req.body.password,10);
    //           const user = { name:req.body.name , password:hashed_password    }
    //           users.push(user)
    //           res.send(201).send() 
              
    //       } catch{
    //           res.status(500).send()
              
    //       }
    //   })
      
      
      app.post('/auth/login',async (req,res) =>{
        //   const user = users.find(user => user.name == req.body.name)
        let body = req.body;
        list_of_value_expected = ["username", "password"]
        
        data_in_body = body_helper_function_const(body, list_of_value_expected);

        if (!data_in_body.username || !data_in_body.password){
          return res.status(200).json({"message":"username or password not supplied for login", "status_code":1500})
        }

        console.log(data_in_body);

        let jsonData = {"username":data_in_body.username, "password" : data_in_body.password}
        index.login(jsonData).then((result) => {
            console.log("obtained data from query", result);
            if (result.rows.length == 1 ){
                return res.status(200).json({"message":"login successfull", "status_code":1000})
            }
            else if(result.rows.length > 1){
              return res.status(200).json({"message":"something went wrong. Please contact administrator!", "status_code":1500})
            }
            else{
              return res.status(200).json({"message":"login failed", "status_code":1404})
            }
        })
        .catch((error)=>{
            console.log(error);
        })
      })
}
// // // // const express = require("express");
// // // // const port = 8000;
// // // // const app = express();

// // // // app.get("/", (req, res) => {
// // // //     res.send('Hello World from the get request');
// // // // });

// // // // app.post("/home", (req, res) => {
// // // //     res.send("Hello world from the post request");
// // // // });

// // // // app.listen(port, () => {
// // // //     console.log(`Server is running on the port no. ${port}`);
// // // // })

// // // /**
// // //   You need to create an express HTTP server in Node.js which will handle the logic of a todo list app.
// // //   - Don't use any database, just store all the data in an array to store the todo list data (in-memory)
// // //   - Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)

// // //   Each todo has a title and a description. The title is a string and the description is a string.
// // //   Each todo should also get an unique autogenerated id every time it is created
// // //   The expected API endpoints are defined below,
// // //   1.GET /todos - Retrieve all todo items
// // //     Description: Returns a list of all todo items.
// // //     Response: 200 OK with an array of todo items in JSON format.
// // //     Example: GET http://localhost:3000/todos

// // //   2.GET /todos/:id - Retrieve a specific todo item by ID
// // //     Description: Returns a specific todo item identified by its ID.
// // //     Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
// // //     Example: GET http://localhost:3000/todos/123

// // //   3. POST /todos - Create a new todo item
// // //     Description: Creates a new todo item.
// // //     Request Body: JSON object representing the todo item.
// // //     Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
// // //     Example: POST http://localhost:3000/todos
// // //     Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }

// // //   4. PUT /todos/:id - Update an existing todo item by ID
// // //     Description: Updates an existing todo item identified by its ID.
// // //     Request Body: JSON object representing the updated todo item.
// // //     Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
// // //     Example: PUT http://localhost:3000/todos/123
// // //     Request Body: { "title": "Buy groceries", "completed": true }

// // //   5. DELETE /todos/:id - Delete a todo item by ID
// // //     Description: Deletes a todo item identified by its ID.
// // //     Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
// // //     Example: DELETE http://localhost:3000/todos/123

// // //     - For any other route not defined in the server return 404

// // //   Testing the server - run `npm run test-todoServer` command in terminal
// // //  */
// // //   const express = require("express");
// // //   const bodyParser = require("body-parser");
// // //   const fs = require("fs");
// // //   const path = require("path");
// // // const { title } = require("process");
// // //   const port = 3000;

// // //   const app = express();

// // //   //This is the Middleware to parse the json request body
// // //   app.use(bodyParser.json());

// // //   //Arrays to store todo Item
// // //   let todos = [];

// // //   //Below is the helper function to save the todos in a file
// // //   function saveTodoasaFile() {
// // //     const filepath = path.join(__dirname, 'todos.json');
// // //     fs.writeFileSync(filepath, JSON.stringify(todos), 'utf-8');
// // //   }

// // //   //The below is the post request to save the todo item inside a file
// // //   app.post("/todos", (req, res) => {
// // //     const {title , description,isCompleted} = req.body;
// // //     const newtodo = {
// // //       id : todos.length + 1,
// // //       title,
// // //       description,
// // //       isCompleted
// // //     };
// // //     todos.push(newtodo);
// // //     saveTodoasaFile();
// // //     res.status(201).json({id : newtodo.id});
// // //   })

// // //   app.get("/todos", (req,res) => {
// // //     res.status(200).json(todos);
// // //   });

// // //  function loaddatafromfile()
// // //  {
// // //   const filepath = path.join(__dirname, 'todos.json');
// // //   if(fs.existsSync(filepath))
// // //   {
// // //     const fileData = fs.readFileSync(filepath, 'utf-8');
// // //     todos = JSON.parse(fileData);
// // //   }
// // //  }

// // //  loaddatafromfile()

// // //   app.get("/todos/:id", (req,res) => {
// // //     var id = req.params.id;
// // //     const index = todos.find((item) => item.id === parseInt(id));
// // //     if(index)
// // //     {
// // //       res.status(201).json(index);
// // //     }
// // //     else
// // //     {
// // //       res.status(404).send("Something went wrong");
// // //     }
// // //   });

// // //   app.delete("/todos/:id", (req,res) => {
// // //     var id = req.params.id;
// // //     const index = todos.findIndex((item) => item.id === parseInt(id));
// // //     if(index !== -1)
// // //     {
// // //      const deletedTodo =  todos.splice(index, 1);
// // //      saveTodoasaFile();
// // //       res.status(200).json(deletedTodo);
// // //     }
// // //     else
// // //     {
// // //       res.status(404).send("Something went wrong while deleting the data from the json file");
// // //     }
// // //   });

// // //   app.delete("/todos", (req,res) => {
// // //     todos = [];
// // //     saveTodoasaFile();
// // //     res.status(201).send("All Todo's items has been deleted from the json file");
// // //   })

// // //   app.put("/todos/:id", (req,res) => {
// // //     var id = req.params.id;
// // //     const {title, description, isCompleted} = req.body;
// // //     const index = todos.findIndex((item) => item.id === parseInt(id));
// // //     if(index !== -1)
// // //     {
// // //       todos[index] = {
// // //         id : parseInt(id),
// // //         title : title,
// // //         description : description,
// // //         isCompleted : isCompleted
// // //       };
// // //       saveTodoasaFile();

// // //       res.status(200).json(todos[index]);
// // //     }else
// // //     {
// // //       res.status(404).send("An Error Occured while updating");
// // //     }
// // //   })
// // //   app.listen(port, (req, res) => {
// // //     console.log(`Server is running on the port no. ${port}`);
// // //   })

// // //   module.exports = app;
// // const express = require("express");

// // const calculateSumOfNNumbers = (n) => {
// //   let ans = 0;
// //   for(let i=0; i<n; i++)
// //   {
// //     ans = ans + i;
// //   }
// //   return ans;
// // }

// // const app = express();
// // app.get("/", (req, res) => {
// //   const n = req.query.n;
// //   const result = calculateSumOfNNumbers(n);
// //   res.send(result.toString());
// // })

// // app.listen(3000);

// // const express = require("express");
// // const app = express();
// // app.use(express.json());
// // let users = [
// //   {
// //     id: 1,
// //     name: "John",
// //     kidneys: [
// //       { id: 1, health: true },
// //     ],
// //   },
// // ];

// // app.get("/", (req, res) => {
// //   res.status(200).json(users);
// // });

// // app.post("/", (req, res) => {
// //   const {name , kidneys} = req.body;
// //   const id = users.length + 1;
// //   const newUser = {
// //     id, name, kidneys
// //   };
// //    users.push(newUser);
// //   res.status(200).json(newUser);
// // });

// // app.put("/:id", (req, res) => {
// //   const id = req.params.id;
// //   const {name , kidneys} = req.body;
// //   const index = users.findIndex((item) => item.id === parseInt(id));
// //   if(index != -1)
// //   {
// //     users[index] = {
// //       id : parseInt(id),
// //       name : name,
// //       kidneys : kidneys
// //     };
// //     res.status(200).json(users[index]);

// //   }
// //   else
// //   {
// //     res.status(404).send("Something went wrong");
// //   }
// // });

// // app.delete("/:id", (req, res) => {
// //   const id = req.params.id;
// //   const index = users.findIndex((item) => item.id === parseInt(id));
// //   if(index != -1)
// //   {
// //     users.splice(index, 1);
// //     res.status(200).send("User Deleted Successfully");
// //   }
// //   else
// //   {
// //     res.status(404).send("Something went wrong");
// //   }
// // })

// // app.listen(3000);

// // const express = require("express");
// // const app = express();

// // const users = [{
// //   name : "john",
// //   Kidneys : [{
// //     healthy : false
// //   }]
// // }]

// // app.use(express.json())
// // app.get("/", (req, res) => {
// //   const johnkidneys = users[0].Kidneys;
// //   const numberOfKidneys = johnkidneys.length;
// //   const numberofHealthyKidneys = 0;
// //   for(let i=0; i<johnkidneys.length; i++)
// //   {
// //     if(johnkidneys[i].healthy)
// //     {
// //       numberofHealthyKidneys = numberofHealthyKidneys + 1;
// //     }
// //   }

// //   const numberofUnhealthyKidneys = numberOfKidneys - numberofHealthyKidneys;
// //   res.json({
// //     johnkidneys,
// //     numberOfKidneys,
// //     numberofHealthyKidneys,
// //     numberofUnhealthyKidneys
// //   });
// // })

// // app.post("/", (req,res) => {
// //   const isHealthy = req.body.isHealthy;
// //   users[0].Kidneys.push({
// //     healthy : isHealthy
// //   });
// //   res.json({
// //       msg:"Done"
// //   })
// // });

// // app.put("/", (req,res) => {
// //   const id = req.params.id;
// //   const index = users.findIndex((item) => item.id === parseInt(id));
// //   const isHealthy = req.body.isHealthy;
// //   users[index].Kidneys.push({
// //     healthy : isHealthy
// //   });
// //   res.json({
// //     users
// //   })

// // })

// // app.put("/all", (req, res) => {
// //   for(let i=0; i<users[0].Kidneys.length; i++)
// //   {
// //     users[0].Kidneys.isHealthy = true;
// //   }
// // })

// // app.delete("/", (req, res) => {
// //   const newKidneys = [];
// //   for(let i=0; i<users[0].Kidneys.length; i++)
// //   {
// //     if(users[0].Kidneys[i].healthy)
// //     {
// //       newKidneys.push({
// //         Kidneys : true
// //       })
// //     }
// //   }

// //   users[0].Kidneys = newKidneys;
// //   res.json({msg : "done"});
// // })

// // app.listen(3000);

// let input = [1,2,3,4,5];

// let newArray = [];
// const arr = [2,3,4];
// const ans = arr.filter((i) => {
//   if(i % 2 == 0)
//   {
//     return true;
//   }
//   else
//   {
//     return false;
//   }
// });
// const ans1 = arr.filter((item) => item % 2 == 0 ? true : false);
// // console.log(ans1);

// const ans11 = arr.filter((item) => item % 2 == 0 ? true : false);
// // console.log(ans11);

// // console.log(ans);

// newArray = input.map((item) => item * 2);
// newArray = input.filter((item) => item % 2 != 0);
// // console.log(newArray);

// //Another Assignment
// //Create a map function that takes an array and a transform function as an input and returns the transformed array as input

// const mapArray = (arrs1, transformcArr) => {
//   const newTransformedArray = [];
//   for(let i=0; i<arrs1.length; i++)
//   {
//     newTransformedArray.push(transformcArr(arrs1[i]));
//   }

//   return newTransformedArray;
// }

// const numbers = [1,2,3,4,5];

// function square(x)
// {
//   return x * x;
// }

// const squareNumbers = mapArray(numbers, square);
// console.log("Square Numbers are " , squareNumbers);

// const evenNumbers= [2,4,6,8];
// const cubeRoot = (x) => {
//   return x * x * x
// };

// const mappedArray = (arrays, transformedArray) => {
//   const newTransformedArray1 = [];
//   for(let i=0; i<arrays.length; i++)
//   {
//     newTransformedArray1.push(transformedArray(arrays[i]));
//   }

//   return newTransformedArray1;
// };

// const cubeRootOfANumber = mappedArray(evenNumbers, cubeRoot);
// console.log("Cube Root of a Number" ,cubeRootOfANumber);

//Jwt lessons

// const express = require("express");
// const jwt = require("jsonwebtoken");
// const jwtPassword = "123456";

// const app = express();

// const ALL_USERS = [
//   {
//     username: "harkirat@gmail.com",
//     password: "123",
//     name: "harkirat singh",
//   },
//   {
//     username: "raman@gmail.com",
//     password: "123321",
//     name: "Raman singh",
//   },
//   {
//     username: "priya@gmail.com",
//     password: "123321",
//     name: "Priya kumari",
//   },
// ];

// function userExists(username, password) {
//   // write logic to return true or false if this user exists
//   // in ALL_USERS array
//   let userExists = false;
//   for(let i=0; i<ALL_USERS.length; i++)
//   {
//     if(ALL_USERS[i].username === username && ALL_USERS[i].password === password){
//       userExists = true;
//     }
//   }
//   return userExists;
// }
// app.use(express.json());
// app.post("/signin", function (req, res) {
//   const username = req.body.username;
//   const password = req.body.password;

//   if (!userExists(username, password)) {
//     return res.status(403).json({
//       msg: "User doesnt exist in our in memory db",
//     });
//   }

//   var token = jwt.sign({ username: username }, jwtPassword);
//   return res.json({
//     token,
//   });
// });

// app.get("/users", function (req, res) {
//   const token = req.headers.authorization;

//   const decoded = jwt.verify(token, jwtPassword);
//   const username = decoded.username;
//   res.json({
//     users: ALL_USERS.filter((value) => {
//       if(value.username === username)
//       {
//         return false;
//       }
//       else
//       {
//         return true;
//       }
//     })
//   });
// });

// app.listen(3000);
// const express = require('express');
// const zod = require('zod');
// const app = express();


//   const userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String,
//   });

//   const User = mongoose.model("User", userSchema);

//   const user = new User({
//     name: "Harkirat Singh",
//     email: "Harkirat@gmail.com",
//     password: "harkirat",
//   });

// const schemaa = zod.object({
//   email : zod.string(),
//   password : zod.string(),
//   country : zod.literal('IN').or(zod.literal('US')),
//   kidneys : zod.array(zod.number()) 
// })


// app.use(express.json());

// app.post("/health-checkup", (req,res) => {
//   const kidneys = req.body.kidneys;
//   const kidneyLength = kidneys.length;
//   const response = schema.safeParse(kidneys);
//   res.send({
//     response
//   })
// });

// app.use((err,req,res,next) => {
//   res.json({
//     msg : "Sorry something is up with the server"
//   })
// });

// app.listen(3000);


const mongoose = require('mongoose');
mongoose.connect(
  "mongodb+srv://@cluster0.syeyq.mongodb.net/user_app?retryWrites=true&w=majority",
  {useNewUrlParser : true, useUnifiedTopology : true})
  .then(() => {
    console.log("Database connection Successful");
  
  const userSchema = new mongoose.Schema({
    name : String, 
    email : String, 
    password : String
  });

  const User = mongoose.model("User", userSchema);

  const user = new User({
    name : "Rohit kumar",
    email : "rohit@gmail.com",
    password : "123456"
  });
  user.save()
  .then(() => console.log("User saved Successfully"))
  .catch(err => console.log("Error saving User",err));
}).catch(err => console.log("Database connection error", err));


// app.listen(3000);
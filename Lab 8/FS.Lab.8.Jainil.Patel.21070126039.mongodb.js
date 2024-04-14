const fs = require("fs");

// Function to save console output to a file
function saveConsoleLogToFile(logs, filename) {
  fs.writeFileSync(filename, logs.join("\n"), { flag: "a" });
}

// Array to store console logs
let consoleLogs = [];

// Redefine console.log to also save the logs to an array
const originalConsoleLog = console.log;
console.log = function () {
  originalConsoleLog.apply(console, arguments);
  consoleLogs.push(Array.from(arguments).join(" "));
};

const questions = [
  {
    number: 1,
    question: "Create Database: Create a MongoDB database named AIML.",
  },
  {
    number: 2,
    question:
      "Create Collection: Create a collection named employee within the AIML database.",
  },
  {
    number: 3,
    question:
      "Import Employee Records: Import employee records from a JSON file into the employee collection. Save the provided data in a JSON file and use it for import in MongoDB.",
  },
  {
    number: 4,
    question:
      "insertOne: Inserts a single document into the collection. { 'Id': 21, 'Name': 'John Doe', 'Project_id': 2, 'Hrs_worked': 35 }",
  },
  {
    number: 5,
    question:
      "insertMany: Inserts multiple documents into the collection. { 'Id': 22, 'Name': 'Jane Smith', 'Project_id': 1, 'Hrs_worked': 28 }, { 'Id': 23, 'Name': 'Alice Johnson', 'Project_id': 3, 'Hrs_worked': 42 }",
  },
  {
    number: 6,
    question:
      "updateOne: Updates a single document that matches the filter. { 'Id': 21 }, { $set: { 'Hrs_worked': 40 } }",
  },
  {
    number: 7,
    question:
      "updateMany: Updates multiple documents that match the filter. { 'Hrs_worked': { $gt: 30 } }, { $set: { 'Overtime': true } }",
  },
  {
    number: 8,
    question: "find an employee by their ID.",
  },
  {
    number: 9,
    question:
      "How would you retrieve all employees who are assigned to a specific project ID?",
  },
  {
    number: 10,
    question:
      "Write a query to find employees who have worked more than 30 hours.",
  },
  {
    number: 11,
    question:
      "Can you demonstrate how to use the $gt operator to find employees who are older than 40?",
  },
  {
    number: 12,
    question: "Explain the purpose of sorting in MongoDB queries.",
  },
  {
    number: 13,
    question:
      "Sort the Employee table based on Age in Ascending order and display.",
  },
  {
    number: 14,
    question:
      "Sort the Employee table based on Hrs_worked in Descending order and display.",
  },
  {
    number: 15,
    question:
      "Find Employee whose age is greater than 30 and Hrs_worked greater than 20.",
  },
  {
    number: 16,
    question:
      "Find Employee whose Gender is Male or Hrs_worked greater than 25.",
  },
  {
    number: 17,
    question: "Find Employee whose Project_id is not 3.",
  },
  {
    number: 18,
    question:
      "Write a MongoDB query to find all employees who are between the ages of 25 and 35.",
  },
  {
    number: 19,
    question:
      "How would you retrieve employees who have worked between 20 and 30 hours?",
  },
  {
    number: 20,
    question:
      "Write a query to find employees who are either working on Project 1 or Project 2.",
  },
];

n2 = "\n\n";
n1 = "\n";

// 1. Create Database: Create a MongoDB database named AIML.
out1 = use("AIML");
code1 = `use('AIML');`;

//print question and output in proper format
console.log("Question 1:", questions[0].question, n1);
console.log("Code:", code1, n1);
console.log("Output:", out1, n2);

// // 2. Create Collection: Create a collection named employee within the AIML database.
out2 = db.createCollection("employee");
code2 = `db.createCollection('employee');`;

console.log("Question 2:", questions[1].question, n1);
console.log("Code:", code2, n1);
console.log("Output:", out2, n2);

// 3. Import Employee Records: Import employee records from a JSON file into the employee collection.
//Save the following data in a json file and use it for import in Mongodb.

const employeeData = JSON.parse(fs.readFileSync("employee.json"));
out3 = db.employee.insertMany(employeeData);

code3 =
  `const employeeData = JSON.parse(fs.readFileSync('employee.json'));` +
  "\n" +
  `out3 = db.employee.insertMany(employeeData);`;

console.log("Question 3:", questions[1].question, n1);
console.log("Code:", code3, n1);
console.log("Output:", out3, n2);

// 4. insertOne: Inserts a single document into the collection.
// { "Id": 21, "Name": "John Doe", "Project_id": 2, "Hrs_worked": 35 }

out4 = db.employee.insertOne({
  Id: 21,
  Name: "John Doe",
  Project_id: 2,
  Hrs_worked: 35,
});
code4 = `db.employee.insertOne({ "Id": 21, "Name": "John Doe", "Project_id": 2, "Hrs_worked": 35 });`;

console.log("Question 4:", questions[3].question, n1);
console.log("Code: ", code4, n1);
console.log("Output:", out4, n2);

// 5. insertMany: Inserts multiple documents into the collection.
// { "Id": 22, "Name": "Jane Smith", "Project_id": 1, "Hrs_worked": 28 },
// { "Id": 23, "Name": "Alice Johnson", "Project_id": 3, "Hrs_worked": 42 }

out5 = db.employee.insertMany([
  { Id: 22, Name: "Jane Smith", Project_id: 1, Hrs_worked: 28 },
  { Id: 23, Name: "Alice Johnson", Project_id: 3, Hrs_worked: 42 },
]);

code5 = `db.employee.insertMany([ { "Id": 22, "Name": "Jane Smith", "Project_id": 1, "Hrs_worked": 28 }, { "Id": 23, "Name": "Alice Johnson", "Project_id": 3, "Hrs_worked": 42 } ]);`;
console.log("Question 5:", questions[4].question, n1);
console.log("Code: ", code5, n1);
console.log("Output:", out5, n2);

// 6. updateOne: Updates a single document that matches the filter.
// { "Id": 21 }, { $set: { "Hrs_worked": 40 } }
out6 = db.employee.updateOne({ Id: 21 }, { $set: { Hrs_worked: 40 } });
code6 = `db.employee.updateOne( { "Id": 21 }, { $set: { "Hrs_worked": 40 } });`;
console.log("Question 6:", questions[5].question, n1);
console.log("Code:", code6, n1);
console.log("Output:", out6, n2);

// 7. updateMany: Updates multiple documents that match the filter.
// { "Hrs_worked": { $gt: 30 } }, { $set: { "Overtime": true } }

out7 = db.employee.updateMany(
  { Hrs_worked: { $gt: 30 } },
  { $set: { Overtime: true } }
);
code7 = `db.employee.updateMany( { "Hrs_worked": { $gt: 30 } }, { $set: { "Overtime": true } });`;
console.log("Question 7:", questions[6].question, n1);
console.log("Code:", code7, n1);
console.log("Output:", out7, n2);

// 8. find an employee by their ID.
out8 = db.employee.findOne({ Id: 21 });
code8 = `db.employee.findOne({ Id: 21 });`;
console.log("Question 8:", questions[7].question, n1);
console.log("Code:", code8, n1);
console.log("Output:", out8, n2);

// 9. How would you retrieve all employees who are assigned to a specific project ID?

out9 = db.employee.find({ Project_id: 2 });
code9 = `db.employee.find({ Project_id: 2 });`;
console.log("Question 9:", questions[8].question), n1;
console.log("Code:", code9, n1);
console.log("Output:", out9, n2);

// 10. Write a query to find employees who have worked more than 30 hours.
out10 = db.employee.find({ Hrs_worked: { $gt: 30 } });
code10 = `db.employee.find({ Hrs_worked: { $gt: 30 } });`;
console.log("Question 10:", questions[9].question, n1);
console.log("Code:", code10, n1);
console.log("Output:", out10, n2);

// 11. Can you demonstrate how to use the $gt operator to find employees who are older than 40?

out11 = db.employee.find({ Age: { $gt: 40 } });
code11 = `db.employee.find({ Age: { $gt: 40 } });`;
console.log("Question 11:", questions[10].question, n1);
console.log("Code:", code11, n1);
console.log("Output:", out11, n2);

// 12. Explain the purpose of sorting in MongoDB queries.
out12 =
  "Sorting in MongoDB organizes query results based on specified fields, facilitating data analysis and presentation, improving performance with indexed fields, and enhancing user experience through ordered document retrieval.";
console.log("Question 12:", questions[11].question, n1);
console.log("Answer:", out12, n2);

// 13. Sort the Employee table based on Age in Ascending order and display.
out13 = db.employee.find().sort({ Age: 1 });
code13 = `db.employee.find().sort({ Age: 1 });`;

console.log("Question 13:", questions[12].question, n1);
console.log("Code:", code13, n1);
console.log("Output:", out13, n2);

// 14. Sort the Employee table based on Hrs_worked in Descending order and display.
out14 = db.employee.find().sort({ Hrs_worked: -1 });
code14 = `db.employee.find().sort({ Hrs_worked: -1 });`;
console.log("Question 14:", questions[13].question, n1);
console.log("Code:", code14, n1);
console.log("Output:", out14, n2);

// 15. Find Employee whose age is greater then 30 and Has_Worked greater then 20.

out15 = db.employee.find({ Age: { $gt: 30 }, Hrs_worked: { $gt: 20 } });
code15 = `db.employee.find({ Age: { $gt: 30 }, Hrs_worked: { $gt: 20 } });`;
console.log("Question 15:", questions[14].question, n1);
console.log("Code:", code15, n1);
console.log("Output:", out15, n2);

// 16. Find Employee whose Gender is Male or Has_Worked greater then 25.
out16 = db.employee.find({
  $or: [{ Gender: "Male" }, { Hrs_worked: { $gt: 25 } }],
});
code16 = `db.employee.find({ $or: [{ Gender: "Male" }, { Hrs_worked: { $gt: 25 } }] });`;
console.log("Question 16:", questions[15].question, n1);
console.log("Code:", code16, n1);
console.log("Output:", out16, n2);

// 17. Find Employee whose Project_id is not 3.
out17 = db.employee.find({ Project_id: { $ne: 3 } });
code17 = `db.employee.find({ Project_id: { $ne: 3 } });`;
console.log("Question 17:", questions[16].question, n1);
console.log("Code:", code17, n1);
console.log("Output:", out17, n2);

// 18. Write a MongoDB query to find all employees who are between the ages of 25 and 35.
out18 = db.employee.find({ Age: { $gte: 25, $lte: 35 } });
code18 = `db.employee.find({ Age: { $gte: 25, $lte: 35 } });`;
console.log("Question 18:", questions[17].question, n1);
console.log("Code:", code18, n1);
console.log("Output:", out18, n2);

// 19. How would you retrieve employees who have worked between 20 and 30 hours?
out19 = db.employee.find({ Hrs_worked: { $gte: 20, $lte: 30 } });
code19 = `db.employee.find({ Hrs_worked: { $gte: 20, $lte: 30 } });`;
console.log("Question 19:", questions[18].question, n1);
console.log("Code:", code19, n1);
console.log("Output:", out19, n2);

// 20. Write a query to find employees who are either working on Project 1 or Project 2.
out20 = db.employee.find({ Project_id: { $in: [1, 2] } });
code20 = `db.employee.find({ Project_id: { $in: [1, 2] } });`;
console.log("Question 20:", questions[19].question, n1);
console.log("Code:", code20, n1);
console.log("Output:", out20, n2);

saveConsoleLogToFile(consoleLogs, "console_logs.txt");

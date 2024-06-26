Question 1 : Create Database: Create a MongoDB database named AIML.

Code: use('AIML');

Output: switched to db AIML

Question 2 : Create Collection: Create a collection named employee within the AIML database.

Code: db.createCollection('employee');

Output: {
    ok: 1
}

Question 1 : Create Collection: Create a collection named employee within the AIML database.

Code: 
const employeeData = JSON.parse(fs.readFileSync('employee.json'));
out3 = db.employee.insertMany(employeeData);

Output: {
    acknowledged: true,
    insertedIds: {
        '0': ObjectId('661af00b38ed18538f6bc56f'),
        '1': ObjectId('661af00b38ed18538f6bc570'),
        '2': ObjectId('661af00b38ed18538f6bc571'),
        '3': ObjectId('661af00b38ed18538f6bc572'),
        '4': ObjectId('661af00b38ed18538f6bc573'),
        '5': ObjectId('661af00b38ed18538f6bc574'),
        '6': ObjectId('661af00b38ed18538f6bc575'),
        '7': ObjectId('661af00b38ed18538f6bc576'),
        '8': ObjectId('661af00b38ed18538f6bc577'),
        '9': ObjectId('661af00b38ed18538f6bc578'),
        '10': ObjectId('661af00b38ed18538f6bc579'),
        '11': ObjectId('661af00b38ed18538f6bc57a'),
        '12': ObjectId('661af00b38ed18538f6bc57b'),
        '13': ObjectId('661af00b38ed18538f6bc57c'),
        '14': ObjectId('661af00b38ed18538f6bc57d'),
        '15': ObjectId('661af00b38ed18538f6bc57e'),
        '16': ObjectId('661af00b38ed18538f6bc57f'),
        '17': ObjectId('661af00b38ed18538f6bc580'),
        '18': ObjectId('661af00b38ed18538f6bc581'),
        '19': ObjectId('661af00b38ed18538f6bc582')
    }
}

Question 4 : insertOne: Inserts a single document into the collection. 

{
    'Id': 21,
    'Name': 'John Doe',
    'Project_id': 2,
    'Hrs_worked': 35
}

Code: db.employee.insertOne({
    "Id": 21,
    "Name": "John Doe",
    "Project_id": 2,
    "Hrs_worked": 35
});

Output: {
    acknowledged: true,
    insertedId: ObjectId('661af00b38ed18538f6bc583')
}

Question 5 : insertMany: Inserts multiple documents into the collection. 
{
    'Id': 22,
    'Name': 'Jane Smith',
    'Project_id': 1,
    'Hrs_worked': 28
},
{
    'Id': 23,
    'Name': 'Alice Johnson',
    'Project_id': 3,
    'Hrs_worked': 42
}

Code: db.employee.insertMany([{
    "Id": 22,
    "Name": "Jane Smith",
    "Project_id": 1,
    "Hrs_worked": 28
},
{
    "Id": 23,
    "Name": "Alice Johnson",
    "Project_id": 3,
    "Hrs_worked": 42
}]);

Output: {
    acknowledged: true,
    insertedIds: {
        '0': ObjectId('661af00b38ed18538f6bc584'),
        '1': ObjectId('661af00b38ed18538f6bc585')
    }
}

Question 6 : updateOne: Updates a single document that matches the filter. 
{
    'Id': 21
},
{
    $set: {
        'Hrs_worked': 40
    }
}

Code: db.employee.updateOne({
    "Id": 21
},
{
    $set: {
        "Hrs_worked": 40
    }
});

Output: {
    acknowledged: true,
    insertedId: null,
    matchedCount: 1,
    modifiedCount: 1,
    upsertedCount: 0
}

Question 7 : updateMany: Updates multiple documents that match the filter. 
{
    'Hrs_worked': {
        $gt: 30
    }
},
{
    $set: {
        'Overtime': true
    }
}

Code: db.employee.updateMany({
    "Hrs_worked": {
        $gt: 30
    }
},
{
    $set: {
        "Overtime": true
    }
});

Output: {
    acknowledged: true,
    insertedId: null,
    matchedCount: 13,
    modifiedCount: 13,
    upsertedCount: 0
}

Question 8 : find an employee by their ID.

Code: db.employee.findOne({
    Id: 21
});

Output: {
    _id: ObjectId('661af00b38ed18538f6bc583'),
    Id: 21,
    Name: 'John Doe',
    Project_id: 2,
    Hrs_worked: 40,
    Overtime: true
}

Question 9 : How would you retrieve all employees who are assigned to a specific project ID ? 
Code: db.employee.find({
    Project_id: 2
});

Output: {
    cursorHasMore: false,
    documents: [{
        _id: ObjectId('661af00b38ed18538f6bc571'),
        Id: 3,
        Name: 'Hannah Brown',
        Age: 33,
        Gender: 'Female',
        Project_id: 2,
        Hrs_worked: 36,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc572'),
        Id: 4,
        Name: 'Hannah Davis',
        Age: 31,
        Gender: 'Female',
        Project_id: 2,
        Hrs_worked: 22
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc574'),
        Id: 6,
        Name: 'Hannah Davis',
        Age: 57,
        Gender: 'Male',
        Project_id: 2,
        Hrs_worked: 28
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc576'),
        Id: 8,
        Name: 'David Williams',
        Age: 60,
        Gender: 'Male',
        Project_id: 2,
        Hrs_worked: 34,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc579'),
        Id: 11,
        Name: 'Grace Wilson',
        Age: 42,
        Gender: 'Female',
        Project_id: 2,
        Hrs_worked: 15
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc57a'),
        Id: 12,
        Name: 'Isaac Smith',
        Age: 32,
        Gender: 'Male',
        Project_id: 2,
        Hrs_worked: 23
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc580'),
        Id: 18,
        Name: 'Isaac Wilson',
        Age: 32,
        Gender: 'Female',
        Project_id: 2,
        Hrs_worked: 31,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc583'),
        Id: 21,
        Name: 'John Doe',
        Project_id: 2,
        Hrs_worked: 40,
        Overtime: true
    }]
}

Question 10 : Write a query to find employees who have worked more than 30 hours.

Code: db.employee.find({
    Hrs_worked: {
        $gt: 30
    }
});

Output: {
    cursorHasMore: false,
    documents: [{
        _id: ObjectId('661af00b38ed18538f6bc571'),
        Id: 3,
        Name: 'Hannah Brown',
        Age: 33,
        Gender: 'Female',
        Project_id: 2,
        Hrs_worked: 36,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc576'),
        Id: 8,
        Name: 'David Williams',
        Age: 60,
        Gender: 'Male',
        Project_id: 2,
        Hrs_worked: 34,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc577'),
        Id: 9,
        Name: 'Charlie Johnson',
        Age: 49,
        Gender: 'Male',
        Project_id: 3,
        Hrs_worked: 32,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc578'),
        Id: 10,
        Name: 'Charlie Johnson',
        Age: 60,
        Gender: 'Male',
        Project_id: 4,
        Hrs_worked: 36,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc57b'),
        Id: 13,
        Name: 'Emma Jones',
        Age: 52,
        Gender: 'Male',
        Project_id: 1,
        Hrs_worked: 33,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc57c'),
        Id: 14,
        Name: 'Isaac Wilson',
        Age: 21,
        Gender: 'Female',
        Project_id: 3,
        Hrs_worked: 32,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc57d'),
        Id: 15,
        Name: 'Hannah Davis',
        Age: 43,
        Gender: 'Male',
        Project_id: 4,
        Hrs_worked: 32,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc57e'),
        Id: 16,
        Name: 'Alice Moore',
        Age: 29,
        Gender: 'Male',
        Project_id: 1,
        Hrs_worked: 39,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc57f'),
        Id: 17,
        Name: 'David Miller',
        Age: 25,
        Gender: 'Female',
        Project_id: 4,
        Hrs_worked: 32,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc580'),
        Id: 18,
        Name: 'Isaac Wilson',
        Age: 32,
        Gender: 'Female',
        Project_id: 2,
        Hrs_worked: 31,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc581'),
        Id: 19,
        Name: 'Charlie Williams',
        Age: 59,
        Gender: 'Female',
        Project_id: 1,
        Hrs_worked: 31,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc583'),
        Id: 21,
        Name: 'John Doe',
        Project_id: 2,
        Hrs_worked: 40,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc585'),
        Id: 23,
        Name: 'Alice Johnson',
        Project_id: 3,
        Hrs_worked: 42,
        Overtime: true
    }]
}

Question 11 : Can you demonstrate how to use the $gt operator to find employees who are older than 40 ?

Code: db.employee.find({
    Age: {
        $gt: 40
    }
});

Output: {
    cursorHasMore: false,
    documents: [{
        _id: ObjectId('661af00b38ed18538f6bc56f'),
        Id: 1,
        Name: 'Charlie Moore',
        Age: 44,
        Gender: 'Male',
        Project_id: 4,
        Hrs_worked: 12
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc573'),
        Id: 5,
        Name: 'Bob Davis',
        Age: 41,
        Gender: 'Female',
        Project_id: 4,
        Hrs_worked: 16
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc574'),
        Id: 6,
        Name: 'Hannah Davis',
        Age: 57,
        Gender: 'Male',
        Project_id: 2,
        Hrs_worked: 28
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc575'),
        Id: 7,
        Name: 'Frank Brown',
        Age: 49,
        Gender: 'Male',
        Project_id: 4,
        Hrs_worked: 30
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc576'),
        Id: 8,
        Name: 'David Williams',
        Age: 60,
        Gender: 'Male',
        Project_id: 2,
        Hrs_worked: 34,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc577'),
        Id: 9,
        Name: 'Charlie Johnson',
        Age: 49,
        Gender: 'Male',
        Project_id: 3,
        Hrs_worked: 32,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc578'),
        Id: 10,
        Name: 'Charlie Johnson',
        Age: 60,
        Gender: 'Male',
        Project_id: 4,
        Hrs_worked: 36,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc579'),
        Id: 11,
        Name: 'Grace Wilson',
        Age: 42,
        Gender: 'Female',
        Project_id: 2,
        Hrs_worked: 15
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc57b'),
        Id: 13,
        Name: 'Emma Jones',
        Age: 52,
        Gender: 'Male',
        Project_id: 1,
        Hrs_worked: 33,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc57d'),
        Id: 15,
        Name: 'Hannah Davis',
        Age: 43,
        Gender: 'Male',
        Project_id: 4,
        Hrs_worked: 32,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc581'),
        Id: 19,
        Name: 'Charlie Williams',
        Age: 59,
        Gender: 'Female',
        Project_id: 1,
        Hrs_worked: 31,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc582'),
        Id: 20,
        Name: 'Frank Miller',
        Age: 55,
        Gender: 'Female',
        Project_id: 4,
        Hrs_worked: 24
    }]
}

Question 12 : Explain the purpose of sorting in MongoDB queries.

Answer: Sorting in MongoDB organizes query results based on specified fields,
facilitating data analysis and presentation,
improving performance with indexed fields,
and enhancing user experience through ordered document retrieval.

Question 13 : Sort the Employee table based on Age in Ascending order and display.

Code: db.employee.find().sort({
    Age: 1
});

Output: {
    cursorHasMore: true,
    documents: [{
        _id: ObjectId('661af00b38ed18538f6bc583'),
        Id: 21,
        Name: 'John Doe',
        Project_id: 2,
        Hrs_worked: 40,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc584'),
        Id: 22,
        Name: 'Jane Smith',
        Project_id: 1,
        Hrs_worked: 28
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc585'),
        Id: 23,
        Name: 'Alice Johnson',
        Project_id: 3,
        Hrs_worked: 42,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc57c'),
        Id: 14,
        Name: 'Isaac Wilson',
        Age: 21,
        Gender: 'Female',
        Project_id: 3,
        Hrs_worked: 32,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc57f'),
        Id: 17,
        Name: 'David Miller',
        Age: 25,
        Gender: 'Female',
        Project_id: 4,
        Hrs_worked: 32,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc57e'),
        Id: 16,
        Name: 'Alice Moore',
        Age: 29,
        Gender: 'Male',
        Project_id: 1,
        Hrs_worked: 39,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc572'),
        Id: 4,
        Name: 'Hannah Davis',
        Age: 31,
        Gender: 'Female',
        Project_id: 2,
        Hrs_worked: 22
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc57a'),
        Id: 12,
        Name: 'Isaac Smith',
        Age: 32,
        Gender: 'Male',
        Project_id: 2,
        Hrs_worked: 23
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc580'),
        Id: 18,
        Name: 'Isaac Wilson',
        Age: 32,
        Gender: 'Female',
        Project_id: 2,
        Hrs_worked: 31,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc571'),
        Id: 3,
        Name: 'Hannah Brown',
        Age: 33,
        Gender: 'Female',
        Project_id: 2,
        Hrs_worked: 36,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc570'),
        Id: 2,
        Name: 'Frank Smith',
        Age: 36,
        Gender: 'Female',
        Project_id: 1,
        Hrs_worked: 12
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc573'),
        Id: 5,
        Name: 'Bob Davis',
        Age: 41,
        Gender: 'Female',
        Project_id: 4,
        Hrs_worked: 16
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc579'),
        Id: 11,
        Name: 'Grace Wilson',
        Age: 42,
        Gender: 'Female',
        Project_id: 2,
        Hrs_worked: 15
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc57d'),
        Id: 15,
        Name: 'Hannah Davis',
        Age: 43,
        Gender: 'Male',
        Project_id: 4,
        Hrs_worked: 32,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc56f'),
        Id: 1,
        Name: 'Charlie Moore',
        Age: 44,
        Gender: 'Male',
        Project_id: 4,
        Hrs_worked: 12
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc575'),
        Id: 7,
        Name: 'Frank Brown',
        Age: 49,
        Gender: 'Male',
        Project_id: 4,
        Hrs_worked: 30
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc577'),
        Id: 9,
        Name: 'Charlie Johnson',
        Age: 49,
        Gender: 'Male',
        Project_id: 3,
        Hrs_worked: 32,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc57b'),
        Id: 13,
        Name: 'Emma Jones',
        Age: 52,
        Gender: 'Male',
        Project_id: 1,
        Hrs_worked: 33,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc582'),
        Id: 20,
        Name: 'Frank Miller',
        Age: 55,
        Gender: 'Female',
        Project_id: 4,
        Hrs_worked: 24
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc574'),
        Id: 6,
        Name: 'Hannah Davis',
        Age: 57,
        Gender: 'Male',
        Project_id: 2,
        Hrs_worked: 28
    }]
}

Question 14 : Sort the Employee table based on Hrs_worked in Descending order and display.

Code: db.employee.find().sort({
    Hrs_worked: -1
});

Output: {
    cursorHasMore: true,
    documents: [{
        _id: ObjectId('661af00b38ed18538f6bc585'),
        Id: 23,
        Name: 'Alice Johnson',
        Project_id: 3,
        Hrs_worked: 42,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc583'),
        Id: 21,
        Name: 'John Doe',
        Project_id: 2,
        Hrs_worked: 40,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc57e'),
        Id: 16,
        Name: 'Alice Moore',
        Age: 29,
        Gender: 'Male',
        Project_id: 1,
        Hrs_worked: 39,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc571'),
        Id: 3,
        Name: 'Hannah Brown',
        Age: 33,
        Gender: 'Female',
        Project_id: 2,
        Hrs_worked: 36,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc578'),
        Id: 10,
        Name: 'Charlie Johnson',
        Age: 60,
        Gender: 'Male',
        Project_id: 4,
        Hrs_worked: 36,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc576'),
        Id: 8,
        Name: 'David Williams',
        Age: 60,
        Gender: 'Male',
        Project_id: 2,
        Hrs_worked: 34,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc57b'),
        Id: 13,
        Name: 'Emma Jones',
        Age: 52,
        Gender: 'Male',
        Project_id: 1,
        Hrs_worked: 33,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc577'),
        Id: 9,
        Name: 'Charlie Johnson',
        Age: 49,
        Gender: 'Male',
        Project_id: 3,
        Hrs_worked: 32,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc57c'),
        Id: 14,
        Name: 'Isaac Wilson',
        Age: 21,
        Gender: 'Female',
        Project_id: 3,
        Hrs_worked: 32,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc57d'),
        Id: 15,
        Name: 'Hannah Davis',
        Age: 43,
        Gender: 'Male',
        Project_id: 4,
        Hrs_worked: 32,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc57f'),
        Id: 17,
        Name: 'David Miller',
        Age: 25,
        Gender: 'Female',
        Project_id: 4,
        Hrs_worked: 32,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc580'),
        Id: 18,
        Name: 'Isaac Wilson',
        Age: 32,
        Gender: 'Female',
        Project_id: 2,
        Hrs_worked: 31,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc581'),
        Id: 19,
        Name: 'Charlie Williams',
        Age: 59,
        Gender: 'Female',
        Project_id: 1,
        Hrs_worked: 31,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc575'),
        Id: 7,
        Name: 'Frank Brown',
        Age: 49,
        Gender: 'Male',
        Project_id: 4,
        Hrs_worked: 30
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc574'),
        Id: 6,
        Name: 'Hannah Davis',
        Age: 57,
        Gender: 'Male',
        Project_id: 2,
        Hrs_worked: 28
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc584'),
        Id: 22,
        Name: 'Jane Smith',
        Project_id: 1,
        Hrs_worked: 28
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc582'),
        Id: 20,
        Name: 'Frank Miller',
        Age: 55,
        Gender: 'Female',
        Project_id: 4,
        Hrs_worked: 24
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc57a'),
        Id: 12,
        Name: 'Isaac Smith',
        Age: 32,
        Gender: 'Male',
        Project_id: 2,
        Hrs_worked: 23
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc572'),
        Id: 4,
        Name: 'Hannah Davis',
        Age: 31,
        Gender: 'Female',
        Project_id: 2,
        Hrs_worked: 22
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc573'),
        Id: 5,
        Name: 'Bob Davis',
        Age: 41,
        Gender: 'Female',
        Project_id: 4,
        Hrs_worked: 16
    }]
}

Question 15 : Find Employee whose age is greater than 30 and Hrs_worked greater than 20.

Code: db.employee.find({
    Age: {
        $gt: 30
    },
    Hrs_worked: {
        $gt: 20
    }
});

Output: {
    cursorHasMore: false,
    documents: [{
        _id: ObjectId('661af00b38ed18538f6bc571'),
        Id: 3,
        Name: 'Hannah Brown',
        Age: 33,
        Gender: 'Female',
        Project_id: 2,
        Hrs_worked: 36,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc572'),
        Id: 4,
        Name: 'Hannah Davis',
        Age: 31,
        Gender: 'Female',
        Project_id: 2,
        Hrs_worked: 22
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc574'),
        Id: 6,
        Name: 'Hannah Davis',
        Age: 57,
        Gender: 'Male',
        Project_id: 2,
        Hrs_worked: 28
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc575'),
        Id: 7,
        Name: 'Frank Brown',
        Age: 49,
        Gender: 'Male',
        Project_id: 4,
        Hrs_worked: 30
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc576'),
        Id: 8,
        Name: 'David Williams',
        Age: 60,
        Gender: 'Male',
        Project_id: 2,
        Hrs_worked: 34,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc577'),
        Id: 9,
        Name: 'Charlie Johnson',
        Age: 49,
        Gender: 'Male',
        Project_id: 3,
        Hrs_worked: 32,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc578'),
        Id: 10,
        Name: 'Charlie Johnson',
        Age: 60,
        Gender: 'Male',
        Project_id: 4,
        Hrs_worked: 36,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc57a'),
        Id: 12,
        Name: 'Isaac Smith',
        Age: 32,
        Gender: 'Male',
        Project_id: 2,
        Hrs_worked: 23
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc57b'),
        Id: 13,
        Name: 'Emma Jones',
        Age: 52,
        Gender: 'Male',
        Project_id: 1,
        Hrs_worked: 33,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc57d'),
        Id: 15,
        Name: 'Hannah Davis',
        Age: 43,
        Gender: 'Male',
        Project_id: 4,
        Hrs_worked: 32,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc580'),
        Id: 18,
        Name: 'Isaac Wilson',
        Age: 32,
        Gender: 'Female',
        Project_id: 2,
        Hrs_worked: 31,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc581'),
        Id: 19,
        Name: 'Charlie Williams',
        Age: 59,
        Gender: 'Female',
        Project_id: 1,
        Hrs_worked: 31,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc582'),
        Id: 20,
        Name: 'Frank Miller',
        Age: 55,
        Gender: 'Female',
        Project_id: 4,
        Hrs_worked: 24
    }]
}

Question 16 : Find Employee whose Gender is Male or Hrs_worked greater than 25.

Code: db.employee.find({
    $or: [{
        Gender: "Male"
    },
    {
        Hrs_worked: {
            $gt: 25
        }
    }]
});

Output: {
    cursorHasMore: false,
    documents: [{
        _id: ObjectId('661af00b38ed18538f6bc56f'),
        Id: 1,
        Name: 'Charlie Moore',
        Age: 44,
        Gender: 'Male',
        Project_id: 4,
        Hrs_worked: 12
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc571'),
        Id: 3,
        Name: 'Hannah Brown',
        Age: 33,
        Gender: 'Female',
        Project_id: 2,
        Hrs_worked: 36,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc574'),
        Id: 6,
        Name: 'Hannah Davis',
        Age: 57,
        Gender: 'Male',
        Project_id: 2,
        Hrs_worked: 28
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc575'),
        Id: 7,
        Name: 'Frank Brown',
        Age: 49,
        Gender: 'Male',
        Project_id: 4,
        Hrs_worked: 30
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc576'),
        Id: 8,
        Name: 'David Williams',
        Age: 60,
        Gender: 'Male',
        Project_id: 2,
        Hrs_worked: 34,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc577'),
        Id: 9,
        Name: 'Charlie Johnson',
        Age: 49,
        Gender: 'Male',
        Project_id: 3,
        Hrs_worked: 32,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc578'),
        Id: 10,
        Name: 'Charlie Johnson',
        Age: 60,
        Gender: 'Male',
        Project_id: 4,
        Hrs_worked: 36,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc57a'),
        Id: 12,
        Name: 'Isaac Smith',
        Age: 32,
        Gender: 'Male',
        Project_id: 2,
        Hrs_worked: 23
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc57b'),
        Id: 13,
        Name: 'Emma Jones',
        Age: 52,
        Gender: 'Male',
        Project_id: 1,
        Hrs_worked: 33,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc57c'),
        Id: 14,
        Name: 'Isaac Wilson',
        Age: 21,
        Gender: 'Female',
        Project_id: 3,
        Hrs_worked: 32,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc57d'),
        Id: 15,
        Name: 'Hannah Davis',
        Age: 43,
        Gender: 'Male',
        Project_id: 4,
        Hrs_worked: 32,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc57e'),
        Id: 16,
        Name: 'Alice Moore',
        Age: 29,
        Gender: 'Male',
        Project_id: 1,
        Hrs_worked: 39,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc57f'),
        Id: 17,
        Name: 'David Miller',
        Age: 25,
        Gender: 'Female',
        Project_id: 4,
        Hrs_worked: 32,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc580'),
        Id: 18,
        Name: 'Isaac Wilson',
        Age: 32,
        Gender: 'Female',
        Project_id: 2,
        Hrs_worked: 31,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc581'),
        Id: 19,
        Name: 'Charlie Williams',
        Age: 59,
        Gender: 'Female',
        Project_id: 1,
        Hrs_worked: 31,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc583'),
        Id: 21,
        Name: 'John Doe',
        Project_id: 2,
        Hrs_worked: 40,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc584'),
        Id: 22,
        Name: 'Jane Smith',
        Project_id: 1,
        Hrs_worked: 28
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc585'),
        Id: 23,
        Name: 'Alice Johnson',
        Project_id: 3,
        Hrs_worked: 42,
        Overtime: true
    }]
}

Question 17 : Find Employee whose Project_id is not 3.

Code: db.employee.find({
    Project_id: {
        $ne: 3
    }
});

Output: {
    cursorHasMore: true,
    documents: [{
        _id: ObjectId('661af00b38ed18538f6bc56f'),
        Id: 1,
        Name: 'Charlie Moore',
        Age: 44,
        Gender: 'Male',
        Project_id: 4,
        Hrs_worked: 12
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc570'),
        Id: 2,
        Name: 'Frank Smith',
        Age: 36,
        Gender: 'Female',
        Project_id: 1,
        Hrs_worked: 12
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc571'),
        Id: 3,
        Name: 'Hannah Brown',
        Age: 33,
        Gender: 'Female',
        Project_id: 2,
        Hrs_worked: 36,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc572'),
        Id: 4,
        Name: 'Hannah Davis',
        Age: 31,
        Gender: 'Female',
        Project_id: 2,
        Hrs_worked: 22
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc573'),
        Id: 5,
        Name: 'Bob Davis',
        Age: 41,
        Gender: 'Female',
        Project_id: 4,
        Hrs_worked: 16
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc574'),
        Id: 6,
        Name: 'Hannah Davis',
        Age: 57,
        Gender: 'Male',
        Project_id: 2,
        Hrs_worked: 28
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc575'),
        Id: 7,
        Name: 'Frank Brown',
        Age: 49,
        Gender: 'Male',
        Project_id: 4,
        Hrs_worked: 30
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc576'),
        Id: 8,
        Name: 'David Williams',
        Age: 60,
        Gender: 'Male',
        Project_id: 2,
        Hrs_worked: 34,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc578'),
        Id: 10,
        Name: 'Charlie Johnson',
        Age: 60,
        Gender: 'Male',
        Project_id: 4,
        Hrs_worked: 36,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc579'),
        Id: 11,
        Name: 'Grace Wilson',
        Age: 42,
        Gender: 'Female',
        Project_id: 2,
        Hrs_worked: 15
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc57a'),
        Id: 12,
        Name: 'Isaac Smith',
        Age: 32,
        Gender: 'Male',
        Project_id: 2,
        Hrs_worked: 23
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc57b'),
        Id: 13,
        Name: 'Emma Jones',
        Age: 52,
        Gender: 'Male',
        Project_id: 1,
        Hrs_worked: 33,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc57d'),
        Id: 15,
        Name: 'Hannah Davis',
        Age: 43,
        Gender: 'Male',
        Project_id: 4,
        Hrs_worked: 32,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc57e'),
        Id: 16,
        Name: 'Alice Moore',
        Age: 29,
        Gender: 'Male',
        Project_id: 1,
        Hrs_worked: 39,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc57f'),
        Id: 17,
        Name: 'David Miller',
        Age: 25,
        Gender: 'Female',
        Project_id: 4,
        Hrs_worked: 32,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc580'),
        Id: 18,
        Name: 'Isaac Wilson',
        Age: 32,
        Gender: 'Female',
        Project_id: 2,
        Hrs_worked: 31,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc581'),
        Id: 19,
        Name: 'Charlie Williams',
        Age: 59,
        Gender: 'Female',
        Project_id: 1,
        Hrs_worked: 31,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc582'),
        Id: 20,
        Name: 'Frank Miller',
        Age: 55,
        Gender: 'Female',
        Project_id: 4,
        Hrs_worked: 24
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc583'),
        Id: 21,
        Name: 'John Doe',
        Project_id: 2,
        Hrs_worked: 40,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc584'),
        Id: 22,
        Name: 'Jane Smith',
        Project_id: 1,
        Hrs_worked: 28
    }]
}

Question 18 : Write a MongoDB query to find all employees who are between the ages of 25 and 35.

Code: db.employee.find({
    Age: {
        $gte: 25,
        $lte: 35
    }
});

Output: {
    cursorHasMore: false,
    documents: [{
        _id: ObjectId('661af00b38ed18538f6bc571'),
        Id: 3,
        Name: 'Hannah Brown',
        Age: 33,
        Gender: 'Female',
        Project_id: 2,
        Hrs_worked: 36,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc572'),
        Id: 4,
        Name: 'Hannah Davis',
        Age: 31,
        Gender: 'Female',
        Project_id: 2,
        Hrs_worked: 22
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc57a'),
        Id: 12,
        Name: 'Isaac Smith',
        Age: 32,
        Gender: 'Male',
        Project_id: 2,
        Hrs_worked: 23
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc57e'),
        Id: 16,
        Name: 'Alice Moore',
        Age: 29,
        Gender: 'Male',
        Project_id: 1,
        Hrs_worked: 39,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc57f'),
        Id: 17,
        Name: 'David Miller',
        Age: 25,
        Gender: 'Female',
        Project_id: 4,
        Hrs_worked: 32,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc580'),
        Id: 18,
        Name: 'Isaac Wilson',
        Age: 32,
        Gender: 'Female',
        Project_id: 2,
        Hrs_worked: 31,
        Overtime: true
    }]
}

Question 19 : How would you retrieve employees who have worked between 20 and 30 hours ?

Code: db.employee.find({
    Hrs_worked: {
        $gte: 20,
        $lte: 30
    }
});

Output: {
    cursorHasMore: false,
    documents: [{
        _id: ObjectId('661af00b38ed18538f6bc572'),
        Id: 4,
        Name: 'Hannah Davis',
        Age: 31,
        Gender: 'Female',
        Project_id: 2,
        Hrs_worked: 22
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc574'),
        Id: 6,
        Name: 'Hannah Davis',
        Age: 57,
        Gender: 'Male',
        Project_id: 2,
        Hrs_worked: 28
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc575'),
        Id: 7,
        Name: 'Frank Brown',
        Age: 49,
        Gender: 'Male',
        Project_id: 4,
        Hrs_worked: 30
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc57a'),
        Id: 12,
        Name: 'Isaac Smith',
        Age: 32,
        Gender: 'Male',
        Project_id: 2,
        Hrs_worked: 23
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc582'),
        Id: 20,
        Name: 'Frank Miller',
        Age: 55,
        Gender: 'Female',
        Project_id: 4,
        Hrs_worked: 24
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc584'),
        Id: 22,
        Name: 'Jane Smith',
        Project_id: 1,
        Hrs_worked: 28
    }]
}

Question 20 : Write a query to find employees who are either working on Project 1 or Project 2.

Code: db.employee.find({
    Project_id: {
        $in: [1, 2]
    }
});

Output: {
    cursorHasMore: false,
    documents: [{
        _id: ObjectId('661af00b38ed18538f6bc570'),
        Id: 2,
        Name: 'Frank Smith',
        Age: 36,
        Gender: 'Female',
        Project_id: 1,
        Hrs_worked: 12
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc571'),
        Id: 3,
        Name: 'Hannah Brown',
        Age: 33,
        Gender: 'Female',
        Project_id: 2,
        Hrs_worked: 36,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc572'),
        Id: 4,
        Name: 'Hannah Davis',
        Age: 31,
        Gender: 'Female',
        Project_id: 2,
        Hrs_worked: 22
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc574'),
        Id: 6,
        Name: 'Hannah Davis',
        Age: 57,
        Gender: 'Male',
        Project_id: 2,
        Hrs_worked: 28
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc576'),
        Id: 8,
        Name: 'David Williams',
        Age: 60,
        Gender: 'Male',
        Project_id: 2,
        Hrs_worked: 34,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc579'),
        Id: 11,
        Name: 'Grace Wilson',
        Age: 42,
        Gender: 'Female',
        Project_id: 2,
        Hrs_worked: 15
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc57a'),
        Id: 12,
        Name: 'Isaac Smith',
        Age: 32,
        Gender: 'Male',
        Project_id: 2,
        Hrs_worked: 23
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc57b'),
        Id: 13,
        Name: 'Emma Jones',
        Age: 52,
        Gender: 'Male',
        Project_id: 1,
        Hrs_worked: 33,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc57e'),
        Id: 16,
        Name: 'Alice Moore',
        Age: 29,
        Gender: 'Male',
        Project_id: 1,
        Hrs_worked: 39,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc580'),
        Id: 18,
        Name: 'Isaac Wilson',
        Age: 32,
        Gender: 'Female',
        Project_id: 2,
        Hrs_worked: 31,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc581'),
        Id: 19,
        Name: 'Charlie Williams',
        Age: 59,
        Gender: 'Female',
        Project_id: 1,
        Hrs_worked: 31,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc583'),
        Id: 21,
        Name: 'John Doe',
        Project_id: 2,
        Hrs_worked: 40,
        Overtime: true
    },
    {
        _id: ObjectId('661af00b38ed18538f6bc584'),
        Id: 22,
        Name: 'Jane Smith',
        Project_id: 1,
        Hrs_worked: 28
    }]
}
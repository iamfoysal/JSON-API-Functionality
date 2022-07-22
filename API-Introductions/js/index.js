/*
check japi and json data formatting
*/ 

// CREATE javaScript object notation (JSON)

const UserName= { 
            id :15, 
            name :'John',
            fatherName :'Doeueo',
            motherName :'Janemusi',
            salary :5000,
            age :30, 
            job :'teacher',
            hobbies :['music','movies'],
            address :{'city':'London','country':'UK'},
            childen :[{'name':'John','age':10},{'name':'Mary','age':5}]
        };


// object formating with JSON.stringify()
const jsonformet = JSON.stringify(UserName);

// object formating with JSON.parse()
const jsonparse = JSON.parse(jsonformet);

//  viweing the object;
console.log('Object:',UserName);

// viewing the object formated with JSON.stringify();
console.log('stringify Formate:', jsonformet);

// viewing the object formated with JSON.parse();
console.log('jsonparse formate',jsonparse);



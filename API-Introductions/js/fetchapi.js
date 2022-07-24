// fetch() github API
// fetch('https://jsonplaceholder.typicode.com/todos')

function info() {   
     fetch('https://api.github.com/users/iamfoysal')
    // fetch('https://api.github.com/users/iamfoysal/repos')
        .then(response => response.json())
        .then(json => console.log(json))
    
}
function findUser() {   
    fetch('https://jsonplaceholder.typicode.com/comments')
       .then(response => response.json())
       .then(json => UserData(json))
   
}


/* using for of collect all value of object // faster then (for and for in) loop */ 

function UserData(json) {
    for (const user of json) {
        document.getElementById('status').innerHTML += `<li>${user.name}</li>` 
    }  
}

/* using for in collect all index of array */

// function UserData(json) {
//     for (const user in json) {
//         document.getElementById('status').innerHTML += `<li>${json[user].name}</li>` 
//     }  
// }

/*  using forEach collect all user of Data*/

// function UserData(json) {
//     for(i = 0; i < json.length; i++) {
//         document.getElementById('status').innerHTML += `<li>${json[i].name}</li>` 
//     }
// }

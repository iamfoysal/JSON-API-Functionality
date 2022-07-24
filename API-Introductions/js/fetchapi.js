// fetch() github API
// fetch('https://jsonplaceholder.typicode.com/todos')

function info() {   
     fetch('https://api.github.com/users/iamfoysal')
    // fetch('https://api.github.com/users/iamfoysal/repos')
        .then(response => response.json())
        // .then(json => githubtatus(json))
        .then(json => document .getElementById('status').innerHTML = `<h3>Name: ${json.name}</h3> <br> <img src="${json.avatar_url}" alt="avatar" width="200" height="200"> <br> <p> BOi: ${json.bio}</p><br> <small> Company : ${json.company}</small> <br> 
        <br> <small> location : ${json.location}</small> <br> <small> Web site : ${json.blog}</small> 
        <br> <small> followers : ${json.followers}</small>
        <br> <small> Company : ${json.company}</small>  `)
        
    
}

// function githubtatus(json) {
//     const ulList = document.getElementById('status');
//     for (const user of json) {
//         const li = document.createElement('li');
//         li.innerHTML = `Name:${user.name} <br>  <hr> `;
//         ulList.appendChild(li);
    
//     }  
// }





function findUser() {   
    fetch('https://jsonplaceholder.typicode.com/comments')
       .then(response => response.json())
       .then(json => UserData(json))
   
}

/* using for of collect all value of object // faster then (for and for in) loop */ 

// function UserData(json) {
//     for (const user of json) {
//         document.getElementById('status').innerHTML += `<li> Name: ${user.name} </li>` 
//         document.getElementById('status').innerHTML +=  `<li>Email: ${user.email} </li>`
        
//     }  
// }

/*  another way */

function UserData(json) {
    
    const ulList = document.getElementById('status');
    for (const user of json) {
        const li = document.createElement('li');
        li.innerHTML = `ID :${user.id} <br> Name: ${user.name} <br> Email: ${user.email} <br> Content: ${user.body}  <hr> `;
        ulList.appendChild(li);
    
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

// fetch() github API
// fetch('https://jsonplaceholder.typicode.com/todos')

function info() {   
     fetch('https://api.github.com/users/iamfoysal')
    // fetch('https://api.github.com/users/iamfoysal/repos')
        .then(response => response.json())
        .then(json => console.log(json))
    
}
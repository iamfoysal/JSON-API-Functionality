# API

API stands for “Application Programming Interface.” An API is a software intermediary that allows two applications to talk to each other.  In other words, an API is the messenger that delivers your request to the provider that you’re requesting it from and then delivers the response back to you. 
   
Api Request Using Function: 
   
```
      function findUser() {   
          fetch('https://jsonplaceholder.typicode.com/comments')
             .then(response => response.json())
             .then(json => UserData(json)) 
      }
```

using for of collect all value of object // faster then (for and for in) 

```
function UserData(json) {
    for (const user of json) {
        document.getElementById('status').innerHTML += `<li>${user.name}</li>` 
    }  
}
```

displaying Data  : 
 ```
  <ul id="status"></ul>
  
```

# JSON
JSON stands for JavaScript Object Notation  JSON is a lightweight format for storing and transporting data  JSON is often used when data is sent from a server to a web page  JSON is "self-describing" and easy to understand.

Example:

```
    [
      {
          "postId": 1,
          "id": 1,
          "name": "id labore ex et quam laborum",
          "email": "Eliseo@gardner.biz",
          "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi"
        },
        {
          "postId": 1,
          "id": 2,
          "name": "quo vero reiciendis velit similique earum",
          "email": "Jayne_Kuhic@sydney.com",
          "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita"
        },
        {
          "postId": 1,
          "id": 3,
          "name": "odio adipisci rerum aut animi",
          "email": "Nikita@garfield.biz",
          "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis"
        },
        {
          "postId": 1,
          "id": 4,
          "name": "alias odio sit",
          "email": "Lew@alysha.tv",
          "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor"
        },
        {
          "postId": 1,
          "id": 5,
          "name": "vero eaque aliquid doloribus et culpa",
          "email": "Hayden@althea.biz",
          "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
        }
    ]
```

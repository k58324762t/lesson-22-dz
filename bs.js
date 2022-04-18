const URl = 'https://jsonplaceholder.typicode.com/posts/1' 

const data = {
    tittl: "test",
    body:"testbody"
}

const put ={
    method: 'PUT', // Method itself
 headers: {
  'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
 },
 body: data 
}

fetch(URl,put)
.then(res=>res.json())
.then(data => console.log(data))
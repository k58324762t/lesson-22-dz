const int = document.getElementById('int').value
const btn = document.getElementById('btn')
const url = "https://jsonplaceholder.typicode.com/posts"

function getInfo (){
fetch(`${url}?id=${int}`)
.then(tres=>tres.json())
.then(data => console.log(data))
}
btn.addEventListener('click',getInfo)

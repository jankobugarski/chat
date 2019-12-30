let apiUrl= 'https://coetus.herokuapp.com'

function getAllToDo(){
   return fetch(`${apiUrl}/api/message`).then(response => response.json()
        , (error) => {
            console.log(error);
        });
  
}
function addToDo(username) {
    let res = fetch(`${apiUrl}/api/message`,{
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'POST',
        body: JSON.stringify({
          username:username
        })
    })
    .then(response => response.json()
        , (error) => {
            console.log(error);
        })
    return res;
}
function getToDo(username, title) {
    let res = fetch(`${apiUrl}/api/message`, {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'PUT',
        body: JSON.stringify({
            username: username,
            message: title
        })
    })
        .then(response => response.json()
            , (error) => {
                console.log(error);
            })
    return res;
}





export{

    getAllToDo,
    addToDo,
    getToDo
}

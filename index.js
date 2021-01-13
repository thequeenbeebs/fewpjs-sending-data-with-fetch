const body = document.querySelector('body')

function submitData(userName, userEmail) {
    let configurationObject = {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    }

    return fetch('http://localhost:3000/users', configurationObject)
        .then(response => response.json())
        .then(object => {
            let id = document.createElement('p')
            id.innerHTML = object.id
            body.appendChild(id)
        })
        .catch(error => {
            let message = document.createElement('p')
            message.innerHTML = error.message
            body.appendChild(message)
        })
}



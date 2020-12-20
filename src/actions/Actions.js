// class Actions {

//     static fetchCovers() {
//         return fetch("http://localhost:3000/covers")
//             .then(response => response.json())
//     }

//     static addCover(newCover) {
//         return fetch("http://localhost:3000/covers", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json"
//             },
//             body: JSON.stringify(newCover)
//         })
//             .then(response => {

//                 if (response.ok) {
//                     return response.json()
//                 } else {
//                     throw Error("Yikes!")
//                 }
//             })
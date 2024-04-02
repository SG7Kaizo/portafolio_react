const API = "https://my-json-server.typicode.com/SG7Kaizo"

export function get(path){
    return fetch(API + path, {
        method: 'GET'
    })
        .then((response) => response.json())       
}


//   fetch("https://my-json-server.typicode.com/SG7Kaizo/image_repo/images", {
//     method: 'GET'
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       setImages(data);
//       setLoading(false);
//     });

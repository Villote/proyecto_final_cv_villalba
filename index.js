const api = 'https://randomuser.me/api/';


const getData = (apiURL) => {
    return fetch(apiURL)
        .then(response => response.json())
        .then(json => { printData(json)})
        .catch(error => { console.error('Error: ', error) })
} 

const printData = (data) => {
    let html= '';
    data.results.forEach(element => {
    html += `<img src="${element.picture.large}" class="photo-profile" alt="photo cv"><br>`  
    html +=  `${element.name.first} `
    html +=  `${element.name.last}<br><span>Web Developer</span>`
    });
    document.getElementById("pic").innerHTML = html
    document.getElementById("name").innerHTML = html
}

getData(api);
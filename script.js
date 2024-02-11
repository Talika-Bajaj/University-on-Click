let uniData = document.querySelector(".uni-data");
let uniName = document.getElementById("uni-name");
let  uniCountry= document.getElementById("uni-country");


//use fetch 
let url = "http://universities.hipolabs.com/search?";

// async function getUniversity () {
async function getUniversity (name,country) {
    let response = await fetch(url + "name=" + name + "&country=" +  country);
    // let response = await fetch(url + name + country);
    let data  = await response.json();
    console.log(data);
    // let universityName = data[0].name;
    
    data.forEach(element => {
        uniData.innerHTML += `<div class="card" style="width: 18rem; padding: 15px">
        <div class="card-body">
        <h5 class="card-title">${element.name}</h5><br>
        <h6 class="card-subtitle mb-2 text-body-secondary">Country: ${element.country}</h6>
        <a href="${element.web_pages}" target="_blank" class="btn btn-primary">Vist Website</a>
        </div>
        </div>`
    });

    
    document.getElementById("uni-name").value = "";
    document.getElementById("uni-country").value = "";
}

getUniversity()

document.getElementById("search-uni").addEventListener("submit", (e)=> {
    e.preventDefault();
    uniData.style.display = "flex";
    // uniData.innerHTML = "fkjvnjvnjnjnvjvnivner";
    getUniversity(uniName.value, uniCountry.value)
    uniData.innerHTML = "";
})


let uniCardData = document.querySelector(".uni-card-data");
let uniData = document.querySelector(".uni-data");
let uniName = document.getElementById("uni-name");
let uniCountry = document.getElementById("uni-country");


//use fetch 

// async function getUniversity () {
async function getUniversity(name, country) {

    let response = await fetch("http://universities.hipolabs.com/search?name=" + name + "&country=" + country);
    let data = await response.json();
    console.log(data);

    if (data.length > 0) {

        data.forEach(element => {
            uniCardData.innerHTML += `<div class="card" style="width: 18rem; padding: 15px; cursor:pointer" onmouseover = "scaleUp(this)" onmouseout = "scaleDown(this)">
                <div class="card-body">
                <h5 class="card-title">${element.name}</h5><br>
                <h6 class="card-subtitle mb-2 text-body-secondary">Country: ${element.country}</h6>
                <a href="${element.web_pages}" target="_blank" class="btn btn-primary">Vist Website</a>
                </div>
                </div>`
        });

    } else {
        uniCardData.innerHTML = `<p style= "font-size: 30px">Error: University not found</p>`;
    }

    document.getElementById("uni-name").value = "";
    document.getElementById("uni-country").value = "";
}

getUniversity();


document.getElementById("search-uni").addEventListener("submit", (e) => {
    e.preventDefault();
    uniData.style.display = "block";
    uniCardData.style.display = "flex";
    // uniData.innerHTML = "fkjvnjvnjnjnvjvnivner";
    getUniversity(uniName.value, uniCountry.value)
    uniCardData.innerHTML = "";
    // uniData.style.display = "none";
})

function scaleUp(x) {
    x.style.transform = "scale(1.1)";
    x.style.transition = "0.5s ease";
}

function scaleDown(x) {
    x.style.transform = "scale(1)";
    x.style.transition = "0.5s ease";
}

function enableButton () {
    document.getElementById("search").disabled = false;
}
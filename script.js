let uniCardData = document.querySelector(".uni-card-data");
let uniData = document.querySelector(".uni-data");
let uniName = document.getElementById("uni-name");
let uniCountry = document.getElementById("uni-country");


// function to fetch api
async function getUniversity(name, country) {
    let response = await fetch("http://universities.hipolabs.com/search?name=" + name + "&country=" + country,   method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
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

// calling the function
getUniversity();

//event handler for form search button
document.getElementById("search-uni").addEventListener("submit", (e) => {
    e.preventDefault();
    uniData.style.display = "block";
    uniCardData.style.display = "flex";
    getUniversity(uniName.value, uniCountry.value);

    uniCardData.innerHTML = "";
    document.getElementById('search').disabled = true;
})

//function to zoom-in the card component on hover
function scaleUp(x) {
    x.style.transform = "scale(1.1)";
    x.style.transition = "0.5s ease";
}

//function to zoom-out the card component on hover
function scaleDown(x) {
    x.style.transform = "scale(1)";
    x.style.transition = "0.5s ease";
}


//function to disable/enable form search button
function enableButton() {
    if ((document.getElementById("uni-name").value !== "") || (document.getElementById("uni-country").value !== "")) {
        document.getElementById('search').disabled = false;
    } else {
        document.getElementById('search').disabled = true;
    }
}

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("aboutbtn").click();

function myFunction(value) {
    const el = document.createElement("textarea");
    el.value = value;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    function showalert() {
        document.querySelector("#alert_placeholder").innerHTML += 
            `<div class="alert">
            <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
            URL copied
            </div>`
        ;
        setTimeout(function () {
            document.querySelector("#alert_placeholder").innerHTML = ``;
        }, 1500);
    }
    showalert();
}

fetch(`http://localhost:${window.location.port}/files`)
    .then((response) => response.json())
    .then((data) => {
        data[1].forEach((res) => {
            let name =
                res.split(".")[0][0].toUpperCase() + res.split(".")[0].slice(1);
            document.querySelector("#css").innerHTML += `
<div class="media text-muted pt-3">
    <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <div class="d-flex justify-content-between align-items-center w-100">
            <strong class="text-dark">${name}</strong>
                <svg onclick="myFunction('${data[0]}/css/${res}')" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="0.5" stroke-linecap="round"
                    stroke-linejoin="round" class="feather feather-copy text-primary">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
        </div>
        <span class="d-block">${res}</span>
    </div>
</div>
                    `;
        });
        data[2].forEach((res) => {
            let name =
                res.split(".")[0][0].toUpperCase() + res.split(".")[0].slice(1);
            document.querySelector("#js").innerHTML += `
<div class="media text-muted pt-3">
    <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <div class="d-flex justify-content-between align-items-center w-100">
            <strong class="text-dark">${name}</strong>
                <svg onclick="myFunction('${data[0]}/js/${res}')" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="0.5" stroke-linecap="round"
                    stroke-linejoin="round" class="feather feather-copy text-primary">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
        </div>
        <span class="d-block">${res}</span>
    </div>
</div>
                    `;
        });
    });

const date = new Date();
document.querySelector("#date").textContent = date.getFullYear();

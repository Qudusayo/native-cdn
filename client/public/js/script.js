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
        $("#alert_placeholder").append(
            `<div class="alert alert-success alert-link" role="alert">Link Copied!!!!</div>`
        );
        setTimeout(function () {
            $(".alert").remove();
        }, 2000);
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

const date = new Date;
document.querySelector('#date').textContent = date.getFullYear()
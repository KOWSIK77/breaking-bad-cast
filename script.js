var container = document.createElement("div");
container.setAttribute("class", "container");
var h1 = document.createElement("h1");
h1.innerHTML = "Breaking bad cast Detail";
h1.style = "text-align:center; margin-top:1rem; font-size:3rem;";
var row = document.createElement("div");
row.classList.add("row", "m-1", "p-1");
container.append(h1, row);

var res = fetch("https://breakingbadapi.com/api/characters");
res.then((data) => data.json()).then((value) => foo(value));

function foo(value) {
  console.log(value);
  for (let i = 0; i <=24; i++) {
    row.innerHTML += `
         <div class="col-md-4">
         <div class="card mt-5 p-1" style="height:48rem; width: 23rem; margin:10px; padding:20px; box-shadow:1px 1px 10px; text-align:center;">
           <img src="${value[i].img}" class="card-img-top" style="width:100%; height:28rem;  " alt="...">
        <div class="card-body">
           <p class="card-text">Name: ${value[i].name}</p>
           <p class="card-text">DOB: ${value[i].birthday}</p>
           <p class="card-text">Nick-Name: ${value[i].nickname}</p>
           <p class="card-text">Occupation: ${value[i].occupation}</p>
           <p class="card-text">Status: ${value[i].status}</p>
        </div>       </div>       </div>`;
    document.body.append(container);
  }
}

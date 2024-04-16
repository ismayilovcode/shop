function addnewtodo() {
  let input = document.getElementById("todoContent");
  let input2 = document.getElementById("value");

  let todos = JSON.parse(localStorage.getItem("todolist") || "[]");
  let maxId = 0;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id > maxId) {
      maxId = todos[i].id;
    }
  }

  let newtodo = {
    id: maxId + 1,
    content: input.value,
    price: input2.value,
  };

  todos.push(newtodo);

  localStorage.setItem("todolist", JSON.stringify(todos));
  input.value = "";
  input2.value = "";
  renderHTML();
}

function renderHTML() {
  let todos = JSON.parse(localStorage.getItem("todolist") || "[]");
  let x = "";
  for (let i = 0; i < todos.length; i++) {
    x += `
        <span class="about">
         <span class="content" >
         <span id="content${todos[i].id}">${todos[i].content}</span>
         </span> 
         <span class="price" >
         <span id="price${todos[i].id}">${todos[i].price}</span>
         </span>  
         <button id="button${todos[i].id} onclick="shop()">button</button>
        </span>  
              `;
  }
  document.getElementById("todoContainer").innerHTML = x;
}
renderHTML();

function shop() {
  let todos = JSON.parse(localStorage.getItem("todolist") || "[]");
  let x = "";
  for (let i = 0; i < todos.length; i++) {
    x += `
    <span class="about">
    <span class="content" >
    <span id="content${todos[i].id}">${todos[i].content}</span>
    </span> 
    <span class="price" >
    <span id="price${todos[i].id}">${todos[i].price}</span>
    </span>    
    `;
    document.getElementById("todoContainer2").innerHTML = x;
  }
}

function list() {
  let x = document.getElementById("todoShop");
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  let y = document.getElementById(`button${todos[i].id}`);
  if (y.style.display == "block") {
    y.style.display = "none";
  }
}
renderHTML();

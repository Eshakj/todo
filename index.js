const button = document.getElementById("logger");
const access = document.getElementById("no");
button.addEventListener("click", () => {
  let todos = [];

  let value = document.getElementById("input").value;
  console.log("smthn");
  let todo = {
    id: Math.random(),
    name: value,
    completed: false,
  };
  console.log(todo);
  todos.push(todo);
  console.log(todos);
  todos.forEach((data) => {
    let li = document.createElement("li");
    console.log(data.name);
    li.innerText = data.name;
    document.getElementById("no").appendChild(li);
  });
});

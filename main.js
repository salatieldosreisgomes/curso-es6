class TodoList{
	constructor(){
		this.todos = [];
	}

	addTodo(){
		this.todos.push("Novo todo");
		console.log(this.todos);
	}
}

const MinhaLista = new TodoList();

document.getElementById('novoTodo').onclick = function(){
	MinhaLista.addTodo();
}

npx @angular/cli@7.3.9 new nome_projeto
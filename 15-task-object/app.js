console.log('DZ-11');

//Домашнее задание - Scope и this
// dz
/*
Написать объект toDoList, который хранит в себе задачи {'title': 'Помыть посуду', id: 1, priority: 1} и имеет методы:
- добавить задачу
- удалить задачу по АЙДИ
- обновить ИМЯ или ПРИОРИТЕТ по АЙДИ
- отсортировать задачи по ПРИОРИТЕТу

15-task-object
*/

let toDoList = {
	tasks: [],

	addTask: function (title, id, priority) {
		this.tasks.push({
		title: title, 
		id: id, 
		priority: priority,
		});
		return console.log(`Задача '${title}' добавлена`)
	},

	deleteTask: function (id){
		let taskPosition = this.tasks.findIndex(task => task.id == id)

		if (taskPosition !== -1) {
            this.tasks.splice(taskPosition, 1);
            console.log(`Задача с ID ${id} удалена`);
        } else {
            console.log(`Задача с ID ${id} не найдена`);
        }
	},

	updateTask: function (id, title, priority) {
		let taskPosition = this.tasks.findIndex(task => task.id == id)
		if (taskPosition !== -1) {

		let oldTitle = this.tasks[taskPosition].title;
		let oldPriority = this.tasks[taskPosition].priority;
		
    	this.tasks.splice(taskPosition, 1);
        this.addTask(title || oldTitle, id, priority||oldPriority);
		console.log(`Задача с ID ${id} обновлена`);

        } else {
            console.log(`Задача с ID ${id} не найдена`);
        }
	},

	sortTask: function () {
		return this.tasks.sort((a, b) => a.priority - b.priority);
	},
};

toDoList.addTask('Помыть посуду', 1, 1);
toDoList.deleteTask(1);
toDoList.addTask('Помыть посуду2', 1, 1);
toDoList.updateTask(1);
toDoList.updateTask(1, 'xx');

toDoList.addTask('Eat', 1, 5);
toDoList.addTask('Sleep', 1, 3);
toDoList.sortTask();
console.log(toDoList)
console.log('DZ-12');

//Домашнее задание - Управление this
// примените все методы toDoList на newTask
// dz
/*
Написать объект toDoList, который хранит в себе задачи {'title': 'Помыть посуду', id: 1, priority: 1} и имеет методы:
- добавить задачу
- удалить задачу по АЙДИ
- обновить ИМЯ или ПРИОРИТЕТ по АЙДИ
- отсортировать задачи по ПРИОРИТЕТу


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
	updateTask: function (id, newTitle, newPriority) {
        let task = this.tasks.find(task => task.id == id);

        if (task) {
            // Обновление свойств задачи
            if (newTitle !== undefined && newTitle !== '') {
				console.log(`Старое имя: ${task.title}`);
                task.title = newTitle;
				console.log(`Новое имя: ${newTitle}`);
            }

            if (newPriority !== undefined) {
                console.log(`Старый приоритет: ${task.priority}`);
				task.priority = newPriority;
				console.log(`Старый приоритет: ${newPriority}`);
            }

            console.log(`Задача ${task.title} с ID ${id} обновлена`);
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
console.log(toDoList);


// примените все методы toDoList на newTask
const newTask = {
	tasks: [{
		id: 3,
		title: 'test', 
		decription: 'decription of title',
		priority: 1,
	}],
}
console.log(newTask);

const newTaskAdd = toDoList.addTask.bind(newTask);
newTaskAdd('посуду Помыть', 1, 1);
newTaskAdd('посуду Помыть', 1, 2);
newTaskAdd('посуду Помыть', 2, 4);
newTaskAdd('посуду Помыть', 3, 5);
newTaskAdd('посуду Помыть', 0, 3);
console.log(newTask);

const newTaskDelete = toDoList.deleteTask.bind(newTask);
newTaskDelete(1);
newTaskDelete(3);
console.log(newTask);


newTask.updateTask = toDoList.updateTask;
newTask.updateTask(1, 'xx', 1);
console.log(newTask);

const newTaskSort = toDoList.sortTask;
newTaskSort.call(newTask);
console.log(newTask);


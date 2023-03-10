import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

const App = () => {
	const [showAddTask, setShowAddTask] = useState(false);
	const [editTasks, setEditTasks] = useState();

	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: "Doctors Appoinitmet",
			day: "Feb 5th at 2:30pm",
			reminder: true,
		},

		{
			id: 2,
			text: "Doctors Appointment",
			day: "Feb 6th at 1:30pm",
			reminder: true,
		},

		{
			id: 3,
			text: "Food Shopping",
			day: "Feb 5th at 2:30pm",
			reminder: false,
		},
	]);

	//Add Task
	const addTask = (task) => {
		const id = Math.floor(Math.random() * 10000) + 1;
		const newTask = { id, ...task };
		setTasks([...tasks, newTask]);
	};

	//Delete Task
	const deleteTask = (id) => {
		setEditTasks(tasks.filter((task) => task.id !== id));
	};

	const editTask = (id) => {
		setTasks((tasks) => tasks.id === id);
	};

	const toggleReminder = (id) => {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, reminder: !task.reminder } : task
			)
		);
	};

	return (
		<div className='container'>
			<Header
				onAdd={() => setShowAddTask(!showAddTask)}
				showAdd={showAddTask}
			/>
			{showAddTask && <AddTask onEdit={editTasks} onAdd={addTask} />}
			{tasks.length > 0 ? (
				<Tasks
					tasks={tasks}
					onDelete={deleteTask}
					onEdit={editTask}
					onToggle={toggleReminder}
				/>
			) : (
				"There's No Tasks To Show Nigga!!!"
			)}
		</div>
	);
};

export default App;

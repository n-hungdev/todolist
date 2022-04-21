import { useState } from 'react'
import Button from './components/Button'
import DialogModal from './components/DialogModal'
import Form from './components/Form'
import TodoItem from './components/TodoItem'

export default function App() {
	const [isOpen, setIsOpen] = useState(false)
	const [tasks, setTasks] = useState([])
	const [task, setTask] = useState({})
	const [isEdit, setIsEdit] = useState(false)

	const openModal = () => setIsOpen(true)
	const closeModal = () => {
		setDescription('')
		setTitle('')
		setIsEdit(false)
		setIsOpen(false)
	}

	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')

	const handleChangeTitle = (e) => setTitle(e.target.value)
	const handleChangeDesc = (e) => setDescription(e.target.value)

	const handleSubmitForm = (e) => {
		e.preventDefault()
		if (title && description) {
			if (!isEdit)
				setTasks((tasks) => [
					...tasks,
					{
						id: Date.now(),
						title,
						description,
						active: false,
					},
				])
			else
				setTasks((prevTasks) =>
					prevTasks.map((x) =>
						x.id === task.id ? { ...x, title, description } : x
					)
				)
			closeModal()
		} else alert('Please fill all fields')
	}

	const handleDeleteTask = (id) => {
		setTasks((prevTasks) => prevTasks.filter((x) => x.id !== id))
		setIsOpen(false)
		alert('Task has been deleted')
	}
	const handleEditTask = (task) => {
		setTask(task)
		setDescription(task.description)
		setTitle(task.title)
		setIsEdit(true)
		openModal()
	}
	const handleActiveTask = (id) => {
		setTasks((prevTasks) =>
			prevTasks.map((x) => (x.id === id ? { ...x, active: !x.active } : x))
		)
	}
	return (
		<>
			<Button
				title="Create Task"
				onClick={openModal}
				type="button"
				className="mt-10 bg-cyan-500  hover:bg-cyan-500"
			/>
			{/* Modal */}
			<DialogModal isOpen={isOpen} closeModal={closeModal} isEdit={isEdit}>
				<Form
					closeModal={closeModal}
					isEdit={isEdit}
					title={title}
					description={description}
					handleSubmitForm={handleSubmitForm}
					handleChangeDesc={handleChangeDesc}
					handleChangeTitle={handleChangeTitle}
				/>
			</DialogModal>
			{/* List */}
			<h1 className="text-center font-bold text-3xl ">Tasks</h1>
			<div className="grid grid-cols-1 gap-4 container mx-auto mt-8">
				{tasks?.map((task) => (
					<TodoItem
						key={task.id}
						task={task}
						handleDeleteTask={handleDeleteTask}
						handleEditTask={handleEditTask}
						handleActiveTask={handleActiveTask}
					/>
				))}
			</div>
		</>
	)
}

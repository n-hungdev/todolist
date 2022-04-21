import React from 'react'
import Button from './Button'

const TodoItem = ({
	task,
	handleEditTask,
	handleDeleteTask,
	handleActiveTask,
}) => {
	return (
		<div
			className={`relative p-6 pb-0 max-w-md md:max-w-xl xl:max-w-3xl w-full rounded-lg border  shadow-md ${
				task.active ? 'bg-gray-600' : 'bg-gray-800'
			} border-gray-700 mx-auto`}
		>
			<button
				className={`absolute top-4 right-4 ${
					task.active
						? 'text-green-600 hover:text-red-500'
						: 'hover:text-green-600'
				}`}
				onClick={() => handleActiveTask(task.id)}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-8 w-8"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fillRule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clipRule="evenodd"
					/>
				</svg>
			</button>
			<h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
				{task.title}
			</h5>
			<p className="mb-3 font-normal  text-gray-400">{task.description}</p>
			<div className="flex justify-between align-bottom mb-auto">
				<Button
					title={'Edit'}
					type="button"
					onClick={() => handleEditTask(task)}
					className="mt-10 bg-green-500  hover:bg-green-500"
				/>
				<Button
					title={'Delete'}
					type="button"
					onClick={() => handleDeleteTask(task.id)}
					className="mt-10 bg-red-500  hover:bg-red-500"
				/>
			</div>
		</div>
	)
}

export default TodoItem

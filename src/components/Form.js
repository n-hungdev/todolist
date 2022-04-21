import React from 'react'
import Button from './Button'

const Form = ({
	closeModal,
	handleSubmitForm,
	isEdit,
	title,
	description,
	handleChangeTitle,
	handleChangeDesc,
}) => {
	return (
		<form onSubmit={handleSubmitForm}>
			<label
				htmlFor="task-title"
				className="block mb-2 text-sm font-medium text-gray-900"
			>
				Title Task
			</label>
			<input
				type="text"
				id="task-title"
				name="title"
				onChange={handleChangeTitle}
				value={title}
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none block w-full p-2.5 mb-4"
			/>
			<label
				htmlFor="task-description"
				className="block mb-2 text-sm font-medium text-gray-900 "
			>
				Your message
			</label>
			<textarea
				id="task-description"
				rows="4"
				onChange={handleChangeDesc}
				value={description}
				className="block p-2.5 mb-2 resize-none w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none"
				placeholder="Leave a comment..."
			></textarea>
			<div className="flex justify-between mt-5">
				<Button
					title={isEdit ? 'Save' : 'Create'}
					type="submit"
					className="bg-purple-500 hover:bg-purple-500"
				/>
				<Button
					title={'Cancel'}
					type="button"
					onClick={closeModal}
					className="bg-red-500 hover:bg-red-500"
				/>
			</div>
		</form>
	)
}

export default Form

import React from 'react'

const Button = ({ title, type = 'button', onClick, className = '' }) => {
	return (
		<button
			className={`relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-bold rounded-lg group  text-white hover:text-black focus:outline-none ${className}`}
			type={type}
			onClick={onClick}
		>
			<span
				className={`relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0`}
			>
				{title}
			</span>
		</button>
	)
}

export default Button

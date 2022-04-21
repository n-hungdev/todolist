import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'

const DialogModal = ({ isOpen, closeModal, children, isEdit }) => {
	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog
				as="div"
				className="fixed inset-0 z-10 overflow-y-auto"
				onClose={closeModal}
			>
				<div className="min-h-screen px-4 text-center">
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Dialog.Overlay className="fixed inset-0 bg-slate-900/80" />
					</Transition.Child>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-200"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95"
					>
						<div className="inline-block w-full max-w-xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
							<Dialog.Title
								as="h3"
								className="text-lg text-center font-medium leading-6 text-gray-900"
							>
								{isEdit ? 'Edit Task' : 'Create Task'}
							</Dialog.Title>
							<div className="mt-4">{children}</div>
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition>
	)
}

export default DialogModal

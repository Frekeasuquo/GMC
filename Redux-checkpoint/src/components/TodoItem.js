import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from '../redux/todoSlice';

const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();

	const handleCheckboxClick = () => {
		dispatch(toggleComplete({ id, completed: !completed }));
	};

	const handleDeleteClick = () => {
		dispatch(deleteTodo({ id }));
	};

	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input
						type='checkbox'
						className='m-2'
						checked={completed}
						onChange={handleCheckboxClick}
					></input>
					<div>{title}</div>
				</span>
				<div>
					<button className='btn btn-primary '>
						Edit
					</button>
					<button onClick={handleDeleteClick} className='btn btn-danger '>
						Delete
					</button>
				</div>
			</div>
		</li>
	);
};

export default TodoItem;
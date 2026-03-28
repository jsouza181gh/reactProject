import { useReducer, useState } from "react";

type TaskAction = {
	type: 'add',
	payload: string
}

function taskReducer(state: string[], action: TaskAction) {
	const { type, payload } = action;

	if (type == 'add' && payload) {
		return [...state, payload];
	}

	return state;
}

const App = () => {
	const [tasks, dispatch] = useReducer(taskReducer, []);
	const [inputValue, setInputValue] = useState('');

	const handleClick = () => {
		dispatch({type: 'add', payload: inputValue});
		setInputValue('');
	};

	return (
		<div>
			<h2>Lista de Tarefas:</h2>
			<ul>
				{tasks.map((task, key) => 
					<li key={key}>
						{task}
					</li>
				)}
			</ul>
			<div>
				<input 
					value={inputValue}
					onChange={e => setInputValue(e.target.value)}
				/>
				<button onClick={handleClick}>
					Adicionar
				</button>
			</div>
		</div>
	);
};

export default App;
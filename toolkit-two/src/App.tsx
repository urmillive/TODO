import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
	const count = useSelector(selectCount);
	const dispatch = useDispatch();
	return (
		<>
			<div className='card'>
				<button
					className='btn btn-primary'
					aria-label='Increment value'
					onClick={() => dispatch(increment())}
				>
					+
				</button>
				<span className=''>{count}</span>
				<button
					className='btn btn-success'
					aria-label='Decrement value'
					onClick={() => dispatch(decrement())}
				>
					-
				</button>
			</div>
		</>
	);
}

export default App;

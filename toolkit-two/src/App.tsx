import "./App.css";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { increment, decrement } from "./redux/counterSlice";
function App() {
	const count = useAppSelector((state) => state.counter.value);
	const dispatch = useAppDispatch();
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
				<h1>{count}</h1>
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

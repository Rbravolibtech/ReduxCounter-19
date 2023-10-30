import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
	const dispatch = useDispatch();
	const counter = useSelector((state) => state.counter);

	const incrementHandler = () => {
		dispatch({ type: "increment" });
	};

	const increaseHandler = () => {
		dispatch({ type: "increase", amount: 10 });
	};

	const decrementHandler = () => {
		dispatch({ type: "decrement" });
	};

	const toggleCounterHandler = () => {};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			<div className={classes.value}>{counter}</div>
			<div>
				<button className="button1" onClick={incrementHandler}>
					INCREMENT
				</button>
				<button className="button2" onClick={increaseHandler}>
					INCREASE BY 10
				</button>
				<button onClick={decrementHandler}>DECREMENT</button>
			</div>
			<button className="toggle" onClick={toggleCounterHandler}>
				Toggle Counter
			</button>
		</main>
	);
};

export default Counter;

// class Counter extends Component {
// 	incrementHandler() {
// 		this.props.increment();
// 	}

// 	decrementHandler() {
// 		this.props.decrement();
// 	}

// 	toggleCounterHandler() {}

// 	render() {
// 		return (
// 			<main className={classes.counter}>
// 				<h1>Redux Counter</h1>
// 				<div className={classes.value}>{this.props.counter}</div>
// 				<div>
// 					<button
// 						className="button1"
// 						onClick={this.incrementHandler.bind(this)}
// 					>
// 						INCREMENT
// 					</button>
// 					<button onClick={this.decrementHandler.bind(this)}>DECREMENT</button>
// 				</div>
// 				<button onClick={this.toggleCounterHandler}>Toggle Counter</button>
// 			</main>
// 		);
// 	}
// }

// const mapStateToProps = (state) => {
// 	return {
// 		counter: state.counter,
// 	};
// };

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		increment: () => dispatch({ type: "increment" }),
// 		increment: () => dispatch({ type: "decrement" }),
// 	};
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

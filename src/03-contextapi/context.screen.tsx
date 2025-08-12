import { useContext } from 'react';
import CounterProvider, {
	CounterContext,
	type CounterContextType,
} from './counter.context';

// Not: state değişince sadece ekrandaki screen veya pageler bidaha render olur. Ekranda olmayan herhangi bir nesne bu durumdan etkilenmez.

const CounterScreen = () => {
	return (
		<>
			<CounterProvider>
				<CounterAction />
				<hr />
				<CounterView />
				<NotProvider />
			</CounterProvider>
		</>
	);
};

const NotProvider = () => {
	console.log('...rendering NotProvider');
	return (
		<>
			<h1>Not Provider</h1>
		</>
	);
};

const CounterView = () => {
	console.log('...rendering CounterView');
	// useContext varsa bu component state listener haline gelmiş oluyor
	const { count } = useContext(CounterContext) as CounterContextType;

	return <>Count: {count}</>;
};

// CounterActionda state değişsin
// CounterView ise değişen state ekranda gösterilsin.
const CounterAction = () => {
	console.log('...rendering CounterAction');
	const { increase, decrease } = useContext(
		CounterContext
	) as CounterContextType;

	const onIncrease = () => {
		if (increase) {
			increase();
		}
	};
	const onDecrease = () => {
		if (decrease) {
			decrease();
		}
	};

	return (
		<>
			<button onClick={onIncrease}>(+)</button>
			<button onClick={onDecrease}>(-)</button>
		</>
	);
};

export default CounterScreen;

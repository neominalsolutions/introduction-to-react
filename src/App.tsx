import { Component, useEffect, useState, type ReactNode } from 'react';
import './App.css';

// Alt + Shift + O

// Component içerisinde kullanıcı etkileşimleri sonucu ekrandaki değişimleri State ile yöneteceğiz
type State = {
	count: number;
};

// Bir componente dışarıdan gönderilen değerler
type Props = {
	title: string;
};

export class AppClass extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { count: 0 }; // component açılıncaki intial değer.
	}

	componentDidMount(): void {
		console.log('component doma girdiği an');
		// apiden veri çekilme fazı
	}

	componentDidUpdate(
		prevProps: Readonly<Props>,
		prevState: Readonly<State>,
		snapshot?: unknown
	): void {
		console.log('state değiştiği an', prevProps, prevState, snapshot);
	}

	componentWillUnmount(): void {
		console.log('component domdan çıktığı an');
		// screen veya sayfa değişince component uI elementten çıkar yada domdan çıkar.
	}

	onButtonClick = () => {
		const newCount = this.state.count + 1;
		this.setState({ count: newCount }, () => {
			console.log('newState', this.state.count);
		});
	};

	// class içerisinde göstermemiz gereken dinamik değerleri ise render methodu ile tanımlarız
	render(): ReactNode {
		return (
			<>
				Sayac: {this.state.count}
				<button onClick={this.onButtonClick}>Click</button>
			</>
		);
	}
}

// iki farklı export tipimiz
// Hooklar Componentdeki herhangi bir durumu yakalamızı sağlayan özel functionlar

function AppFunction() {
	// component render altındağında değer korunur.
	const [count, setCount] = useState<number>(0);

	// Not: her useEffectHook component doma girince 1 kez çalışır

	useEffect(() => {
		console.log('sayfa ilk açılında apiden veri çek');

		return () => {
			// cleanup function
			console.log('component domdan çıktı');
		};
	}, []); // [] herhangi bir state bunu tetiklemez

	useEffect(() => {
		console.log('count değişti');
	}, [count]); // count değiştiğinde tetiklenen

	let num = 1;

	const onButtonClick = () => {
		setCount(count + 1);
		num++;
		console.log('num ' + num);
	};

	return (
		<>
			Numeric: {num}
			<br></br>
			Sayac: {count}
			<br></br>
			<button onClick={onButtonClick}>Click Me</button>
		</>
	);
}

export default AppFunction;

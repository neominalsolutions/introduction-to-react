/* eslint-disable @typescript-eslint/no-explicit-any */
// Angulardaki @Input ve @OutPut modeline benzer bir yaklaşımda react da mevcut
// React için @Input yapılarına Props, @Outout olanlarada Props deriz.

import React, { useState } from 'react';

// Reactda State ve Props yapıları type olarak tanımlanır
type ButtonProps = {
	title: string; // attribute props
	onClick(): void; // action Props
};

// Reactda UI componentleri içerisinde mümkün olduğunca state tanımından kaçınalım gereksiz render alma işlemleri olabilir.
export function ButtonUI(props: ButtonProps) {
	const { title, onClick } = props;

	return <button onClick={onClick}>{title}</button>;
}
// ekran componenti
// Bu tarz componentler UIView yada UIElement componentlerini ekranda kullanmak için tasarlanır.
// navigation yapılarına sahip.

type ScreenState = {
	form: {
		name: string;
		surname: string;
	};
};

export default function Screen() {
	const [state, setState] = useState<ScreenState>({
		form: { name: '', surname: '' },
	});
	// button component için onclick yapıldığında buda gitsin. props onClick tetiklesin ve onButtonClick componentini callback yapsın.
	const onButtonClick = () => {
		console.log('button tetiklendi');
	};

	const onNameInputChange = (value: string) => {
		console.log('ad' + value);
		// Spread Operator.
		// React da render işlemleri için object yada array tipinde değerleri {... obj} [...array] şeklinde yeniden referansını güncelleyecek şekilde yazmalıyız.
		setState({ ...state, form: { name: value, surname: state.form.surname } });
	};

	const onSurnameInputChange = (value: string) => {
		console.log('soyad' + value);
		setState({ ...state, form: { ...state.form, surname: value } });
	};

	return (
		<>
			<InputGroup1>
				<TextInput
					placeholder="Ad"
					onInputChange={onNameInputChange}
					defaultValue=""
				/>
			</InputGroup1>

			<InputGroup>
				<TextInput
					placeholder="Soyad"
					onInputChange={onSurnameInputChange}
					defaultValue=""
				/>
				<ButtonUI title="Button3" onClick={onButtonClick} />
			</InputGroup>
		</>
	);
}

// React da bir component başka bir componentin kapsayıcısı olabilir. Bu durumda kapsanan tüm componentler children olarak tanımlanır.

const InputGroup: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return <div style={{ padding: 10 }}>{children}</div>;
};

type InputGroupProps1 = {
	children: any;
};
const InputGroup1 = ({ children }: InputGroupProps1) => {
	return <div style={{ padding: 10 }}>{children}</div>;
};

// Not: Reactda component isimleri Büyük harfler ile başlamalı, küçük harf olursa html element sanıyor. Dosya isimleri istenildiği gibi tanımlanabilir
type TextInputProps = {
	defaultValue: string;
	placeholder: string;
	onInputChange(value: string): void;
};
export function TextInput({
	defaultValue,
	placeholder,
	onInputChange,
}: TextInputProps) {
	return (
		<input
			placeholder={placeholder}
			defaultValue={defaultValue}
			onInput={(e: any) => onInputChange(e.target.value)}
		/>
	);
}

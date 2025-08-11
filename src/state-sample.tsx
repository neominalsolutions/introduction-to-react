/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import AppFunction, { AppClass } from './App';

export const Sample = () => {
	const [visible, setVisible] = useState<boolean>(true);

	const onVisible = () => {
		setVisible(!visible);
	};

	return (
		<>
			{visible && (
				<>
					<AppClass title="class Component" />
					<AppFunction />
				</>
			)}
			<button onClick={onVisible}>Göster/Gizle</button>
		</>
	);
};

// conditional render 01
export const Sample1 = () => {
	const [visible, setVisible] = useState<boolean>(true);

	const onVisible = () => {
		setVisible(!visible);
	};

	if (!visible) {
		return (
			<>
				Gösterilecek bişey yok
				<button onClick={onVisible}>Show/Hide</button>
			</>
		);
	} else {
		return (
			<>
				<AppClass title="class Component" />
				<AppFunction />
				<button onClick={onVisible}>Show/Hide</button>
			</>
		);
	}
};

// conditional render 02
export const Sample2 = () => {
	const visible = true;

	return (
		<>
			{visible ? (
				<>
					<AppClass title="class Component" />
					<AppFunction />
				</>
			) : (
				<>Gösterecek bişey yok</>
			)}
		</>
	);
};

export const Sample3 = () => {
	const [boy, setBoy] = useState<number>(0);
	const [kilo, setkilo] = useState<number>(0);
	const [vki, setVki] = useState<number>(0);

	useEffect(() => {
		setVki(kilo * boy);
	}, [kilo, boy]);

	return (
		<>
			VKI = {vki}
			<br></br>
			<input
				onChange={(e: any) => {
					setkilo(e.target.value);
				}}
				placeholder="boy"
			/>
			<br></br>
			<input
				onChange={(e: any) => {
					setBoy(e.target.value);
				}}
				placeholder="kilo"
			/>
		</>
	);
};

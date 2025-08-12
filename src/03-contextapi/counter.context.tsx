/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from 'react';

// Context üzerinden yapılacak olan işemlere ait bir tip
export type CounterContextType = { // veriye ulşamamızı ve state güncellememizi başlatmak için Context kullanırız.
	count: number;
	increase?(): void;
	decrease?(): void;
};
// Angulardaki Behavior Subject konusu
export const CounterContext = createContext<CounterContextType>({ count: 0 });
// Uygulama genelinde bir sağlayıcı görevi görür. State'i global olarak diğer componentlere aktarmaktan ve state yönetiminden sorumludur.
const CounterProvider = ({ children }: any) => {
	const [count, setCount] = useState<number>(0);

	const decrease = () => {
        setCount(count - 1);
    };
	const increase = () => {
         setCount(count + 1);
    };

	const values = {
		count,
		increase,
		decrease,
	};

	return (
		<CounterContext.Provider value={values}>{children}</CounterContext.Provider>
	);
};

export default CounterProvider;

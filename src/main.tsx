import { createRoot } from 'react-dom/client';
import './index.css';

import PropsSample from './02-props/props.demo';

createRoot(document.getElementById('root')!).render(
	<>
		{/* <Sample /> */}
		{/* <Sample3 /> */}
		<PropsSample />
	</>
);

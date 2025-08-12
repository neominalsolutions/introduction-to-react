import { createRoot } from 'react-dom/client';
import './index.css';

// import PropsSample from './02-props/props.demo';

import ContextAPISample from './03-contextapi/context.screen';

createRoot(document.getElementById('root')!).render(
	<>
		{/* <PropsSample /> */}
		<ContextAPISample />
	</>
);

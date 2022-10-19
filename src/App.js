import './scss/style.scss';
import 'axios';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
	const [Data, setData] = useState([]);

	useEffect(async () => {
		const result = await axios.get(process.env.PUBLIC_URL + '/DB/data.json');
		setData(result.data.data);
	}, []);

	return (
		<section>
			<ul className='btns'>
				{Data.map((el, idx) => (
					<li key={idx}>{el.title}</li>
				))}
			</ul>

			<div className='boxs'>
				{Data.map((el, idx) => (
					<article key={idx}>{el.content}</article>
				))}
			</div>
		</section>
	);
}

export default App;

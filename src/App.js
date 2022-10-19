import './scss/style.scss';
import 'axios';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
	const [Data, setData] = useState([]);
	const [Index, setIndex] = useState(0);

	useEffect(async () => {
		const result = await axios.get(process.env.PUBLIC_URL + '/DB/data.json');
		setData(result.data.data);
	}, []);

	return (
		<section>
			<ul className='btns'>
				{Data.map((el, idx) => {
					let isOn = '';
					Index === idx && (isOn = 'on');
					return (
						<li key={idx} className={isOn}>
							{el.title}
						</li>
					);
				})}
			</ul>

			<div className='boxs'>
				{Data.map((el, idx) => {
					let isOn = '';
					Index === idx && (isOn = 'on');
					return (
						<article key={idx} className={isOn}>
							{el.content}
						</article>
					);
				})}
			</div>
		</section>
	);
}

export default App;

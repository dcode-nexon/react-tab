import './scss/style.scss';
import 'axios';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
	const [Data, setData] = useState([]);

	useEffect(() => {
		axios.get(process.env.PUBLIC_URL + '/DB/data.json').then((json) => {
			//console.log(json.data.data);
			setData(json.data.data);
		});
	}, []);

	useEffect(() => {
		console.log(Data);
	}, [Data]);
	return <></>;
}

export default App;

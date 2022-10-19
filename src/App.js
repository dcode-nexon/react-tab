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

	useEffect(() => {
		console.log(Data);
	}, [Data]);
	return <></>;
}

export default App;

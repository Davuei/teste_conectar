/*  COMPONENTS  */

import { Line } from 'react-chartjs-2'
import { 
	Chart as ChartJS, 
	CategoryScale, 
	LinearScale, 
	PointElement, 
	LineElement, 
	Title, 
	Tooltip, 
	Legend 
} from 'chart.js'
import { useEffect, useState } from 'react';
import { fetchPIB } from '../../services/PIBServices';
import { ConverterParaDolarFloor } from '../../utils/ConverterParaDolarFloor';

/*
	Componente que retorna o gráfico de linhas com o PIB e o PIB per capita
*/

export function LineGraph() {
	ChartJS.register(
		CategoryScale, 
		LinearScale, 
		PointElement, 
		LineElement, 
		Title, 
		Tooltip, 
		Legend
	);

	const [pibChart, setPibChart] = useState<{ [ano: string]: string }>({});

	useEffect(() => {
		async function getPIB() {
			const resp = await fetchPIB();
			setPibChart(resp[0].resultados[0].series[0].serie);
		}
		getPIB();
	}, []);

	// Array com os anos
	const chartYears = Object.keys(pibChart);

	// Array com os PIBs em milhões de dólares
	const formatedData = Object.entries(pibChart).map(p => {
		return ConverterParaDolarFloor(p[0], p[1]);
	});

	// Objeto que será utilizado para a configuração do gráfico e a exibição dos dados
	const chartData = {
		labels: chartYears,
		datasets: [
			{
				label: 'PIB (em milhões de dólares)',
				data: formatedData,
				borderColor: '#1BA665',
				tension: 0.1,
			},
		],
	};

	return (
		<>
			<Line data={chartData} />
		</>
	)
}
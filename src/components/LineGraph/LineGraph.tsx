/*  STYLES  */

import styles from './LineGraph.module.css';

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
import { useContext } from 'react';
import { ConverterParaDolarFloor } from '../../utils/ConverterParaDolarFloor';
import { PIBContext } from '../../context/PIBContext';

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

	// Context com os dados do PIB e do PIB per capita
	const {PIB, PIBPerCapita} = useContext(PIBContext);

	// Formata os dados do PIB e do PIB per capita para facilitar a iteração e exibição dos dados na tabela
  const formatedPIBAll = {
    ano: Object.keys(PIB),
    PIB: Object.values(PIB),
    PIBPerCapita: Object.values(PIBPerCapita)
  }

	// Array com os anos
	const chartYears = formatedPIBAll.ano;

	// Array com os PIBs em milhões de dólares
	const chartPIB = formatedPIBAll.ano.map((ano, index) => {
		return ConverterParaDolarFloor(ano, formatedPIBAll.PIB[index]);
	});

	// Array com os PIBs per capita em dólares
	const chartPIBPerCapita = formatedPIBAll.ano.map((ano, index) => {
		return ConverterParaDolarFloor(ano, formatedPIBAll.PIBPerCapita[index]);
	});

	// Objeto que será utilizado para a configuração do gráfico do PIB
	const chartDataPIB = {
		labels: chartYears,
		datasets: [
			{
				label: 'PIB (em milhões de dólares)',
				data: chartPIB,
				borderColor: '#1BA665',
			},
		],
	};

	// Objeto que será utilizado para a configuração do gráfico do PIB per capita
	const chartDataPIBPerCapita = {
		labels: chartYears,
		datasets: [
			{
				label: 'PIB per capita (em dólares)',
				data: chartPIBPerCapita,
				borderColor: '#F27405',
			},
		],
	};

	return (
		<div className={ styles.lineGraphDiv }>
			<div className={ styles.graph }>
				<Line options={ {responsive: true, maintainAspectRatio: false} } data={chartDataPIB} />
			</div>

			<div className={ styles.graph }>
				<Line options={ {responsive: true, maintainAspectRatio: false} } data={chartDataPIBPerCapita} />
			</div>
		</div>
	)
}
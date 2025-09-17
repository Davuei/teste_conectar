import { ENDPOINT_PIB, ENDPOINT_PIB_PER_CAPITA, ENDPOINT_PIB_TODO } from "../environments/environments";

export const fetchPIB = async () => {
	try {
		const resp = await fetch(ENDPOINT_PIB);

		const data = await resp.json();
		return data;
	} catch(error) {
		console.error('Erro ao buscar PIB: ', error);
	}
}

export const fetchPIBPerCapita = async () => {
	try {
		const resp = await fetch(ENDPOINT_PIB_PER_CAPITA);

		const data = await resp.json();
		return data;
	} catch(error) {
		console.error('Erro ao buscar PIB per capita: ', error);
	}
}

export const fetchPIBTodo = async () => {
	try {
		const resp = await fetch(ENDPOINT_PIB_TODO);

		const data = await resp.json();
		return data;
	} catch(error) {
		console.error('Erro ao buscar o PIB e o PIB per capita: ', error);
	}
}
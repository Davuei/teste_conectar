import { ENDPOINT_PIB, ENDPOINT_PIB_PER_CAPITA, ENDPOINT_PIB_TODO } from "../environments/environments";

// Busca pelo PIB na API do IBGE
export const fetchPIB = async () => {
	try {
		const resp = await fetch(ENDPOINT_PIB);

		const data = await resp.json();
		return data;
	} catch(error) {
		console.error('Erro ao buscar PIB: ', error);
	}
}

// Busca pelo PIB per capita na API do IBGE
export const fetchPIBPerCapita = async () => {
	try {
		const resp = await fetch(ENDPOINT_PIB_PER_CAPITA);

		const data = await resp.json();
		return data;
	} catch(error) {
		console.error('Erro ao buscar PIB per capita: ', error);
	}
}

// Busca pelo PIB e pelo PIB per capita na API do IBGE
export const fetchPIBTodo = async () => {
	try {
		const resp = await fetch(ENDPOINT_PIB_TODO);

		const data = await resp.json();
		return data;
	} catch(error) {
		console.error('Erro ao buscar o PIB e o PIB per capita: ', error);
	}
}
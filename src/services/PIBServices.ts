import { ENDPOINT_PIB_TODO } from "../environments/environments";

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
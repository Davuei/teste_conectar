/*  STYLES  */



/*  COMPONENTS  */

import { LineGraph } from "../../components/LineGraph/LineGraph";
import { PageContainer } from "../../components/PageContainer/PageContainer";
import { PageHeader } from "../../components/PageHeader/PageHeader";

export function GraficoPIB() {
	return (
		<>
			<PageContainer>
				<PageHeader 
					textH1='Gráfico com a Evolução do PIB Brasileiro' 
					href='/tabela' 
					textLink='Ver tabela com o PIB brasileiro ->' 
					textP='Gráfico que exibe a evolução do PIB brasileiro e do PIB per capita brasileiro' 
				/>

				<LineGraph />
			</PageContainer>
		</>
	)
}
/*  COMPONENTS  */

import { PIBTable } from "../../components/PIBTable/PIBTable"
import { PageContainer } from "../../components/PageContainer/PageContainer"
import { PageHeader } from "../../components/PageHeader/PageHeader"

export function TabelaPIB() {
  return (
    <>
      <PageContainer>
        <PageHeader 
          textH1='Tabela do PIB Brasileiro Por Ano' 
          href='/grafico' 
          textLink='Ver gráficos com o PIB brasileiro ->' 
          textP='Tabela com o ano, o PIB brasileiro e o PIB per capita brasileiro' 
        />

        <PIBTable />
      </PageContainer>
    </>
  )
}
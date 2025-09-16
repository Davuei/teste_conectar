import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { GraficoPIB } from "../../pages/GraficoPIB/GraficoPIB";
import { TabelaPIB } from "../../pages/TabelaPIB/TabelaPIB";
import { useEffect } from "react";

export function MainRouter() {
  // Objeto com as rotas das páginas existentes e os títulos da página correspondentes
  const mapPages = {
    '/grafico': 'Gráfico da Evolução do PIB Brasileiro',
    '/tabela': 'Tabela do PIB Brasileiro'
  }

  // Função que monitora a mudança de página, e altera o título da página
  function ChangePage() {
    const { pathname } = useLocation();

    useEffect(() => {
      const pageName = mapPages[pathname as keyof typeof mapPages];
  
      if(pageName)
        document.title = pageName;
      else
        document.title = 'Erro 404 - Página não encontrada'
    }, [pathname]);

    return null;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/grafico' element={ <GraficoPIB /> } />
        <Route path='/tabela' element={ <TabelaPIB /> } />
      </Routes>

      <ChangePage />
    </BrowserRouter>
  )
}
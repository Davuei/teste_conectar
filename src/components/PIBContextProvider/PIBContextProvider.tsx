import { useEffect, useState } from "react"
import { initialPIBValues, PIBContext } from "../../context/PIBContext"
import type { PIBModel } from "../../models/PIBModel"
import { fetchPIBTodo } from "../../services/PIBServices"

type PIBContextProps = {
  children: React.ReactNode
}

export function PIBContextProvider({ children }: PIBContextProps) {
  const [statePIB, setStatePIB] = useState<PIBModel>(initialPIBValues);

  useEffect(() => {
    async function getPIB() {
      const objPIB = await fetchPIBTodo();

      const formattedPIB: PIBModel = {
        PIB: objPIB[0].resultados[0].series[0].serie,
        PIBPerCapita: objPIB[1].resultados[0].series[0].serie
      }

      setStatePIB(formattedPIB);
    }
    getPIB();
  }, []);

  return (
    <PIBContext.Provider value={statePIB}>
      { children }
    </PIBContext.Provider>
  )
}
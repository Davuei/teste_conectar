import { createContext } from "react"
import type { PIBModel } from "../models/PIBModel"

export const initialPIBValues = {
  PIB: [],
  PIBPerCapita: []
}

export const PIBContext = createContext<PIBModel>(initialPIBValues);
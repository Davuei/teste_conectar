export function ConverterParaDolarFloor(ano: string, valorReais: string) {
    const taxasDeCambioMedias = {
    '1996': 1.005,
    '1997': 1.078,
    '1998': 1.161,
    '1999': 1.815,
    '2000': 1.830,
    '2001': 2.320,
    '2002': 2.920,
    '2003': 3.077,
    '2004': 2.925,
    '2005': 2.434,
    '2006': 2.177,
    '2007': 1.947,
    '2008': 1.834,
    '2009': 1.996,
    '2010': 1.759,
    '2011': 1.675,
    '2012': 1.954,
    '2013': 2.157,
    '2014': 2.353,
    '2015': 3.339,
    '2016': 3.490,
    '2017': 3.192,
    '2018': 3.655,
    '2019': 3.945,
    '2020': 5.156,
    '2021': 5.398,
    '2022': 5.167,
  };

  // Converte o valor em reais para um number, para multiplicá-lo com a taxa de câmbio
  const valorNumber = Number(valorReais);
  const taxa = taxasDeCambioMedias[ano as keyof typeof taxasDeCambioMedias];

  // Retorna o valor em dólar sem decimais
  return Math.floor(valorNumber / taxa);
}
export const FuelType = {
  Gasoline: 'Gasoline',
  Diesel: 'Diesel',
  Lpg: 'Lpg',
  Cng: 'Cng',
  Electric: 'Electric'
} as const

export const Transmission = {
  Automatic: 'Automatic',
  Manual: 'Manual',
  Cvt: 'Cvt'
} as const

export const NumberOfDoors = {
  Three: 3,
  Five: 5,
  Seven: 7
} as const

const startYear = 1990
const currentYear = new Date().getFullYear()
export const years = Array.from(
  { length: currentYear - startYear + 1 },
  (_, index) => startYear + index
)

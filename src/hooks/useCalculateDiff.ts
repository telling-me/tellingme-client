const useCalculateDiff = (startDate: number[]) => {
  const firstDate = new Date(startDate[0], startDate[1] - 1, startDate[2])
  const secondDate = new Date()
  secondDate.setHours(secondDate.getHours() - 6)

  const diffSeconds = Math.abs(firstDate.getTime() - secondDate.getTime())
  const diffDays = Math.ceil(diffSeconds / (1000 * 60 * 60 * 24))

  return diffDays
}

export default useCalculateDiff

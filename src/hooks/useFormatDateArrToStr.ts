const useFormatDateArrToStr = (date: number[], delimiter: string = '.') => {
  const newArr: string[] = [date[0].toString()]

  if (date[1] < 10) {
    newArr.push(`0${date[1]}`)
  } else {
    newArr.push(date[1].toString())
  }
  if (date[2] < 10) {
    newArr.push(`0${date[2]}`)
  } else {
    newArr.push(date[2].toString())
  }

  if (delimiter === 'ymd') {
    return `${newArr[0]}년 ${newArr[1]}월 ${newArr[2]}일`
  }

  return newArr.join(delimiter)
}

export default useFormatDateArrToStr

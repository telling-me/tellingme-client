const useFilterling = (nickname: string) => {
  const forbiddenWords = process.env.REACT_APP_FORBIDDEN_WORD as string
  const forbiddenWordsPattern = new RegExp(forbiddenWords, 'i')

  if (forbiddenWordsPattern.test(nickname)) return false
  else return true
}

export default useFilterling

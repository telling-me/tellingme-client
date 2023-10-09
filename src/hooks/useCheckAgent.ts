const useCheckAgent = () => {
  const userAgent = window.navigator.userAgent

  if (userAgent.match(/Android/i)) {
    return 'Android'
  } else if (userAgent.match(/iPhone|iPad|iPod/i)) {
    return 'iOS'
  } else {
    return 'Web'
  }
}

export default useCheckAgent

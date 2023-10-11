import { useEffect } from 'react'
import useCommonStore from 'stores/useCommonStore'
import useLibraryStore from 'stores/useLibraryStore'

/**
 * 전역변수 모달 초기화
 * @returns
 */
const useInitModal = () => {
  const { setMobileOnlyModal } = useCommonStore()
  const { setHelpModalOn } = useLibraryStore()

  useEffect(() => {
    setMobileOnlyModal(false)
    setHelpModalOn(false)
  }, [])

  return true
}

export default useInitModal

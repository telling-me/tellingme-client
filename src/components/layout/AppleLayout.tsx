import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

// hooks
import { useCheckIdQuery } from 'hooks/queries'

const ApplyLayout = () => {
  const [idToken] = useState<string>(useLocation().hash.split('#code=')[1].split('&id_token=')[1])

  useCheckIdQuery('apple', '', idToken)

  return <></>
}

export default ApplyLayout

import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const ApplyLayout = () => {
  const [idToken] = useState<string>(useLocation().hash.split('#code=')[1].split('&id_token=')[1])

  const [socialId, setSocialId] = useState<string>('')

  void fetch('http://3.38.8.152:8080/api/oauth/apple', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      idToken
    },
    body: JSON.stringify({ socialId: '' })
  })
    .then(async (response) => await response.json())
    .then((result) => {
      setSocialId(result.socialId.split('Optional[')[1].split(']')[0])
      console.log(socialId)
    })
  return <>{idToken}</>
}

export default ApplyLayout

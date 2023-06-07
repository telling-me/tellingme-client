import React from 'react'
import { useUnsubscribeNewsLetterMutation } from 'hooks'

const NewsLetterUnsubscribePage = () => {
  const email = new URLSearchParams(window.location.search).get('email')
  const { mutate: unsubscribeMutate } = useUnsubscribeNewsLetterMutation()

  unsubscribeMutate(
    { email: email as string },
    {
      onSuccess: () => {
        window.location.href = '/newsletter/unsubscribe/complete'
      }
    }
  )

  return <div>{email}</div>
}

export default NewsLetterUnsubscribePage

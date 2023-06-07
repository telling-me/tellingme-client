import React from 'react'
import { useUnsubscribeNewsLetterMutation } from 'hooks/mutations/user'

const NewsLetterUnsubscribePage = () => {
  const email = new URLSearchParams(window.location.search).get('email')
  const { mutate: unsubscribeMutate } = useUnsubscribeNewsLetterMutation()

  return (
    <div
      onClick={() => {
        unsubscribeMutate(
          { email: email as string },
          {
            onSuccess: () => {
              window.location.href = '/newsletter/unsubscribe/complete'
            }
          }
        )
      }}
    >
      {email}을 구독 취소 하시겠습니까?
    </div>
  )
}

export default NewsLetterUnsubscribePage

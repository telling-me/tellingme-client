import React, { useState } from 'react'
import {
  NewsLetterComponent,
  NewsLetterFooter,
  NewsLetterForm,
  NewsLetterFunnel,
  NewsLetterHeader,
  NewsLetterHr
} from './style'
import style from 'styles/styled-components/styled'
import BasicIcon from 'assets/icons'
import { Button, CheckBox, Input, RadioButton } from 'components/core'
import { useNewsLetterQuery } from 'hooks/queries'

const NewsLetterPage = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [funnel, setFunnel] = useState('')
  const [etcFunnel, setEtcFunnel] = useState('')

  const [personalAgree, setPersonalAgree] = useState(false)
  const [adAgree, setAdAgree] = useState(false)

  const newsLetterQuery = useNewsLetterQuery({
    email,
    name,
    funnel: funnel === 'etc' ? etcFunnel : funnel
  })

  const handleClick = () => {
    if (
      email !== '' &&
      name !== '' &&
      ((funnel === 'etc' && etcFunnel !== '') || (funnel !== 'etc' && funnel !== '')) &&
      personalAgree &&
      adAgree
    ) {
      newsLetterQuery.refetch().catch(() => {})
    } else {
      alert('제대로 입력')
    }
  }

  return (
    <NewsLetterComponent>
      <NewsLetterHeader>
        <BasicIcon.Logo width="103px" height="43px" />
        <style.TextSpan textSize="h3_b" textColor="gray7" _margin="28px 0px 24px 0px">
          서비스 출시 알림 신청하기
        </style.TextSpan>
        <style.TextSpan textSize="b1" textColor="gray8">
          서비스가 출시되면 가장 먼저 알려드릴게요!
        </style.TextSpan>
      </NewsLetterHeader>

      <NewsLetterHr />

      <NewsLetterForm>
        <Input label="이메일 주소" _placeholder="이메일을 입력해주세요." _value={email} _setValue={setEmail} />
        <Input label="성함" _placeholder="성함을 입력해주세요." _value={name} _setValue={setName} _margin="28px 0px" />

        <NewsLetterFunnel>
          <style.TextSpan textSize="h6" textColor="black" _margin="0px 10px">
            유입 경로
          </style.TextSpan>

          <RadioButton
            options={[
              {
                label: '인스타그램',
                value: 'instagram'
              },
              {
                label: '커뮤니티  ex. 에브리타임',
                value: 'community'
              },
              {
                label: '지인 추천',
                value: 'friend'
              },
              {
                label: '그 외 광고',
                value: 'ad'
              },
              {
                label: '기타',
                value: 'etc'
              }
            ]}
            mainSize="small"
            _margin="16px"
            _value={funnel}
            _setValue={setFunnel}
          />
          <Input
            _placeholder="직접 입력해주세요."
            _disabled={funnel !== 'etc'}
            _value={etcFunnel}
            _setValue={setEtcFunnel}
            _margin="4px 0px 0px 34px"
            _width="calc(100% - 34px)"
          />
        </NewsLetterFunnel>
      </NewsLetterForm>

      <NewsLetterHr />

      <NewsLetterFooter>
        <CheckBox
          label="(필수) 개인 정보 수집 및 이용에 동의합니다."
          labelSize="c"
          mainLabelGap="4px"
          mainSize="small"
          _checked={personalAgree}
          _setChecked={setPersonalAgree}
          buttonText="보기"
        />
        <CheckBox
          label="(필수) 광고성 정보 수신에 동의합니다."
          labelSize="c"
          mainLabelGap="4px"
          mainSize="small"
          _checked={adAgree}
          _setChecked={setAdAgree}
          buttonText="보기"
          _margin="8px 0px 36px 0px"
        />
        <Button
          buttonType="primary"
          contentType="text"
          text="신청하기"
          textSize="h6"
          textColor="primary700"
          _width="100%"
          _height="55px"
          _onClick={() => {
            handleClick()
          }}
        />
      </NewsLetterFooter>
    </NewsLetterComponent>
  )
}

export default NewsLetterPage

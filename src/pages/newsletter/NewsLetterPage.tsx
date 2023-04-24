import React, { useState } from 'react'

import { PersonalAgreeData, AdAgreeData } from './agreeData'
import {
  NewsLetterComponent,
  NewsLetterFooter,
  NewsLetterForm,
  NewsLetterFunnel,
  NewsLetterHeader,
  NewsLetterHr,
  PersonalAgreeContent
} from './style'

import { Button, CheckBox, Input, Modal, RadioButton } from 'components'
import style from 'styles/styled-components/styled'
import Icons from 'assets/icons'

import { useNewsLetterQuery } from 'hooks/queries'
import useWindowSize from 'hooks/useWindowSize'

import { emailCheck } from 'utils/signRegex'

const NewsLetterPage = () => {
  const windowSize = useWindowSize().width

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [funnel, setFunnel] = useState('')
  const [etcFunnel, setEtcFunnel] = useState('')

  const [personalAgree, setPersonalAgree] = useState(false)
  const [paOpen, setPaOpen] = useState(false)
  const [adAgree, setAdAgree] = useState(false)
  const [aaOpen, setAaOpen] = useState(false)

  const newsLetterQuery = useNewsLetterQuery({
    email,
    name,
    funnel: funnel === 'etc' ? etcFunnel : funnel
  })

  const handleApply = () => {
    if (
      email !== '' &&
      name !== '' &&
      ((funnel === 'etc' && etcFunnel !== '') || (funnel !== 'etc' && funnel !== '')) &&
      personalAgree &&
      adAgree
    ) {
      if (!emailCheck(email)) {
        alert('이메일 형식 x')
      } else {
        newsLetterQuery.refetch().catch(() => {})
      }
    } else {
      alert('빈칸 있음')
    }
  }

  return (
    <NewsLetterComponent>
      <NewsLetterHeader>
        <Icons.Logo width="103px" height="43px" />
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
          buttonText="보기"
          labelSize="c"
          mainLabelGap="4px"
          mainSize="small"
          _checked={personalAgree}
          _setChecked={setPersonalAgree}
          _onClick={() => {
            setPaOpen(true)
          }}
        />
        <CheckBox
          label="(필수) 광고성 정보 수신에 동의합니다."
          buttonText="보기"
          labelSize="c"
          mainLabelGap="4px"
          mainSize="small"
          _checked={adAgree}
          _setChecked={setAdAgree}
          _margin="8px 0px 36px 0px"
          _onClick={() => {
            setAaOpen(true)
          }}
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
            handleApply()
          }}
        />
      </NewsLetterFooter>

      {paOpen && (
        <Modal
          _width="100%"
          _maxWidth="425px"
          _height={windowSize != null ? (windowSize > 768 ? '379px' : '443px') : '100%'}
          _borderRadius="20px"
          _padding="10px"
          _onClick={() => {
            setPaOpen(false)
          }}
        >
          <Button
            buttonType="noFilled"
            contentType="icon"
            icon="close"
            iconSize="medium"
            iconColor="gray6"
            _margin="0px 0px 0px auto"
            _onClick={() => {
              setPaOpen(false)
            }}
          />

          <style.TextSpan textSize="b1_b" textColor="gray7" _margin="4px 0px 20px 0px">
            개인정보 수집 및 이용 동의서
          </style.TextSpan>

          <PersonalAgreeContent>{PersonalAgreeData}</PersonalAgreeContent>
        </Modal>
      )}
      {aaOpen && (
        <Modal
          _width="100%"
          _maxWidth="425px"
          _height={windowSize != null ? (windowSize > 768 ? '379px' : '443px') : '100%'}
          _borderRadius="20px"
          _padding="10px"
          _onClick={() => {
            setAaOpen(false)
          }}
        >
          <Button
            buttonType="noFilled"
            contentType="icon"
            icon="close"
            iconSize="medium"
            iconColor="gray6"
            _margin="0px 0px 0px auto"
            _onClick={() => {
              setAaOpen(false)
            }}
          />

          <style.TextSpan textSize="b1_b" textColor="gray7" _margin="4px 0px 20px 0px">
            광고성 정보 수신 동의서
          </style.TextSpan>

          <PersonalAgreeContent>{AdAgreeData}</PersonalAgreeContent>
        </Modal>
      )}
    </NewsLetterComponent>
  )
}

export default NewsLetterPage

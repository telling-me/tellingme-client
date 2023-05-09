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

  const [alertOpen, setAlertOpen] = useState<number>(0)

  const alertTexts = [
    '이메일을 입력해주세요',
    '이메일 형식이 올바르지 않습니다',
    '성함을 입력해주세요',
    '기타를 입력해주세요',
    '유입 경로를 선택해주세요',
    '필수 동의 항목을 체크해주세요'
  ]

  const newsLetterQuery = useNewsLetterQuery({
    email,
    name,
    funnel: funnel === 'etc' ? etcFunnel : funnel
  })

  const handleApply = () => {
    if (email === '') {
      setAlertOpen(1)
    } else if (!emailCheck(email)) {
      setAlertOpen(2)
    } else if (name === '') {
      setAlertOpen(3)
    } else if (funnel === 'etc' && etcFunnel === '') {
      setAlertOpen(4)
    } else if (funnel !== 'etc' && funnel === '') {
      setAlertOpen(5)
    } else if (!personalAgree || !adAgree) {
      setAlertOpen(6)
    } else {
      newsLetterQuery.refetch().catch(() => {})
    }
  }

  return (
    <NewsLetterComponent>
      <NewsLetterHeader>
        <Icons.Logo width="103px" height="43px" />
        <style.TextSpan typo="h3_b" textColor="gray7" _margin="28px 0px 24px 0px">
          서비스 출시 알림 신청하기
        </style.TextSpan>
        <style.TextSpan typo="b1" textColor="gray8">
          서비스가 출시되면 가장 먼저 알려드릴게요!
        </style.TextSpan>
      </NewsLetterHeader>

      <NewsLetterHr />

      <NewsLetterForm>
        <Input label="이메일 주소" _placeholder="이메일을 입력해주세요." _value={email} setValue={setEmail} />
        <Input label="성함" _placeholder="성함을 입력해주세요." _value={name} setValue={setName} _margin="48px 0px" />

        <NewsLetterFunnel>
          <style.TextSpan typo="h6" textColor="black" _margin="0px 10px">
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
            _value={etcFunnel}
            setValue={setEtcFunnel}
            _disabled={funnel !== 'etc'}
            _margin="24px 0px 0px 34px"
            _width="calc(100% - 34px)"
          />
        </NewsLetterFunnel>
      </NewsLetterForm>

      <NewsLetterHr />

      <NewsLetterFooter>
        <CheckBox
          checkSize="small"
          label="(필수) 개인 정보 수집 및 이용에 동의합니다."
          buttonText="보기"
          _checked={personalAgree}
          setChecked={setPersonalAgree}
          buttonOnClick={() => {
            setPaOpen(true)
          }}
        />
        <CheckBox
          checkSize="small"
          label="(필수) 광고성 정보 수신에 동의합니다."
          buttonText="보기"
          _checked={adAgree}
          setChecked={setAdAgree}
          _margin="8px 0px 36px 0px"
          buttonOnClick={() => {
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

          <style.TextSpan typo="b1_b" textColor="gray7" _margin="4px 0px 20px 0px">
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

          <style.TextSpan typo="b1_b" textColor="gray7" _margin="4px 0px 20px 0px">
            광고성 정보 수신 동의서
          </style.TextSpan>

          <PersonalAgreeContent>{AdAgreeData}</PersonalAgreeContent>
        </Modal>
      )}
      {alertOpen !== 0 && (
        <Modal
          _width="100%"
          _maxWidth="425px"
          _height="150px"
          _borderRadius="20px"
          _padding="30px 20px 20px 20px"
          _onClick={() => {
            setAlertOpen(0)
          }}
        >
          <style.TextP typo="b1" textColor="black">
            {alertTexts[alertOpen - 1]}
          </style.TextP>

          <Button
            buttonType="secondary"
            contentType="text"
            text="확인"
            textSize="h6"
            textColor="logo"
            _margin="28px 0px 0px 0px"
            _padding="18px 127px"
            _onClick={() => {
              setAlertOpen(0)
            }}
          />
        </Modal>
      )}
    </NewsLetterComponent>
  )
}

export default NewsLetterPage

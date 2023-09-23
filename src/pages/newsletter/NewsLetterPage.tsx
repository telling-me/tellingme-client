import React, { useEffect, useState } from 'react'
import { PersonalAgreeData, AdAgreeData } from './agreeData'
import {
  ApplyButton,
  NewsLetterComponent,
  NewsLetterFooter,
  NewsLetterForm,
  NewsLetterFunnel,
  NewsLetterHeader,
  PersonalAgreeContent
} from './style'

// components
import { CheckBox, Input, Modal, RadioButton, Hr, IconButton, Loading, OneButtonModal } from 'components'

// styles
import style from 'styles/styled-components/styled'
import { Theme } from 'styles/DefaultTheme'

// assets
import Icons from 'assets/icons'

// hooks
import { useNewsLetterQuery, useWindowSize, useChangeColor } from 'hooks'

// utils
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

  const [loading, setLoading] = useState(false)

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
      setLoading(true)
      newsLetterQuery.refetch().catch(() => {})
    }
  }

  useEffect(() => {
    if (funnel !== 'etc') {
      setEtcFunnel('')
    }
  }, [funnel])

  return (
    <NewsLetterComponent>
      <NewsLetterHeader>
        <Icons.Logo width="103" height="43" fill={Theme.colors.logo} />

        <TextSpan typo="h3_b" textColor="gray7" _margin="28px 0px 24px 0px">
          텔링미 소식 구독 신청하기
        </TextSpan>
        <TextSpan typo="b1" textColor="gray8">
          텔링미의 새로운 이야기를 하나씩 풀어드릴게요!
        </TextSpan>
      </NewsLetterHeader>

      <Hr _margin="36px 0px" />

      <NewsLetterForm>
        <Input label="이메일 주소" _placeholder="이메일을 입력해주세요." _value={email} setValue={setEmail} />
        <Input label="성함" _placeholder="성함을 입력해주세요." _value={name} setValue={setName} _margin="28px 0px" />

        <NewsLetterFunnel>
          <TextSpan typo="h6" textColor="black" _margin="0px 10px">
            유입 경로
          </TextSpan>

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
                label: '축제 부스',
                value: 'festival'
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
            _margin="4px 0px 0px 34px"
            _width="calc(100% - 34px)"
          />
        </NewsLetterFunnel>
      </NewsLetterForm>

      <Hr _margin="36px 0px" />

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
        <ApplyButton
          onClick={() => {
            handleApply()
          }}
        >
          {loading ? (
            <Loading size={48} color="primary700" />
          ) : (
            <TextP typo="h6" textColor="primary700">
              신청하기
            </TextP>
          )}
        </ApplyButton>
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
          <IconButton
            buttonType="noFilled"
            _width="fit-content"
            _height="fit-content"
            _margin="0 0 0 auto"
            _onClick={() => {
              setPaOpen(false)
            }}
          >
            <Icons.Close width="24" height="24" stroke={useChangeColor('gray6')} />
          </IconButton>

          <TextSpan typo="b1_b" textColor="gray7" _margin="4px 0px 20px 0px">
            개인정보 수집 및 이용 동의서
          </TextSpan>

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
          <IconButton
            buttonType="noFilled"
            _width="fit-content"
            _height="fit-content"
            _margin="0 0 0 auto"
            _onClick={() => {
              setAaOpen(false)
            }}
          >
            <Icons.Close width="24" height="24" stroke={useChangeColor('gray6')} />
          </IconButton>

          <TextSpan typo="b1_b" textColor="gray7" _margin="4px 0px 20px 0px">
            광고성 정보 수신 동의서
          </TextSpan>

          <PersonalAgreeContent>{AdAgreeData}</PersonalAgreeContent>
        </Modal>
      )}
      {alertOpen !== 0 && (
        <OneButtonModal
          text={alertTexts[alertOpen - 1]}
          _onClick={() => {
            setAlertOpen(0)
          }}
        />
      )}
    </NewsLetterComponent>
  )
}

const { TextP, TextSpan } = style

export default NewsLetterPage

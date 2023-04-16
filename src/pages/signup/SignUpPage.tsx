import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

import { ContentWrapper, MoveButtonWrapper, SignUpHeader, SignUpWrapper, SkipButton } from './style'

// type
import type { ColorType, IconType } from 'type/common'

// hooks
import { useSignUpQuery } from 'hooks/queries'

// component
import { birthDateData, genderData, jobData, mbtiData, purposeData, stepTextData } from './data'
import { Button, CheckBox, Dropdown, Input, ProgressBar } from 'components'
import style from 'styles/styled-components/styled'
import Icon from 'assets/icons'
import { useCheckNickname } from 'hooks/queries/checknickname'

const SignUpPage = () => {
  const location = useLocation()
  const socialId = location.state.socialId
  const socialLoginType = location.state.socialLoginType

  const [step, setStep] = useState(0)

  // JoinResponseDto
  const [isAgree, setIsAgree] = useState(false)
  const [nickname, setNickname] = useState('')
  const [isError, setIsError] = useState(false)
  const [errorText, setErrorText] = useState('')
  const [purpose, setPurpose] = useState<string[]>([])
  const [job, setJob] = useState<number>(-1)
  const [jobInfo, setJobInfo] = useState('')
  const [gender, setGender] = useState('')
  const [year, setYear] = useState<string | undefined>(undefined)
  const [month, setMonth] = useState<string | undefined>(undefined)
  const [day, setDay] = useState<string | undefined>(undefined)
  const [mbti, setMbti] = useState<string | undefined>(undefined)

  const signupQuery = useSignUpQuery({
    allowNotification: true,
    birthDate:
      year !== undefined && month !== undefined && day !== undefined
        ? `${year}-${month.length === 1 ? `0${month}` : month}-${day.length === 1 ? `0${day}` : day}`
        : ``,
    gender,
    job,
    jobInfo: job === 5 ? jobInfo : '',
    mbti: mbti !== undefined ? mbti : '',
    nickname,
    purpose: `[${purpose.join(',')}]`,
    socialId,
    socialLoginType
  })

  const nicknameQuery = useCheckNickname(nickname, setIsError, setErrorText, setStep)

  const handleCheckNickname = async () => {
    await nicknameQuery.refetch()
  }

  const handleClick = () => {
    signupQuery.refetch().catch(() => {})
  }

  const handleSkip = () => {
    if (step === 4) {
      setGender('')
      setStep(step + 1)
    } else if (step === 5) {
      setYear(undefined)
      setMonth(undefined)
      setDay(undefined)
      setStep(step + 1)
    } else if (step === 6) {
      setMbti('')
      handleClick()
    }
  }

  return (
    <SignUpWrapper>
      <SignUpHeader>
        <Icon.Logo _margin="12 " />

        {[4, 5, 6].includes(step) && (
          <SkipButton
            onClick={() => {
              handleSkip()
            }}
          >
            <style.TextSpan textSize="b1" textColor="logo">
              건너뛰기
            </style.TextSpan>
          </SkipButton>
        )}
      </SignUpHeader>

      <ProgressBar percent={`${(100 / 7) * (step + 1)}`} />

      <style.TextSpan
        textSize="h4"
        textColor="black"
        _margin={
          [0, 1, 5, 6].includes(step) ? '60px 0px 110px 0px' : step === 2 ? '60px 0px 8px 0px' : '60px 0px 80px 0px'
        }
      >
        {stepTextData[step]}
      </style.TextSpan>

      {step === 2 && (
        <style.TextSpan textSize="b2" textColor="gray6" _margin="0px 0px 60px 0px">
          최대 2가지 선택 가능
        </style.TextSpan>
      )}

      {
        // 서비스 이용 약관 (추후에 디자인 나오면 약관 모달 달아야 함)
        step === 0 ? (
          <CheckBox label="전체 동의합니다" buttonText="전문 보기" _checked={isAgree} _setChecked={setIsAgree} />
        ) : // 닉네임
        step === 1 ? (
          <Input
            _placeholder="2-8글자 이내"
            infoText="영문, 숫자, 띄어쓰기, 특수문자 불가"
            errorText={errorText}
            isError={isError}
            setIsError={setIsError}
            _value={nickname}
            _setValue={setNickname}
          />
        ) : // 고민
        step === 2 ? (
          <ContentWrapper type="purpose">
            {purposeData.map((v: { text: string; icon: IconType }, i: number) => {
              return (
                <Button
                  key={i}
                  buttonType="tertiaryModified"
                  contentType="col"
                  text={v.text}
                  textSize="h6"
                  textColor="gray7"
                  icon={v.icon}
                  iconSize="large"
                  iconColor="logo"
                  _active={purpose.includes(i.toString())}
                  _gap="15px"
                  _width="105px"
                  _height="114px"
                  _onClick={() => {
                    const idx = purpose.indexOf(i.toString())

                    if (idx === -1 && purpose.length < 2) {
                      setPurpose([...purpose, i.toString()])
                    } else if (idx !== -1) {
                      setPurpose([...purpose.slice(0, idx), ...purpose.slice(idx + 1)])
                    }
                  }}
                />
              )
            })}
          </ContentWrapper>
        ) : // 직업
        step === 3 ? (
          <ContentWrapper type="job">
            {jobData.map((v: { text: string; icon: IconType }, i: number) => {
              return (
                <Button
                  key={i}
                  buttonType="tertiaryModified"
                  contentType="row"
                  text={v.text}
                  textSize="h6"
                  textColor="gray7"
                  icon={v.icon}
                  iconSize="large"
                  iconColor="logo"
                  _active={job === i}
                  _gap="23px"
                  _width="205px"
                  _height="55px"
                  _padding="0px 0px 0px 24px"
                  _justifyContent="flex-start"
                  _onClick={() => {
                    setJob(i)
                  }}
                />
              )
            })}
            <Button
              buttonType="tertiaryModified"
              contentType={job === 5 ? 'withInput' : 'row'}
              text="기타"
              textSize="h6"
              textColor="gray7"
              icon="heart"
              iconSize="large"
              iconColor="logo"
              jobInfo={jobInfo}
              setJobInfo={setJobInfo}
              _active={job === 5}
              _gap="23px"
              _width="205px"
              _height={job === 5 ? '102px' : '55px'}
              _padding="0px 0px 0px 24px"
              _justifyContent="flex-start"
              _onClick={() => {
                setJob(5)
              }}
            />
          </ContentWrapper>
        ) : // 성별
        step === 4 ? (
          <ContentWrapper type="gender">
            {genderData.map((v: { text: string; icon: IconType; iconColor: ColorType }, i: number) => {
              return (
                <Button
                  key={i}
                  buttonType="tertiaryModified"
                  contentType="col"
                  text={v.text}
                  textSize="h6"
                  textColor="gray7"
                  icon={v.icon}
                  iconSize="large"
                  iconColor={v.iconColor}
                  _active={(gender === 'male' && v.text === '남성') || (gender === 'female' && v.text === '여성')}
                  _gap="15px"
                  _width="103px"
                  _height="114px"
                  _onClick={() => {
                    setGender(i === 0 ? 'male' : 'female')
                  }}
                />
              )
            })}
          </ContentWrapper>
        ) : // 생년월일
        step === 5 ? (
          <ContentWrapper type="birthDate">
            {birthDateData.map(
              (
                v: {
                  defaultText: string
                  data: string[] | number[]
                  _padding: string
                  _flexGrow: string
                },
                i: number
              ) => {
                return (
                  <Dropdown
                    key={i}
                    defaultText={v.defaultText}
                    data={v.data}
                    _selected={i === 0 ? year : i === 1 ? month : day}
                    _setSelected={i === 0 ? setYear : i === 1 ? setMonth : setDay}
                    _padding={v._padding}
                    _flexGrow={v._flexGrow}
                  />
                )
              }
            )}
          </ContentWrapper>
        ) : (
          // mbti
          step === 6 && (
            <Dropdown
              defaultText="mbti 선택"
              data={mbtiData}
              _selected={mbti}
              _setSelected={setMbti}
              _width="100%"
              _padding="16.5px 30px"
            />
          )
        )
      }

      <MoveButtonWrapper>
        <Button
          buttonType="secondary"
          contentType="icon"
          icon="arrowleft"
          iconSize="medium"
          iconColor="logo"
          _padding="16px"
          _disabled={step === 0}
          _onClick={() => {
            setStep(step - 1)
          }}
        />
        {step !== 6 ? (
          <Button
            buttonType="secondary"
            contentType="icon"
            icon="arrowright"
            iconSize="medium"
            iconColor="logo"
            _margin="0 0 0 auto"
            _padding="16px"
            _disabled={
              (step === 0 && !isAgree) ||
              (step === 1 && nickname === '') ||
              (step === 2 && purpose.length === 0) ||
              (step === 3 && (job === undefined || (job === 5 && jobInfo === ''))) ||
              (step === 4 && gender === '') ||
              (step === 5 && (year === undefined || month === undefined || day === undefined))
            }
            _onClick={() => {
              if (step === 1) {
                handleCheckNickname().catch(() => {})
              } else {
                setStep(step + 1)
              }
            }}
          />
        ) : (
          <Button
            buttonType="secondary"
            contentType="text"
            text="완료"
            textSize="h6"
            textColor="logo"
            _margin="0 0 0 auto"
            _padding="18px 32px"
            _disabled={mbti === undefined}
            _onClick={() => {
              handleClick()
            }}
          />
        )}
      </MoveButtonWrapper>
    </SignUpWrapper>
  )
}

export default SignUpPage

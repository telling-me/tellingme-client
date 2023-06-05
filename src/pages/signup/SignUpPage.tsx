import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

// hooks
import { useCheckNicknameMutation } from 'hooks/mutations/user'
import { useSignUpQuery } from 'hooks/queries'
import useWindowSize from 'hooks/useWindowSize'

// component
import styled from 'styled-components'
import {
  CreateBirthDate,
  CreateGender,
  CreateJob,
  CreateMbti,
  CreateNickname,
  CreateNotification,
  CreatePurpose,
  CreateTermsOfService,
  ProgressBar,
  SignUpBottomButton,
  SignUpHeader,
  SignUpTitle
} from 'components'

const SignUpPage = () => {
  // 화면 너비
  const windowSize = useWindowSize().width

  // 페이지
  const navigate = useNavigate()

  // socialId, socialLoginType 가져오기
  const location = useLocation()
  const socialId = location.state.socialId
  const socialLoginType = location.state.socialLoginType

  // 회원가입 단계 정보
  const [step, setStep] = useState(0)
  const handlePrevStep = () => {
    setStep(step - 1)
  }
  const handleNextStep = () => {
    setStep(step + 1)
  }

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
  const [allowNotification, setAllowNotification] = useState<boolean>(false)

  // step 이동 버튼 disabled 여부
  const canMove = () => {
    return (
      (step === 0 && !isAgree) ||
      (step === 1 && nickname === '') ||
      (step === 2 && purpose.length === 0) ||
      (step === 3 && (job === undefined || (job === 5 && jobInfo === ''))) ||
      (step === 4 && gender === '') ||
      (step === 5 && (year === undefined || month === undefined || day === undefined))
    )
  }
  const canLastMove = () => {
    return mbti === undefined
  }

  // 닉네임 확인
  const { mutate: handleCheckNickname } = useCheckNicknameMutation(nickname, setIsError, setErrorText, () => {
    setStep(2)
  })

  // 회원가입
  const signupQuery = useSignUpQuery({
    allowNotification,
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
  const handleSignUp = () => {
    signupQuery.refetch().catch(() => {})
    navigate('/login')
  }

  // 건너뛰기
  const handleSkip = () => {
    if (step === 4) {
      setGender('')
    } else if (step === 5) {
      setYear(undefined)
      setMonth(undefined)
      setDay(undefined)
    } else if (step === 6) {
      setMbti('')
    }

    handleNextStep()
  }

  useEffect(() => {
    if (allowNotification) {
      handleSignUp()
    }
  }, [allowNotification])

  return (
    <SignUpWrapper>
      <SignUpHeader step={step} windowSize={windowSize} handleSkip={handleSkip} />

      {step !== 7 && <ProgressBar percent={`${(99 / 7) * (step + 1)}`} />}

      <SignUpTitle
        step={step}
        handlePrevStep={handlePrevStep}
        handleNextStep={handleNextStep}
        windowSize={windowSize}
        canMove={canMove}
        canLastMove={canLastMove}
        handleCheckNickname={handleCheckNickname}
      />

      {
        // 서비스 이용 약관 (추후에 디자인 나오면 약관 모달 달아야 함)
        step === 0 ? (
          <CreateTermsOfService isAgree={isAgree} setIsAgree={setIsAgree} />
        ) : // 닉네임
        step === 1 ? (
          <CreateNickname
            errorText={errorText}
            isError={isError}
            setIsError={setIsError}
            nickname={nickname}
            setNickname={setNickname}
          />
        ) : // 고민
        step === 2 ? (
          <CreatePurpose purpose={purpose} setPurpose={setPurpose} />
        ) : // 직업
        step === 3 ? (
          <CreateJob job={job} setJob={setJob} jobInfo={jobInfo} setJobInfo={setJobInfo} />
        ) : // 성별
        step === 4 ? (
          <CreateGender gender={gender} setGender={setGender} />
        ) : // 생년월일
        step === 5 ? (
          <CreateBirthDate year={year} setYear={setYear} month={month} setMonth={setMonth} day={day} setDay={setDay} />
        ) : // mbti
        step === 6 ? (
          <CreateMbti mbti={mbti} setMbti={setMbti} />
        ) : (
          // 알람
          step === 7 && <CreateNotification setAllowNotification={setAllowNotification} _onClick={handleSignUp} />
        )
      }

      <SignUpBottomButton
        step={step}
        handlePrevStep={handlePrevStep}
        handleNextStep={handleNextStep}
        windowSize={windowSize}
        canMove={canMove}
        canLastMove={canLastMove}
        handleCheckNickname={handleCheckNickname}
      />
    </SignUpWrapper>
  )
}

const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0;
  }

  ${(props) => `background-color: ${props.theme.colors.side.side200}`}

  height: max-content;
  padding: 0px 8px;

  @media all and (min-width: 1024px) {
    max-width: 1216px;
    margin: 0 auto;
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    margin: 0px 44px;
  }

  @media all and (max-width: 767px) {
    margin: 0px 9px;
  }
`

export default SignUpPage

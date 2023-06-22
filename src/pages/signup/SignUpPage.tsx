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
  const [gender, setGender] = useState<string | null>(null)
  const [year, setYear] = useState<string | null>(null)
  const [month, setMonth] = useState<string | null>(null)
  const [day, setDay] = useState<string | null>(null)
  const [mbti, setMbti] = useState<string | null>(null)
  const [allowNotification, setAllowNotification] = useState<boolean>(false)

  // step 이동 버튼 disabled 여부
  const canMove = () => {
    return (
      (step === 0 && !isAgree) ||
      (step === 1 && nickname === '') ||
      (step === 2 && purpose.length === 0) ||
      (step === 3 && (job == null || (job === 5 && jobInfo === ''))) ||
      (step === 4 && gender == null) ||
      (step === 5 && (year == null || month == null || day == null)) ||
      (step === 6 && mbti == null)
    )
  }

  // 닉네임 확인
  const { mutate: handleCheckNickname } = useCheckNicknameMutation(nickname, setIsError, setErrorText, () => {
    setStep(2)
  })

  // 회원가입
  const signupQuery = useSignUpQuery({
    allowNotification,
    birthDate:
      year != null && month != null && day != null
        ? `${year}-${month.length === 1 ? `0${month}` : month}-${day.length === 1 ? `0${day}` : day}`
        : null,
    gender,
    job,
    jobInfo: job === 5 ? jobInfo : '',
    mbti,
    nickname,
    purpose: `[${purpose.join(',')}]`,
    socialId,
    socialLoginType
  })
  const handleSignUp = () => {
    signupQuery.refetch().catch(() => {})
    navigate('/signup/complete')
  }

  // 건너뛰기
  const handleSkip = () => {
    if (step === 4) {
      setGender(null)
    } else if (step === 5) {
      setYear(null)
      setMonth(null)
      setDay(null)
    } else if (step === 6) {
      setMbti(null)
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

      {step !== 7 && <ProgressBar percent={`${14 * (step + 1) + 2}`} />}

      <SignUpTitle
        step={step}
        handlePrevStep={handlePrevStep}
        handleNextStep={handleNextStep}
        windowSize={windowSize}
        canMove={canMove}
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
  height: calc(var(--vh, 1vh) * 100);
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

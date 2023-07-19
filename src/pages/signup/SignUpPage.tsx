import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

// hooks
import { useCheckNicknameMutation, useSignUpQuery, useWindowSize } from 'hooks'

// component
import styled from 'styled-components'
import {
  CreateGender,
  CreateJob,
  CreateNickname,
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
  const [year, setYear] = useState<string>('')

  // step 이동 버튼 disabled 여부
  const canMove = () => {
    return (
      (step === 0 && !isAgree) ||
      (step === 1 && nickname === '') ||
      (step === 2 && gender == null && year === '') ||
      (step === 3 && (job === -1 || (job === 5 && jobInfo === ''))) ||
      (step === 4 && purpose.length === 0)
    )
  }

  // 닉네임 확인
  const { mutate: handleCheckNickname } = useCheckNicknameMutation(nickname, setIsError, setErrorText, () => {
    setStep(2)
  })

  // 회원가입
  const signupQuery = useSignUpQuery({
    birthDate: year === '' ? null : year,
    gender,
    job,
    jobInfo: job === 5 ? jobInfo : '',
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
    if (step === 2) {
      setGender(null)
      setYear('')
    }

    handleNextStep()
  }

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
        handleSignUp={handleSignUp}
      />

      {
        // 서비스 이용 약관
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
        ) : // 성별
        step === 2 ? (
          <CreateGender gender={gender} setGender={setGender} year={year} setYear={setYear} />
        ) : // 직업
        step === 3 ? (
          <CreateJob job={job} setJob={setJob} jobInfo={jobInfo} setJobInfo={setJobInfo} />
        ) : (
          // 고민
          step === 4 && <CreatePurpose purpose={purpose} setPurpose={setPurpose} />
        )
      }

      <SignUpBottomButton
        step={step}
        handlePrevStep={handlePrevStep}
        handleNextStep={handleNextStep}
        windowSize={windowSize}
        canMove={canMove}
        handleCheckNickname={handleCheckNickname}
        handleSignUp={handleSignUp}
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

import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

// hooks
import { useCheckNicknameMutation, useWindowSize } from 'hooks'

// component
import styled from 'styled-components'
import {
  CreateGenderBirthYear,
  CreateJob,
  CreateNickname,
  CreatePurpose,
  CreateTermsOfService,
  ProgressBar,
  SignUpBottomButton,
  SignUpHeader,
  SignUpTitle
} from 'components'
import { useSignUpMutation } from 'hooks/mutations/user'

const SignUpPage = () => {
  // 화면 너비
  const windowSize = useWindowSize().width

  // socialId, socialLoginType 가져오기
  const location = useLocation()
  const [socialId, setSocialId] = useState(location.state?.socialId)
  const [socialLoginType, setSocialLoginType] = useState(location.state?.socialLoginType)

  // RN에서 state로 전달받은 socialId, socialLoginType 저장
  const setLocationState = (message: any) => {
    setSocialId(JSON.parse(message.data).socialId)
    setSocialLoginType(JSON.parse(message.data).socialLoginType)
  }

  // RN에서 state를 받는 event listener
  useEffect(() => {
    document.addEventListener('message', setLocationState)
    return () => {
      document.removeEventListener('message', setLocationState)
    }
  }, [])

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
  const [isYearError, setIsYearError] = useState<boolean>(false)
  const [yearErrorText, setYearErrorText] = useState<string>('')

  // step 이동 버튼 disabled 여부
  const canMove = () => {
    return (
      (step === 0 && !isAgree) ||
      (step === 1 && nickname === '') ||
      (step === 2 && (gender == null || year === '')) ||
      (step === 3 && (job === -1 || (job === 5 && jobInfo === ''))) ||
      (step === 4 && purpose.length === 0)
    )
  }

  // 닉네임 확인
  const { mutate: handleCheckNickname } = useCheckNicknameMutation(nickname, setIsError, setErrorText, () => {
    setStep(2)
  })

  // 출생연도 확인
  const handleCheckBirthYear = () => {
    const nowYear = new Date().getFullYear()

    if (parseInt(year) < nowYear - 100) {
      setIsYearError(true)
      setYearErrorText(`${nowYear - 100}년 이상부터 입력이 가능합니다.`)
    } else if (parseInt(year) > nowYear) {
      setIsYearError(true)
      setYearErrorText(`${nowYear}년 이하부터 입력이 가능합니다.`)
    } else {
      setIsYearError(true)
      handleNextStep()
    }
  }

  const { mutate: signUpMutate } = useSignUpMutation()

  // 건너뛰기
  const handleSkip = () => {
    if (step === 2) {
      setGender(null)
      setYear('')
    }

    handleNextStep()
  }

  const handleSignUp = () => {
    signUpMutate({
      birthDate: year === '' ? null : year,
      gender,
      job,
      jobInfo: job === 5 ? jobInfo : '',
      nickname,
      purpose: `[${purpose.join(',')}]`,
      socialId,
      socialLoginType
    })
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
        handleCheckBirthYear={handleCheckBirthYear}
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
        ) : // 성별 & 출생연도
        step === 2 ? (
          <CreateGenderBirthYear
            gender={gender}
            setGender={setGender}
            year={year}
            setYear={setYear}
            yearErrorText={yearErrorText}
            isYearError={isYearError}
            setIsYearError={setIsYearError}
          />
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
        handleCheckBirthYear={handleCheckBirthYear}
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

import React, { useEffect, useState } from 'react'
import type { Dispatch, SetStateAction } from 'react'

// component
import styled from 'styled-components'
import { Hr, TwoButtonModal } from 'components'

import ModifyNickname from './modify/ModifyNickname'
import ModifyPurpose from './modify/ModifyPurpose'
import ModifyJob from './modify/ModifyJob'
import ModifyGender from './modify/ModifyGender'
import ModifyBirth from './modify/ModifyBirth'
import ModifyMbti from './modify/ModifyMbti'
import SettingContentHeader from './SettingContentHeader'

// hooks
import { useCheckNicknameMutation, usePatchUserInfoMutation, useGetUserInfoQuery } from 'hooks'

interface IModifyMyInfo {
  setIsMenu?: Dispatch<SetStateAction<boolean>>
}

const ModifyMyInfo = ({ setIsMenu }: IModifyMyInfo) => {
  const [nickname, setNickname] = useState('')
  const [originalNn, setOriginalNn] = useState('')
  const [purpose, setPurpose] = useState<string[]>([])
  const [job, setJob] = useState('')
  const [jobInfo, setJobInfo] = useState('')
  const [gender, setGender] = useState<string | null>(null)
  const [canChangeGender, setCanChangeGender] = useState(false)
  const [year, setYear] = useState<string>('')
  const [canChangeBirthDate, setCanChangeBirthDate] = useState(false)
  const [mbti, setMbti] = useState<string | null>(null)

  const [_disabled, setDisabled] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errorText, setErrorText] = useState('')
  const [open, setOpen] = useState(false)
  const [isYearError, setIsYearError] = useState<boolean>(false)
  const [yearErrorText, setYearErrorText] = useState<string>('')

  const handleCheckBirthYear = () => {
    const nowYear = new Date().getFullYear()

    if (parseInt(year) < nowYear - 100) {
      setIsYearError(true)
      setYearErrorText(`${nowYear - 100}년 이상부터 입력이 가능합니다.`)
    } else if (parseInt(year) > nowYear) {
      setIsYearError(true)
      setYearErrorText(`${nowYear}년 이하부터 입력이 가능합니다.`)
    } else {
      setIsYearError(false)

      if (nickname !== originalNn) {
        checkNickname()
      } else {
        setOpen(true)
      }
    }
  }

  const res = useGetUserInfoQuery().data
  const { mutate: patchUserInfo } = usePatchUserInfoMutation(setOpen)
  const { mutate: checkNickname } = useCheckNicknameMutation(nickname, setIsError, setErrorText, () => {
    setOpen(true)
  })

  const _onClick = () => {
    patchUserInfo({
      birthDate: year === '' ? null : year,
      gender,
      job: parseInt(job),
      jobInfo: job === '5' ? jobInfo : '',
      mbti,
      nickname,
      purpose: `[${purpose.join(',')}]`
    })
  }

  useEffect(() => {
    if (nickname.length === 0 || purpose[0] === undefined || (job === '5' && jobInfo.length === 0)) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }, [nickname, purpose, job, jobInfo])

  useEffect(() => {
    if (res != null) {
      setNickname(res.data.nickname)
      setOriginalNn(res.data.nickname)
      setPurpose(JSON.parse(res.data.purpose).map((v: number) => v.toString()))
      setJob(res.data.job.toString())
      setJobInfo(res.data.jobInfo == null ? '' : res.data.jobInfo)
      setGender(res.data.gender)
      setMbti(res.data.mbti === '' ? undefined : res.data.mbti)

      if (res.data.gender == null) {
        setCanChangeGender(true)
      }

      if (res.data.birthDate != null) {
        setYear(res.data.birthDate.toString())
      } else {
        setCanChangeBirthDate(true)
      }
    }
  }, [res])

  return (
    <ModifyMyInfoWrapper>
      <SettingContentHeader
        pageNumber={0}
        setIsMenu={setIsMenu}
        _disabled={_disabled}
        _onClick={() => {
          if (canChangeBirthDate && year !== '') {
            handleCheckBirthYear()
          } else if (nickname !== originalNn) {
            checkNickname()
          } else {
            setOpen(true)
          }
        }}
      />

      <ModifyMyInfoContent>
        {/* 닉네임 */}
        <ModifyNickname
          nickname={nickname}
          setNickname={setNickname}
          isError={isError}
          setIsError={setIsError}
          errorText={errorText}
        />
        <Hr _margin="24px 0px" />

        {/* 고민 */}
        <ModifyPurpose purpose={purpose} setPurpose={setPurpose} />
        <Hr _margin="24px 0px" />

        {/* 직업 */}
        <ModifyJob job={job} setJob={setJob} jobInfo={jobInfo} setJobInfo={setJobInfo} />
        <Hr _margin="24px 0px" />

        {/* 성별 */}
        <ModifyGender gender={gender} setGender={setGender} canChangeGender={canChangeGender} />
        <Hr _margin="24px 0px" />

        {/* 출생연도 */}
        <ModifyBirth
          year={year}
          setYear={setYear}
          canChangeBirthDate={canChangeBirthDate}
          yearErrorText={yearErrorText}
          isYearError={isYearError}
          setIsYearError={setIsYearError}
        />
        <Hr _margin="24px 0px" />

        {/* mbti */}
        <ModifyMbti mbti={mbti} setMbti={setMbti} />
      </ModifyMyInfoContent>

      {open && (
        <TwoButtonModal
          mainText="회원 정보를 수정하시겠어요?"
          subText="성별과 출생연도는 한번 설정 후 변경할 수 없어요"
          rightBtnText="수정하기"
          leftBtnOnClick={() => {
            setOpen(false)
          }}
          rightBtnOnClick={_onClick}
        />
      )}
    </ModifyMyInfoWrapper>
  )
}

const ModifyMyInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
`

const ModifyMyInfoContent = styled.div`
  width: 100%;
  max-width: 429px;
  padding: 0px 2px;

  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
    width: 0;
  }

  @media all and (min-width: 768px) {
    height: calc(100vh - 164px);
    height: calc(var(--vh, 1vh) * 100 - 164px);
  }

  @media all and (max-width: 767px) {
    height: calc(100vh - 108px);
    height: calc(var(--vh, 1vh) * 100 - 108px);
  }
`

export default ModifyMyInfo

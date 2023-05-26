import React, { useEffect, useState } from 'react'

// component
import styled from 'styled-components'
import { Hr } from 'components'

import ModifyNickname from './modify/ModifyNickname'
import ModifyPurpose from './modify/ModifyPurpose'
import ModifyJob from './modify/ModifyJob'
import ModifyGender from './modify/ModifyGender'
import ModifyBirth from './modify/ModifyBirth'
import ModifyMbti from './modify/ModifyMbti'

// hooks
import { useGetUserInfoQuery } from 'hooks/queries/userInfo'

const ModifyMyInfo = () => {
  const [nickname, setNickname] = useState('')
  const [purpose, setPurpose] = useState<string[]>([])
  const [job, setJob] = useState('')
  const [jobInfo, setJobInfo] = useState('')
  const [gender, setGender] = useState('')
  const [canChangeGender, setCanChangeGender] = useState(false)
  const [year, setYear] = useState<string | undefined>(undefined)
  const [month, setMonth] = useState<string | undefined>(undefined)
  const [day, setDay] = useState<string | undefined>(undefined)
  const [canChangeBirthDate, setCanChangeBirthDate] = useState(false)
  const [mbti, setMbti] = useState<string | undefined>(undefined)

  const res = useGetUserInfoQuery().data

  useEffect(() => {
    if (res != null) {
      setNickname(res.data.nickname)
      setPurpose(JSON.parse(res.data.purpose).map((v: number) => v.toString()))
      setJob(res.data.job.toString())
      setJobInfo(res.data.jobInfo == null ? '' : res.data.jobInfo)
      setGender(res.data.gender)
      setMbti(res.data.mbti === '' ? undefined : res.data.mbti)

      if (res.data.gender === '') {
        setCanChangeGender(true)
      }

      if (res.data.birthDate != null) {
        setYear(res.data.birthDate[0].toString())
        setMonth(res.data.birthDate[1].toString())
        setDay(res.data.birthDate[2].toString())
      } else {
        setCanChangeBirthDate(true)
      }
    }
  }, [res])

  return (
    <ModifyMyInfoWrapper>
      <ModifyMyInfoContent>
        {/* 닉네임 */}
        <ModifyNickname nickname={nickname} setNickname={setNickname} />
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

        {/* 생년월일 */}
        <ModifyBirth
          year={year}
          setYear={setYear}
          month={month}
          setMonth={setMonth}
          day={day}
          setDay={setDay}
          canChangeBirthDate={canChangeBirthDate}
        />
        <Hr _margin="24px 0px" />

        {/* mbti */}
        <ModifyMbti mbti={mbti} setMbti={setMbti} />
      </ModifyMyInfoContent>
    </ModifyMyInfoWrapper>
  )
}

const ModifyMyInfoWrapper = styled.div`
  width: 100%;
  max-width: 429px;

  overflow: auto;
  ::-webkit-scrollbar {
    width: 0;
  }
`

const ModifyMyInfoContent = styled.div`
  padding: 0px 2px;
`

export default ModifyMyInfo

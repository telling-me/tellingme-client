import React, { useState } from 'react'

// component
import styled from 'styled-components'
import { Hr } from 'components'

import ModifyNickname from './modify/ModifyNickname'
import ModifyPurpose from './modify/ModifyPurpose'
import ModifyJob from './modify/ModifyJob'
import ModifyGender from './modify/ModifyGender'
import ModifyBirth from './modify/ModifyBirth'
import ModifyMbti from './modify/ModifyMbti'

const ModifyMyInfo = () => {
  const [nickname, setNickname] = useState('')
  const [purpose, setPurpose] = useState<string[]>([])
  const [job, setJob] = useState('')
  const [jobInfo, setJobInfo] = useState('')
  const [gender, setGender] = useState('')
  const [year, setYear] = useState<string | undefined>(undefined)
  const [month, setMonth] = useState<string | undefined>(undefined)
  const [day, setDay] = useState<string | undefined>(undefined)
  const [mbti, setMbti] = useState<string | undefined>(undefined)

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
        <ModifyGender gender={gender} setGender={setGender} />
        <Hr _margin="24px 0px" />

        {/* 생년월일 */}
        <ModifyBirth year={year} setYear={setYear} month={month} setMonth={setMonth} day={day} setDay={setDay} />
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

  overflow: scroll;
  ::-webkit-scrollbar {
    width: 0;
  }

  @media all and (min-width: 768px) {
    height: calc(100vh - 164px);
  }

  @media all and (max-width: 767px) {
    height: calc(100vh - 108px);
  }
`

const ModifyMyInfoContent = styled.div`
  padding: 0px 2px;
`

export default ModifyMyInfo

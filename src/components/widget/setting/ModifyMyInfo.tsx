import React, { useEffect, useState } from 'react'
import type { Dispatch, SetStateAction } from 'react'

// component
import styled from 'styled-components'
import style from 'styles/styled-components/styled'
import { Button, Hr, Modal } from 'components'

import ModifyNickname from './modify/ModifyNickname'
import ModifyPurpose from './modify/ModifyPurpose'
import ModifyJob from './modify/ModifyJob'
import ModifyGender from './modify/ModifyGender'
import ModifyBirth from './modify/ModifyBirth'
import ModifyMbti from './modify/ModifyMbti'
import SettingContentHeader from './SettingContentHeader'

// hooks
import { useGetUserInfoQuery } from 'hooks/queries/userInfo'
import { useCheckNicknameMutation, usePatchUserInfoMutation } from 'hooks/mutations/user'

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
  const [year, setYear] = useState<string | null>(null)
  const [month, setMonth] = useState<string | null>(null)
  const [day, setDay] = useState<string | null>(null)
  const [canChangeBirthDate, setCanChangeBirthDate] = useState(false)
  const [mbti, setMbti] = useState<string | null>(null)

  const [_disabled, setDisabled] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errorText, setErrorText] = useState('')
  const [open, setOpen] = useState(false)

  const res = useGetUserInfoQuery().data
  const { mutate: patchUserInfo } = usePatchUserInfoMutation(setOpen)
  const { mutate: checkNickname } = useCheckNicknameMutation(nickname, setIsError, setErrorText, () => {
    setOpen(true)
  })

  const _onClick = () => {
    patchUserInfo({
      birthDate:
        year != null && month != null && day != null
          ? `${year}-${month.length === 1 ? `0${month}` : month}-${day.length === 1 ? `0${day}` : day}`
          : null,
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
      <SettingContentHeader
        pageNumber={0}
        setIsMenu={setIsMenu}
        _disabled={_disabled}
        _onClick={() => {
          if (nickname !== originalNn) {
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

      {open && (
        <Modal _width="100%" _maxWidth="425px" _padding="30px 20px 20px" _borderRadius="20px">
          <ModalChildren>
            <ModalTexts>
              <style.TextP typo="b1" textColor="black">
                회원 정보를 수정하시겠어요?
              </style.TextP>
              <style.TextP typo="b2" textColor="gray7">
                성별과 생년월일은 한번 설정 후 변경할 수 없어요
              </style.TextP>
            </ModalTexts>

            <ModalButtons>
              <Button
                buttonType="tertiary"
                text="취소"
                textSize="h6"
                textColor="logo"
                _width="135px"
                _padding="18px 0"
                _onClick={() => {
                  setOpen(false)
                }}
              />
              <Button
                buttonType="secondary"
                text="수정하기"
                textSize="h6"
                textColor="logo"
                _width="135px"
                _padding="18px 0"
                _onClick={_onClick}
              />
            </ModalButtons>
          </ModalChildren>
        </Modal>
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

const ModalTexts = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  flex-direction: column;
  gap: 8px;
`

const ModalButtons = styled.div`
  display: flex;
  gap: 15px;
`

const ModalChildren = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  flex-direction: column;
  gap: 28px;
`

export default ModifyMyInfo

import React, { type Dispatch, type SetStateAction, useState } from 'react'

import { ContentWrapper, MoveButtonWrapper, SignUpWrapper } from './style'

import style from 'styles/styled-components/styled'
import { Button, CheckBox, Dropdown, Input } from 'components'
import type { ColorType, IconType } from 'type/common'

const SignUpPage = () => {
  const [step, setStep] = useState(0)

  const [isAgree, setIsAgree] = useState(false)
  const [name, setName] = useState('')
  const [purpose, setPurpose] = useState<string[]>([])
  const [job, setJob] = useState('')
  const [gender, setGender] = useState('')
  const [year, setYear] = useState<string | undefined>(undefined)
  const [month, setMonth] = useState<string | undefined>(undefined)
  const [day, setDay] = useState<string | undefined>(undefined)
  const [mbti, setMbti] = useState<string | undefined>(undefined)

  const stepTexts = [
    '서비스 이용 약관',
    '닉네임을 정해주세요',
    '고민을 알려주세요',
    '직업을 알려주세요',
    '성별을 알려주세요',
    '생일을 알려주세요',
    'mbti는 무엇인가요'
  ]
  const purposeData: Array<{ text: string; icon: IconType }> = [
    { text: '학업/진로', icon: 'pen' },
    { text: '대인 관계', icon: 'handshake' },
    { text: '성격/가치관', icon: 'values' },
    { text: '행동/습관', icon: 'magnet' },
    { text: '건강', icon: 'health' },
    { text: '기타', icon: 'heart' }
  ]
  const jobData: Array<{ text: string; icon: IconType }> = [
    { text: '고등학생', icon: 'bagpack' },
    { text: '대학(원)생', icon: 'graduationcap' },
    { text: '취업준비생', icon: 'smiley' },
    { text: '직장인', icon: 'briefcase' },
    { text: '주부', icon: 'cookpot' },
    { text: '기타', icon: 'heart' }
  ]
  const genderData: Array<{ text: string; icon: IconType; iconColor: ColorType }> = [
    { text: '남성', icon: 'male', iconColor: 'secondary700' },
    { text: '여성', icon: 'female', iconColor: 'error300' }
  ]
  const mbtiData = [
    'ENFJ',
    'ENFP',
    'ENTJ',
    'ENTP',
    'ESTP',
    'ESFP',
    'ESTJ',
    'ESFJ',
    'INFJ',
    'INFP',
    'INTJ',
    'INTP',
    'ISTP',
    'ISFP',
    'ISFJ',
    'ISTJ'
  ]
  const birthDateData: Array<{
    defaultText: string
    data: string[] | number[]
    _selected: string | undefined
    _setSelected: Dispatch<SetStateAction<string | undefined>>
    _padding: string
    _flexGrow: string
  }> = [
    {
      defaultText: '년\u00a0\u00a0\u00a0',
      data: new Array(70).fill(0).map((_, i) => 2023 - i),
      _selected: year,
      _setSelected: setYear,
      _padding: '16.5px 20px',
      _flexGrow: '2'
    },
    {
      defaultText: '월\u00a0',
      data: new Array(12).fill(0).map((_, i) => i + 1),
      _selected: month,
      _setSelected: setMonth,
      _padding: '16.5px 20px',
      _flexGrow: '1'
    },
    {
      defaultText: '일\u00a0',
      data: new Array(31).fill(0).map((_, i) => i + 1),
      _selected: day,
      _setSelected: setDay,
      _padding: '16.5px 20px',
      _flexGrow: '1'
    }
  ]

  return (
    <SignUpWrapper>
      <style.TextSpan textSize="h4" textColor="black" _margin="60px 0px 110px 0px">
        {stepTexts[step]}
      </style.TextSpan>

      {step === 0 ? (
        <CheckBox label="전체 동의합니다" buttonText="전문 보기" _checked={isAgree} _setChecked={setIsAgree} />
      ) : step === 1 ? (
        <Input
          _placeholder="2-8글자 이내"
          infoText="영문, 숫자, 띄어쓰기, 특수문자 불가"
          errorText="사용불가 닉네임입니다"
          _value={name}
          _setValue={setName}
        />
      ) : step === 2 ? (
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
      ) : step === 3 ? (
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
                _active={job.includes(i.toString())}
                _gap="23px"
                _width="205px"
                _height="55px"
                _padding="0px 0px 0px 24px"
                _justifyContent="flex-start"
                _onClick={() => {
                  setJob(`${i}`)
                }}
              />
            )
          })}
        </ContentWrapper>
      ) : step === 4 ? (
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
                _active={gender.includes(`${i}`)}
                _gap="15px"
                _width="103px"
                _height="114px"
                _onClick={() => {
                  setGender(`${i}`)
                }}
              />
            )
          })}
        </ContentWrapper>
      ) : step === 5 ? (
        <ContentWrapper type="birthDate">
          {birthDateData.map(
            (
              v: {
                defaultText: string
                data: string[] | number[]
                _selected: string | undefined
                _setSelected: Dispatch<SetStateAction<string | undefined>>
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
                  _selected={v._selected}
                  _setSelected={v._setSelected}
                  _padding={v._padding}
                  _flexGrow={v._flexGrow}
                />
              )
            }
          )}
        </ContentWrapper>
      ) : (
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
      )}

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
            (step === 1 && name === '') ||
            (step === 2 && purpose.length === 0) ||
            (step === 3 && job === '') ||
            (step === 4 && gender === '') ||
            (step === 5 && (year === undefined || month === undefined || day === undefined)) ||
            (step === 6 && mbti === undefined)
          }
          _onClick={() => {
            setStep(step + 1)
          }}
        />
      </MoveButtonWrapper>
    </SignUpWrapper>
  )
}

export default SignUpPage

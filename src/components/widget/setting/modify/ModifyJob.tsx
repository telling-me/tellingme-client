import React from 'react'

// component
import style from 'styles/styled-components/styled'
import { ChoiceChips, Input } from 'components'
import { SelectInnerWrapper, SelectOuterWrapper } from './style'

interface IModifyJob {
  job: string
  setJob: React.Dispatch<React.SetStateAction<string>>
  jobInfo: string
  setJobInfo: React.Dispatch<React.SetStateAction<string>>
}

const ModifyJob = ({ job, setJob, jobInfo, setJobInfo }: IModifyJob) => {
  const LINE_ONE = ['고등학생', '대학(원)생', '취업준비생']
  const LINE_TWO = ['직장인', '주부', '기타']

  const handleClick = (index: string) => {
    setJob(index)

    if (index !== '5') {
      setJobInfo('')
    }
  }

  return (
    <>
      <style.TextP typo="h6" textColor="black" _margin="0px 0px 16px 10px">
        직업
      </style.TextP>

      <SelectOuterWrapper>
        <SelectInnerWrapper>
          {LINE_ONE.map((j, i) => {
            return (
              <ChoiceChips
                key={i}
                chipText={j}
                _active={job === i.toString()}
                _onClick={() => {
                  handleClick(i.toString())
                }}
              />
            )
          })}
        </SelectInnerWrapper>
        <SelectInnerWrapper>
          {LINE_TWO.map((j, i) => {
            return (
              <ChoiceChips
                key={i + 3}
                chipText={j}
                _active={job === (i + 3).toString()}
                _onClick={() => {
                  handleClick((i + 3).toString())
                }}
              />
            )
          })}
        </SelectInnerWrapper>
      </SelectOuterWrapper>

      <Input
        _placeholder="직접 입력..."
        _value={jobInfo}
        setValue={setJobInfo}
        _width="calc(100% - 145px)"
        _margin="4px 0px 0px 145px"
        _disabled={job !== '5'}
      />
    </>
  )
}

export default ModifyJob

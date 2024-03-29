import React, { useEffect } from 'react'
import { ContentWrapper } from './style'

// components
import { InputButton, RowButton } from 'components'

// assets
import Icons from 'assets/icons'

// data
import { jobData } from 'data/user'

interface ICreateJob {
  job: number
  setJob: React.Dispatch<React.SetStateAction<number>>
  jobInfo: string
  setJobInfo: React.Dispatch<React.SetStateAction<string>>
}

const CreateJob = ({ job, setJob, jobInfo, setJobInfo }: ICreateJob) => {
  useEffect(() => {
    if (job !== 5 && jobInfo !== '') {
      setJobInfo('')
    }
  }, [job])

  return (
    <ContentWrapper type="job">
      {jobData.map((v: string, i: number) => {
        return (
          <RowButton
            key={i}
            text={v}
            _active={job === i}
            _onClick={() => {
              setJob(i)
            }}
          >
            {i === 0 ? (
              <Icons.Bagpack width="24" height="24" />
            ) : i === 1 ? (
              <Icons.GraduationCap width="24" height="24" />
            ) : i === 2 ? (
              <Icons.Smiley width="24" height="24" />
            ) : i === 3 ? (
              <Icons.Briefcase width="24" height="24" />
            ) : (
              i === 4 && <Icons.Cookpot width="24" height="24" />
            )}
          </RowButton>
        )
      })}

      <InputButton
        text="기타"
        _active={job === 5}
        _onClick={() => {
          setJob(5)
        }}
        _value={jobInfo}
        setValue={setJobInfo}
      >
        <Icons.Etc width="24" height="24" />
      </InputButton>
    </ContentWrapper>
  )
}

export default CreateJob

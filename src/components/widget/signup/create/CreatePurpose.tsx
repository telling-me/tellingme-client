import React from 'react'
import { ContentWrapper } from './style'

// components
import { ColButton } from 'components'

// assets
import Icons from 'assets/icons'

// data
import { purposeData } from 'data/user'

interface ICreatePurpose {
  purpose: string[]
  setPurpose: React.Dispatch<React.SetStateAction<string[]>>
}

const CreatePurpose = ({ purpose, setPurpose }: ICreatePurpose) => {
  return (
    <ContentWrapper type="purpose">
      {purposeData.map((v: string, i: number) => {
        return (
          <ColButton
            key={i}
            text={v}
            _active={purpose.includes(i.toString())}
            _onClick={() => {
              const idx = purpose.indexOf(i.toString())

              if (idx === -1 && purpose.length < 2) {
                setPurpose([...purpose, i.toString()])
              } else if (idx !== -1) {
                setPurpose([...purpose.slice(0, idx), ...purpose.slice(idx + 1)])
              }
            }}
          >
            {i === 0 ? (
              <Icons.Pencil width="32" height="32" />
            ) : i === 1 ? (
              <Icons.Handshake width="32" height="32" />
            ) : i === 2 ? (
              <Icons.Values width="32" height="32" />
            ) : i === 3 ? (
              <Icons.Magnet width="32" height="32" />
            ) : i === 4 ? (
              <Icons.Health width="32" height="32" />
            ) : (
              i === 5 && <Icons.Etc width="32" height="32" />
            )}
          </ColButton>
        )
      })}
    </ContentWrapper>
  )
}

export default CreatePurpose

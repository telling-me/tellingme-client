/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'

// components
import { CheckBox } from 'components'
import styled from 'styled-components'
import TermsOfServiceModal from './TermsOfServiceModal'
import { PRIVACY_POLICY_DOCS, TERMS_OF_SERVICE_DOCS } from 'data/docs'

interface ICreateTermsOfService {
  isAgree: boolean
  setIsAgree: React.Dispatch<React.SetStateAction<boolean>>
}

const CreateTermsOfService = ({ isAgree, setIsAgree }: ICreateTermsOfService) => {
  const [agreeTermsOfService, setAgreeTermsOfService] = useState(false)
  const [agreePrivacyPolicy, setAgreePrivacyPolicy] = useState(false)
  const [openTermsOfService, setOpenTermsOfService] = useState(false)
  const [openPrivacyPolicy, setOpenPrivacyPolicy] = useState(false)

  const allAgreeChange = (e: { target: { checked: boolean | ((prevState: boolean) => boolean) } }) => {
    setIsAgree(e.target.checked)
    setAgreeTermsOfService(e.target.checked)
    setAgreePrivacyPolicy(e.target.checked)
  }

  useEffect(() => {
    if (!agreeTermsOfService || !agreePrivacyPolicy) {
      setIsAgree(false)
    }

    if (agreeTermsOfService && agreePrivacyPolicy) {
      setIsAgree(true)
    }
  }, [agreeTermsOfService, agreePrivacyPolicy])

  useEffect(() => {
    if (isAgree) {
      setAgreePrivacyPolicy(true)
      setAgreeTermsOfService(true)
    }
  }, [])

  return (
    <CreateTermsOfServiceWrapper>
      <CheckBox label="모두 동의할게요" _checked={isAgree} customChange={allAgreeChange} _maxWidth="425px" />

      <CheckBox
        label="(필수) 서비스 이용약관 동의"
        checkSize="small"
        buttonText="자세히"
        buttonOnClick={() => {
          setOpenTermsOfService(true)
        }}
        _checked={agreeTermsOfService}
        setChecked={setAgreeTermsOfService}
        _maxWidth="425px"
        _margin="16px 0 12px 0"
        _padding="0 16px"
        isBackground={false}
      />
      <CheckBox
        label="(필수) 개인정보 수집 및 이용 동의"
        checkSize="small"
        buttonText="자세히"
        buttonOnClick={() => {
          setOpenPrivacyPolicy(true)
        }}
        _checked={agreePrivacyPolicy}
        setChecked={setAgreePrivacyPolicy}
        _maxWidth="425px"
        _padding="0 16px"
        isBackground={false}
      />

      {openTermsOfService && (
        <TermsOfServiceModal
          title="서비스 이용약관 동의"
          content={TERMS_OF_SERVICE_DOCS}
          setOpen={setOpenTermsOfService}
          _checked={agreeTermsOfService}
          setChecked={setAgreeTermsOfService}
        />
      )}
      {openPrivacyPolicy && (
        <TermsOfServiceModal
          title="개인정보 수집 및 이용 동의"
          content={PRIVACY_POLICY_DOCS}
          setOpen={setOpenPrivacyPolicy}
          _checked={agreePrivacyPolicy}
          setChecked={setAgreePrivacyPolicy}
        />
      )}
    </CreateTermsOfServiceWrapper>
  )
}

const CreateTermsOfServiceWrapper = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  flex-direction: column;

  width: 100%;
`

export default CreateTermsOfService

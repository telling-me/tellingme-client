import React, { useState } from 'react'

// components
import { AdminLogin } from 'components'

// stores
import { useNavigate } from 'react-router-dom'
import { setCookie } from 'utils/cookies'

const AdminPage = () => {
  const [pw, setPw] = useState<string>('')

  const navigate = useNavigate()

  const _onClick = () => {
    if (pw === process.env.REACT_APP_ADMIN_PASSWORD) {
      navigate('/admin/report')
      setCookie('admin', 'true')
    }
  }

  return <AdminLogin pw={pw} setPw={setPw} _onClick={_onClick} />
}

export default AdminPage

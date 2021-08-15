import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Cookies from 'universal-cookie'
import Button from '../core/Button'
import InputField from '../core/InputField'
import { postUsers } from '../api/users'
import NotificationService from '../core/NotificationService'
import WrapperComponent from '../core/WrapperComponent'
import { useTranslation } from 'react-i18next'

export default function ChangePassword () {
  const cookies = new Cookies()
  const { t } = useTranslation()
  const history = useHistory()
  const { language } = useParams<{ language: string }>()
  const [email] = useState(cookies.get('email'))
  const [password, setPassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')

  const handleSubmit = () => {
    postUsers({ password }, email)
      .then(() => {
        history.push(`/${language}/success-changed`)
      })
      .catch(() => { NotificationService.pushErrorNotification(t('password-not-changed')) })
  }

  return (
    <>
      <WrapperComponent>
        <p className='h6 font-weight-bold pt-5'>{t('forgot-password-title')}</p>
        <p className='pt-5'>{t('change-password')}</p>
        <InputField onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)} type='password' id='password' className='form-control mt-5'>{t('new-password')}</InputField>
        <InputField onChange={(event: React.ChangeEvent<HTMLInputElement>) => setconfirmPassword(event.target.value)} type='password' id='confirm-password' className='form-control mt-5'>{t('confirm-password')}</InputField>
        <Button
          disabled={!(password === confirmPassword && password.length > 3 && confirmPassword.length > 3) }
          onClick={() => handleSubmit()} className='btn primary mt-5'>
          {t('confirm-password')}
        </Button>
      </WrapperComponent>
    </>
  )
}

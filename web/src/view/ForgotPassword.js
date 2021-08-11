import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Cookies from 'universal-cookie'
import Button from '../core/Button'
import InputField from '../core/InputField'
import { fetchUsers } from '../api/users'
import { fetchMail } from '../api/mail'
import NotificationService from '../core/NotificationService'
import WrapperComponent from '../core/WrapperComponent'
import { useTranslation } from 'react-i18next'

export default function ForgotPassword () {
  const { t } = useTranslation()
  const history = useHistory('')
  const { language } = useParams()
  const [email, setEmail] = useState('')

  const handleSubmit = () => {
    fetchUsers(email)
      .then((data) => {
        if (data.email === email) {
          handleMessage(language)
          handleCookie()
          history.push(`/${language}/email-sent`)
        }
      })
      .catch(() => {
        NotificationService.pushErrorNotification(t('email-not-found'))
      })
  }

  const handleMessage = (languages) => {
    fetchMail({ email, languages })
      .then((mail) => {
        window.open(mail, '_blank', 'noopener,noreferrer')
      })
      .catch((err) => { NotificationService.pushErrorNotification(err) })
  }

  const handleCookie = () => {
    const cookies = new Cookies()
    cookies.set('email', email, { path: '/' })
  }

  return (
    <>
      <WrapperComponent>
        <p className='h6 font-weight-bold pt-5'>{t('forgot-password-title')}</p>
        <p className='pt-5'>{t('forgot-password-copy')}</p>
        <InputField onChange={(event) => setEmail(event.target.value)} type='email' id='email' className='form-control mt-5'>{t('e-mail-address')}</InputField>
        <Button disabled={!email} onClick={() => handleSubmit()} className='btn primary mt-5'>{t('send-reset-link')}</Button>
      </WrapperComponent>
    </>
  )
}

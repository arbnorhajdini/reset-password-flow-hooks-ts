import React from 'react'
import WrapperComponent from '../core/WrapperComponent'
import { useTranslation } from 'react-i18next'
import Logo from '../assets/images/keleya-logo.png'

export default function SuccessChanged () {
  const { t } = useTranslation()

  return (
    <>
      <WrapperComponent className='text-center'>
        <p className='h5 font-weight-bold pt-5'>{t('success')}</p>
        <p className='pt-3'>{t('changed-password-success')}</p>
        <img width="100" height="140" className='mt-3 mb-5' src={Logo} alt="keleya" />
      </WrapperComponent>
    </>
  )
}

import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ForgotPassword from './view/ForgotPassword'
import EmailSent from './view/EmailSent'
import ChangePassword from './view/ChangePassword'
import SuccessChanged from './view/SuccessChanged'

const DEFAULT_LANGUAGE = 'en'
const LANGUAGE = window.location.pathname.substring(1, 3)

export default function App () {
  const { i18n } = useTranslation()
  i18n.changeLanguage(LANGUAGE || DEFAULT_LANGUAGE)

  return (
    <Suspense fallback={<p>Page is loading...</p>}>
      <Router>
        <Switch>
          <Route exact path='/:language' render={() => <ForgotPassword />} />
          <Route exact path='/:language/email-sent' render={() => <EmailSent />} />
          <Route exact path='/:language/change-password' render={() => <ChangePassword />} />
          <Route exact path='/:language/success-changed' render={() => <SuccessChanged />} />
        </Switch>
      </Router>
    </Suspense>
  )
}

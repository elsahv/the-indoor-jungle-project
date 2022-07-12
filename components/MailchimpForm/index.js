import React, { useState } from 'react'
import axios from 'axios'
import {
  SubscribeContainer,
  SubFormContainer,
  SuccessState,
  ErrorState
} from './MailchimpForm.styled.js'
 

function Subscribe() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState('idle')
  const [errorMsg, setErrorMsg] = useState(null)

  const subscribe = async (e) => {
    e.preventDefault()

    setState('Loading')

    try {
      const response = await axios.post('/api/subscribeApi', { email })
      setState('Success')
      setEmail('')
    } catch (e) {
      setErrorMsg(e.response.data.error)
      setState('Error')
    }
  }

  return (
    <SubscribeContainer>
      <h4 className="sub-header">Subscribe to the newsletter</h4>
      <p className="sub-text">
    Grow with me as I write about plants and fish keeping!
      </p>
      <form onSubmit={subscribe}>
        <SubFormContainer>
          <div className="form-input">
            <input
              required
              id="email-input"
              name="email"
              type="email"
              placeholder="email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="sub-form-btn">
            <button
              disabled={state === 'Loading'}
              type="submit"
              className="form-btn"
              onClick={subscribe}
            >
              Subscribe
            </button>
          </div>
        </SubFormContainer>
        {state === 'Error' && (
          <ErrorState className="error-state">{errorMsg}</ErrorState>
        )}
        {state === 'Success' && (
          <SuccessState>Awesome, you've been subscribed!</SuccessState>
        )}
      </form>
    </SubscribeContainer>
  )
}

export default Subscribe
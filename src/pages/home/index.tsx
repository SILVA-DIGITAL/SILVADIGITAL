import React, { FC, useEffect, useCallback } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Container, Col } from 'react-bootstrap'
import { useStoreActions, useStoreState } from '~store/hooks'
import queryString from 'query-string'
import { RedirectState } from '~root/routes/privateRoute'
import { StyledRow } from './styles'

const Login: FC = () => {
  const history = useHistory()
  const { state } = useLocation<RedirectState>()
  const { isAuthenticated } = useStoreState(({ user }) => user)
  const [{ fetchUserInfo }, { setSideNavModel }] = useStoreActions(({ user, sideNav }) => [user, sideNav])

  const fetchUser = useCallback(async () => {
    await fetchUserInfo()
  }, [])

  useEffect(() => {
    setSideNavModel({ title: 'login', activeChild: 'login' })
    const token = queryString.parse(window.location.search).access_token
    console.log('query string', queryString.parse(window.location.search).access_token);
    if (token !== undefined) {
      const authData = {
        accessToken: token,
        timestamp: Date(),
      }
      localStorage.setItem('auth', JSON.stringify(authData))
      fetchUser()
      history.replace(state?.from || '/dashboard')
    }
  }, [])

  useEffect(() => {
    if (isAuthenticated) history.replace(state?.from || '/dashboard')
  }, [isAuthenticated])

  return (
    <Container id="page-container">
      <StyledRow className="justify-content-md-center">
        <Col md="auto"></Col>
      </StyledRow>
    </Container>
  )
}

export default Login

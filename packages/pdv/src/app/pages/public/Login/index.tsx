import { useEffect, useRef, useState } from 'react';
import { FormHandles, SubmitHandler } from '@unform/core'
import { RouteComponentProps } from 'react-router-dom'

import { ReactComponent as Logo } from 'vy/app/assets/vyoo-logo.svg'

import { UnTextField, Unform, UnPasswordInput, Button } from 'vy/app/components'

import * as Styles from './styles'
import { Flex } from 'vy/app/styles/Flex'
import { UnCheckbox } from 'vy/app/components/Unform/UnCheckbox';
import { useBooleanToggle } from 'vy/app/hooks';
import { loginValidationSchema } from 'vy/app/validationSchemas/auth';
import { routePaths } from 'vy/app/constants/routes';

interface Detail {
  email: string;
  password: string
}

export function Login ({ history }: RouteComponentProps) {
  const [isLoading, toggleIsLoading] = useBooleanToggle(false)

  const [detail] = useState()
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<Detail> = data => {
    history.push(routePaths.layout)
  }

  return (
    <Styles.Container>
      <Styles.Body>
        <Logo />
        <Unform 
          onSubmit={handleSubmit}
          initialData={detail}
          validationSchema={loginValidationSchema}
          ref={formRef}
        >
          <Flex column>
            <Flex column gap={1}>
              <UnTextField name="email" label="E-mail" />
              <UnPasswordInput name="password" label="Password" />
            </Flex>
              <UnCheckbox disableRipple name="remember_me" label="Manter-me conectado" />
            <Flex column fullWidth marginTop={1}>
              <Button fullWidth type="submit" isLoading={isLoading}>
                  Entrar
              </Button>
            </Flex>
          </Flex>
        </Unform>
      </Styles.Body>
    </Styles.Container>
  )
}

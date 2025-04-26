import React, { CSSProperties } from 'react'
import { Html, Body, Container, Preview, Text, Link, Tailwind } from '@react-email/components'

const WelcomeTemplate = ( {name}: {name: string}) => {
  return (
    <Tailwind>
        <Html>
            <Preview >Welcome aboard!</Preview>
            <Body className='bg-amber-200'>
                <Container>
                    <Text className='font-bold text-3xl'> Hello {name}</Text>
                    <Link href='http://google.com'>www.google.com</Link>
                </Container>
            </Body>
        </Html>
    </Tailwind>
  )
}

const bodyStyles : CSSProperties = {
    background: '#fff'
}

const textStyle: CSSProperties = {
    fontSize: '33px'
}

export default WelcomeTemplate
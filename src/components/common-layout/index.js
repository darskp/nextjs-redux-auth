import { ReduxProvider } from '@/provider'
import React from 'react'
import Header from '../header';

const CommonLayout = ({children}) => {
  return (
    <ReduxProvider>
    <Header/>
        {children}
    </ReduxProvider>
  )
}

export default CommonLayout;
import React, { useState } from 'react'
import AppContext from './AppContext'

const AppWrapper = ({ account: initAccount, children }) => {
  const [account, setAccount] = useState(initAccount)
  console.log('initAccount', account)
  return (
    <AppContext.Provider value={{ account, setAccount }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppWrapper

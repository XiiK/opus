import React, { useState } from 'react'
import AppContext from './AppContext'

const AppWrapper = ({ account: initAccount, children }) => {
  const [account, setAccount] = useState(initAccount)
  return (
    <AppContext.Provider value={{ account, setAccount }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppWrapper

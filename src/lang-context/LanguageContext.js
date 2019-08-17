import React from 'react'

const LanguageContext = React.createContext({
  lang: window.navigator.language
})

export default LanguageContext

//by creating context within its own file we can now import this to any other file
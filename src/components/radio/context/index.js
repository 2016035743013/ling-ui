import { createContext } from 'react'

const RadioContext  = createContext({
  theme: 'test',
  toggle: () =>{}
})

export {
  RadioContext
}
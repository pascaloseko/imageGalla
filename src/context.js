import { createContext, useReducer } from "react";

export const Context = createContext();

const photos = []

const initialState = {
  items: photos,
  count: photos.length,
  inputs: { title: null, file: null, path: null },
  isCollapsed: false
}

const handleOnChange = (state, e) => {
  if (e.target.name === 'file') {
    try {
      return { ...state.inputs, title: e.target.value, file: e.target.files[0], path: URL.createObjectURL(e.target.files[0]) }
    } catch (error) {
      console.error(error)
    }
  } else {
    return { ...state.items, title: e.target.value }
  }
}

function reducer(state, action) {
  switch (action.type) {
    case 'setItem':
      return {
        ...state,
        items: [state.inputs, ...state.items]
      }
    case 'setInputs':
      return {
        ...state,
        inputs: handleOnChange(state, action.payload.value)
      }
    case 'collapse':
      return {
        ...state,
        isCollapsed: action.payload.bool
      }
    default: return state
  }
}

const Provider = ({ children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

    return <Context.Provider value={{state, dispatch}}>{children}</Context.Provider>
}

export default Provider
import { useReducer, useState, useCallback } from 'react'

const reducer = (prevState, { action, payload }) => {
  if (action === 'reset') {
    return payload
  }
  return ({ ...prevState, [action]: payload })
}
// Custom hook for easy form validation
// returns [values, setters, errors], each maintaining key of initial state
export default (initVal, yupSchema, initFun) => {
  const [state, dispatch] = useReducer(reducer, initVal, initFun)
  const [errors, setErrors] = useState({})

  // Runs validation on form state against passed yupSchema
  // Returns true if state is valid
  // Returns false if state is
  const validate = useCallback(() => yupSchema.validate(state, {
    abortEarly: false,
  }).then(() => {
    setErrors({})
    return true
  }).catch(errs => {
    setErrors(
      Object.fromEntries(errs.inner.map(({ path, message }) => [path, message])),
    )
    return false
  }), [state])
  const reset = () => dispatch({ action: 'reset', payload: initVal })

  return {
    state, dispatch, errors, validate, reset,
  }
}

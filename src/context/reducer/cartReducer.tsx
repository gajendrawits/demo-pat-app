enum CartAction {
  ADD = 'ADD_ITEM',
  REMOVE = 'REMOVE_ITEM',
}

interface AddAction {
  type: CartAction
  payload: any
}

export const CartReucer = (state: any, action: AddAction) => {
  const { type, payload } = action
  switch (type) {
    case CartAction.ADD:
      return { ...state, payload }
    case CartAction.REMOVE:
      return { ...state, payload }
    default:
      return state
  }
}

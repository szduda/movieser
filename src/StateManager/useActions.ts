export const useActions = (dispatch: Function, actionList: any) => {
  let actions = {}
  for (const action of Object.keys(actionList)) {
    actions = {
      ...actions,
      [action]: (args: any) => dispatch(actionList[action](args))
    }
  }
  return actions
}

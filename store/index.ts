export interface INotification {
  id?: number,
  title: string
  message: string
}

interface IState {
  notifications: INotification[]
}

export const state = (): IState => ({
  notifications: []
})

export const mutations = {
  pushNotification(state: IState, notification: INotification) {
    state.notifications.push(notification)
  },

  removeNotification(state: IState, notificationID: number) {
    const index = state.notifications.findIndex(n => n.id === notificationID)

    state.notifications.splice(index, 1)
  }
}

export const actions = {
  removeNotification({ commit }: { commit: (a: string, b: any) => void }, a: string) {
    commit('removeNotification', a)
  },
  addNotification({ commit, state, dispatch }: { state: IState, commit: (a: string, b: any) => void, dispatch: (a: string, b: any) => void }, notification: INotification) {
    notification.id = state.notifications.length

    commit('pushNotification', notification)

    setTimeout(() => {
      dispatch('removeNotification', notification.id)
    }, 5000)
  }
}


export const initialFriendsValue = {
  name: "Jhon snow"
}

export function friendReduser(state = {}, action) {
  if (action.type === "change-friend-name") {
    return {
      ...state,
      name: action.payload.name
    }
  }
  if (action.type === "add-friends") {
    return {
      ...state,
      name2: action.payload
    }
  }
  return state;
}


export function selectFriendName(state) {
  return state.friend.name
}


// `actionCreate` and `action` functions
export function changeFriendName(name) {
  return {
    type: "change-friend-name",
    payload: { name }
  }
}

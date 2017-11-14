const initial = {
  role: 'visitor',
}

export default (userState = initial, action) => {
  switch (action.type) {
    default: {
      return userState
    }
  }
}

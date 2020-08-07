export default function ({ store, redirect }) {
  const session = store.getters.isAuth
  if (!session) {
    return redirect(`/login`)
  } else {
    const id = store.getters.token
    return redirect(`/user/${id}`)
  }
}

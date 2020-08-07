export default function({ store, redirect }) {
  const session = store.getters.isAuth
  if (!session) {
    return redirect('/login')
  }
}

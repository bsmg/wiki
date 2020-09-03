// Fix anchor URLs
export default ({ isServer }) => {
  if (isServer) return

  const header = document.querySelector(window.location.hash)
  if (header === undefined) return

  header.scrollIntoView()
}

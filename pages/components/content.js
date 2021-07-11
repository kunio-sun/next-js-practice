export default function Component({ children }) {
  return (
    <>
      <div className="container">
        {children}
      </div>
      <hr />
      <footer>&copy; 2021 next js</footer>
    </>
  )
}
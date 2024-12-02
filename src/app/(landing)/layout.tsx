import Navbar from "../../components/Navbar"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar></Navbar>
      {children}
    </>
  )
}
export default Layout

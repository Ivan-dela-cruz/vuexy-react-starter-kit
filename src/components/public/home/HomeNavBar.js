import { Button, Navbar, NavbarBrand, Nav, NavLink} from 'reactstrap'

const HomeNavBar = () => {
  return (
    <Navbar className="justify-content-end m-1" color="primary" dark>
      <NavbarBrand href="/" className="mr-auto p-1">İş Yönetim Uygulaması</NavbarBrand>
      <Nav>
        <NavLink>
          <Button.Ripple onClick={console.log("mal")} color='primary'>Giriş</Button.Ripple>
        </NavLink>
      </Nav>
    </Navbar>
  )
}
export default HomeNavBar
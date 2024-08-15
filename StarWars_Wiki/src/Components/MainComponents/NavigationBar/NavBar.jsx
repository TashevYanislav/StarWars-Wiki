export default function NavBar() {
  return (
    <nav className="navBar">
      <img src="StarWarsWikiLogo.png" alt="Star Wars Wiki Logo" />
      <ul className="navItems">
        <li>Home</li>
        <li>Characters</li>
        <li>Create</li>
        <li>Login</li>
        <li>Register</li>
        <li>Logout</li>
      </ul>
    </nav>
  );
}

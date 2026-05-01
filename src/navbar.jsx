import './index.css'
const NavBar = () => {
    return ( 
        <div className="navbar">
            <h1>My Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/creator">New Blog</a>

            </div>
        </div>
     );
}
 
export default NavBar;
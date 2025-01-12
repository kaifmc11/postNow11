import { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from './context/DataContext'

const Nav = () => {
  const{search,setSearch}=useContext(DataContext)
    return(
    <nav className='Nav'>
      <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            id='search'
            type="text"
            placeholder='Search posts'
            value={search}
            onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div>
          <ul className='navlist'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/post">Post</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      </form>
    </nav>
  )
}
export default Nav
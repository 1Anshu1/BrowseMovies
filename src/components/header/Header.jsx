import React, { useEffect, useState } from 'react'
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from 'react-router-dom'

import './style.scss'

import logo from '../../assets/movix-logo.svg'
import ContentWrapper from '../contentWrapper/ContentWrapper.jsx';



const Header = () => {

    const [showSearch, setShowSearch] = useState(false)
    const [query, setQuery] = useState(null)
    const [lastScroll, setLastScroll] = useState(0)
    const [showNav, setShowNav] = useState('top')
    const location = useLocation()
    const navigate = useNavigate()

    const controlNavbar = () => {
        if (window.scrollY > 200) {
            if (window.scrollY > lastScroll) {
                setShowNav('hide')
            } else {
                setShowNav('show')
            }
        } else {
            setShowNav('top')
        }

        setLastScroll(window.scrollY)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);

        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScroll])

    const handleSearchQuery = (e) => {
        if (e.key === 'Enter') {
            navigate(`/search/${query}`)
        }
    }


    const handleNavItem = (e) => {
        if (e.target.innerText === 'Movies') {
            navigate('/explore/movies')
        } else if (e.target.innerText === 'TV Shows') {
            navigate('explore/tv')
        } else if (e.target.getAttribute('id') === 'logo') {
            navigate('/')
        }

    }

    const handleSearch = () => {
        showSearch ? setShowSearch(false) : setShowSearch(true)
    }

    return (
        <div className={`header ${showNav}`}>
            <ContentWrapper >
                <div className="navbar">
                    <img id='logo' src={logo} alt="" onClick={handleNavItem} />
                    <ul className='menuitems'>
                        <li onClick={handleNavItem}>Movies</li>
                        <li onClick={handleNavItem}>TV Shows</li>
                        <li onClick={handleSearch}><HiOutlineSearch /></li>
                    </ul>
                </div>
            </ContentWrapper>
            {showSearch && <div className="searchbar">
                <ContentWrapper>
                    <div className="headerSearchInput">
                        <input
                            type="text"
                            placeholder='Search for a movie or tv show....'
                            onChange={(e) => (setQuery(e.target.value))}
                            onKeyUp={handleSearchQuery}
                        />
                        <VscChromeClose className='headerSearchBtn' onClick={handleSearch} />
                    </div>
                </ContentWrapper>
            </div>}
        </div>
    )
}

export default Header

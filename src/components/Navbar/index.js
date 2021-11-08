import {useState, useEffect, useRef} from 'react';
import {links, social} from '../Data';
import {FaBars} from 'react-icons/fa';
import Logo from '../../Logo.svg';
import './style.css';

function App() {

    const [showLinks, setShowLinks] = useState(false);
    const linksContainer = useRef(null);
    const linksRef = useRef(null);

    useEffect(_ => {
        const height = linksRef.current.getBoundingClientRect().height;
        if (showLinks) {
            linksContainer.current.style.height = `${height}px`;
        } else {
            linksContainer.current.style.height = `0px`;
        }
    }, [showLinks]); 

    return (
        <nav>
            <div className='container navContainer'>
                <div className='navHeader'>
                    <img className='logo' src={Logo} alt='logo' />
                    <button className='navToggle'
                        onClick={_ => setShowLinks(!showLinks)}>
                        <FaBars />
                    </button>
                </div>
                <div className='navLinks' ref={linksContainer}>
                    <ul ref={linksRef}>{
                        links.map(link => {
                            const {id, url, text} = link;
                            return (
                                <li key={id}>
                                    <a href={url}>{text}</a>
                                </li>
                            );
                        })    
                    }</ul>
                </div>
                <div className='socialIcons'>
                    <ul>{
                        social.map(item => {
                            const {id, url, icon} = item;
                            return (
                                <li key={id}>
                                    <a href={url}>{icon}</a>
                                </li>
                            )
                        })
                    }</ul>
                </div>
            </div>
        </nav>
    );
}

export default App;

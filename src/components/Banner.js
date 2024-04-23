import logo from '../assets/logo.png'
import '../styles/Banner.css'


function Banner() {
    const title = 'The Jungle House'
    return (
    <div>
        <img src={logo} alt="logo" className='jh-logo' />
        <h1 className="jh-banner">{title}</h1>
    </div>     
    )
}

export default Banner
import logo from '../assets/logo.png'
import '../styles/Banner.css'

function Banner() {
	const title = 'Jungle House'
	return (
		<div className='jh-banner'>
			<img src={logo} alt='logo' className='jh-logo' />
			<h1 className='jh-title'>{title}</h1>
		</div>
	)
}

export default Banner
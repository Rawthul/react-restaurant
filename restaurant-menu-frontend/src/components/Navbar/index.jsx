import { NavLink } from 'react-router-dom';

import { AiFillHome } from 'react-icons/ai';
import { CgMenuGridO } from 'react-icons/cg';
import { MdContactSupport } from 'react-icons/md';

const Navbar = ({ className = '' }) => {
	const classes = {
		nav: `px-4 flex flex-col lg:flex-row bg-white dark:bg-dark-100 lg:bg-transparent lg:dark:bg-transparent rounded-lg shadow-md lg:shadow-none lg:gap-12 ${className}`.trim(),
		link: 'text-lg font-medium hover:text-accent dark:hover:text-accent focus-visible:text-accent dark:focus-visible:text-accent transition-colors flex lg:block items-center gap-4 py-3 lg:p-0 border-b dark:border-charcoal-200 lg:border-none last:border-none',
		icon: 'h-9 grid lg:hidden place-items-center aspect-square',
	};
	return (
		<nav className={classes.nav}>
			<NavLink to='/' className={({ isActive }) => `${classes.link} ${isActive ? 'text-dark-primary dark:text-light-primary' : 'text-dark-disabled dark:text-light-disabled'}`}>
				<span className={classes.icon}>
					<AiFillHome className='text-3xl' />
				</span>
				HOME
			</NavLink>
			<NavLink to='/menu' className={({ isActive }) => `${classes.link} ${isActive ? 'text-dark-primary dark:text-light-primary' : 'text-dark-disabled dark:text-light-disabled'}`}>
				<span className={classes.icon}>
					<CgMenuGridO className='text-3xl' />
				</span>
				MENU
			</NavLink>
			<NavLink to='/contact' className={({ isActive }) => `${classes.link} ${isActive ? 'text-dark-primary dark:text-light-primary' : 'text-dark-disabled dark:text-light-disabled'}`}>
				<span className={classes.icon}>
					<MdContactSupport className='text-3xl' />
				</span>
				CONTACT
			</NavLink>
		</nav>
	);
};

export default Navbar;

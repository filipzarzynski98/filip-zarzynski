import './topbar.scss'
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import MailIcon from '@mui/icons-material/Mail';


const Topbar = ({menuOpen, setMenuOpen}) => {
    return (
        <div className={'topbar ' + (menuOpen && "active")}>
            <div className='wrapper'>
                <div className='left'>
                    <a href='#intro' className='logo'>portfolio.</a>
                    <div className='itemContainer'>
                        <SmartphoneIcon className="icon"/>
                        <span>+48 505 393 995</span>
                    </div>
                    <div className='itemContainer'>
                        <MailIcon className="icon"/>
                        <span>zarzynskifilip@gmail.com</span>
                    </div> 
                </div>
                
                <div className='right'>
                    <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)} >
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
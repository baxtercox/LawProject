import twitter from '../images/twitter.svg';
import facebook from '../images/facebook.svg';
import linkedin from '../images/linkedin.svg';
import phone from '../images/telephone.svg';
import '../CSS/SocialMediaLinks.css';
function SocialMedia() {
    return( 
        <div className="socialMediaLinks">
            <div className='socialHeading'>
                <div className='row'>
                    <ul className='socialNetowrks'>
                        <li>
                            <a href='https://twitter.com'>
                                <img src ={twitter} className='Twitter-logo' alt='twitter'/>
                            </a>
                        </li>
                        <li>
                            <a href='https://facebook.com'>
                                <img src={facebook} className='Facebook-logo' alt='facebook'/>
                            </a>
                        </li>
                        <li>
                            <a href='https://linkedin.com'>
                                <img src={linkedin} className='Linkedin-logo' alt='linkedin'/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='phoneRow'>
                    <ul className='phoneUl'>
                    <li className='phoneList'>
                        <img src={phone} className='phone-logo' alt='phone'/>
                        Call Us:
                        <a href='tel: 724-984-3790' className='telNum'>724-984-3790</a>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SocialMedia;


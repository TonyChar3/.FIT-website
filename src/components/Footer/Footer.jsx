import { useState } from 'react';

const Footer = () => {

    const [arrowSocials, setSocials] = useState(false);// arrow Socials
    const [arrowMenu, setMenu] = useState(false);// arrow Menu
    const [arrowPolicy, setPolicy] = useState(false);// arrow Policy

    // handle the click of the arrow
    const handleArrowSocials = (e) => {
        e.preventDefault();

        setSocials(arrowSocials => !arrowSocials)
    }

    // handle the click of the arrow
    const handleArrowMenu = (e) => {
        e.preventDefault();

        setMenu(arrowMenu => !arrowMenu)
    }

    // handle the click of the arrow
    const handleArrowPolicy = (e) => {
        e.preventDefault();

        setPolicy(arrowPolicy => !arrowPolicy)
    }
    
    return(
        <>
            <div>
                <div className="flex flex-row justify-center items-center border-b-2 border-black p-2">
                    <div className="text-center w-1/4 z-10">
                        <h3 className="text-3xl capitalize">Menu</h3>
                    </div>
                    <div className="flex justify-center ml-2">
                        <i onClick={(e) => handleArrowMenu(e)} className={`fa-sharp fa-solid fa-chevron-${arrowMenu? 'up' : 'down'} text-2xl`}></i>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center w-full p-2">
                    <ul className="relative top-20 flex flex-col justify-center items-center z-10">
                        <li className="text-2xl my-1">Home</li>
                        <li className="text-2xl my-1">Shop</li>
                        <li className="text-2xl my-1">Contact us</li>
                        <li className="text-2xl my-1">About</li>
                    </ul>
                </div>
                <div className="flex flex-row justify-center items-center border-b-2 border-black p-2 bg-white">
                    <div className="text-center w-1/4 z-10">
                        <h3 className="text-3xl capitalize">Policy</h3>
                    </div>
                    <div className="flex justify-center ml-2">
                        <i onClick={(e) => handleArrowPolicy(e)} className={`fa-sharp fa-solid fa-chevron-${arrowPolicy? 'up' : 'down'} text-2xl `}></i>
                    </div>
                </div>
                <div>
                    <ul>
                        <li>Faq</li>
                        <li>Policy</li>
                        <li>Shipping & returns</li>
                    </ul>
                </div>
                <div className="flex flex-row justify-center items-center border-b-2 border-black p-2">
                    <div className="text-center w-1/4 z-10">
                        <h3 className="text-3xl capitalize">Socials</h3>
                    </div>
                    <div className="flex justify-center ml-2">
                        <i onClick={(e) => handleArrowSocials(e)} className={`fa-sharp fa-solid fa-chevron-${arrowSocials? 'up' : 'down'} text-2xl`}></i>
                    </div>
                </div>
                <div>
                    <div>
                        <i className="fa-brands fa-snapchat"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-tiktok"></i>
                    </div>
                    <h4>email@random.com</h4>
                    <h4>(444) 444-4444</h4>
                </div>
                <div className="w-full bg-black text-center p-1">
                    <span className="text-sm text-white">&copy;.FIT all rights reserved</span>
                </div>
            </div>
        </>

    );
}

export default Footer;
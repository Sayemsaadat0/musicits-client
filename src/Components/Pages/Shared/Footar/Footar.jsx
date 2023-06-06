import { CiTwitter, CiInstagram,CiFacebook  } from 'react-icons/ci';

const Footar = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-black text-white">
                <div>
                    <img className='w-40' src="https://i.ibb.co/RDVdLN4/woops.png" alt="" />
                    <p className="font-bold">
                        Musicits Ltd.
                    </p>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <CiFacebook className='text-5xl'></CiFacebook>
                        <CiInstagram className='text-5xl'></CiInstagram>
                        <CiTwitter className='text-5xl'></CiTwitter>
                       
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footar;
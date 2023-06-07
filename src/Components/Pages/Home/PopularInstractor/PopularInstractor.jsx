import React from 'react';
import './style.css'
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import Slide from 'react-reveal/Slide'
const PopularInstractor = () => {
    return (
        <div>
            <SectionTitle title1={'Meet Our Popular Instructors:'} title2={'Learn from the Best'}subtitle={'Get ready to learn from the crème de la crème of music instruction with our popular instructors. These highly skilled  musicians bring their wealth of expertise and passion to our platform, offering you the opportunity to receive top-notch instruction from the best in the business. '}></SectionTitle>
       <Slide right>
       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-10'>
            <div style={{borderRadius: '100px 0 100px 0'}} className="card image bg-base-100 shadow-xl ">
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                </div>
                <img style={{borderRadius: '100px 0 100px 0'}} className="hover:scale-110 duration-500" src="https://i.ibb.co/VQLs2zW/1.png" />
            </div>

            <div className="card image bg-base-100 shadow-xl ">
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                </div>
                <img style={{borderRadius: '100px 0 100px 0'}} className="hover:scale-110 duration-500" src="https://i.ibb.co/p3Ktw7V/2.png" />
            </div>

            <div className="card image bg-base-100 shadow-xl ">
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                </div>
                <img style={{borderRadius: '100px 0 100px 0'}} className="hover:scale-110 duration-500" src="https://i.ibb.co/P6mMt69/3.png" />
            </div>

            <div className="card image bg-base-100 shadow-xl ">
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                </div>
                <img style={{borderRadius: '100px 0 100px 0'}} className="hover:scale-110 duration-500" src="https://i.ibb.co/y4NfnCT/4.png" />
            </div>
            
            <div className="card image bg-base-100 shadow-xl ">
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                </div>
                <img style={{borderRadius: '100px 0 100px 0'}} className="hover:scale-110 duration-500" src="https://i.ibb.co/TqPSxzT/5.png" />
            </div>

            <div className="card image bg-base-100 shadow-xl ">
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                </div>
                <img style={{borderRadius: '100px 0 100px 0'}} className="hover:scale-110 duration-500" src="https://i.ibb.co/JFHbSYR/6.png" />
            </div>

            <div className="card image bg-base-100 shadow-xl ">
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                </div>
                <img style={{borderRadius: '100px 0 100px 0'}} className="hover:scale-110 duration-500" src="https://i.ibb.co/4ZyPt1H/7.png" />
            </div>
            
            <div className="card image bg-base-100 shadow-xl ">
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                </div>
                <img style={{borderRadius: '100px 0 100px 0'}} className="hover:scale-110 duration-500" src="https://i.ibb.co/6rG3Pkd/8.png" />
            </div>
        </div>
       </Slide>
        
        </div>
    );
};

export default PopularInstractor;











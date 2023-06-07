import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from "keen-slider/react"
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import slider1 from '../../../../assets/home/slider(1).png'
import slider2 from '../../../../assets/home/slider(2).png'
import slider3 from '../../../../assets/home/slider(3).png'
import slider4 from '../../../../assets/home/slider(4).png'
import slider5 from '../../../../assets/home/slider(5).png'
import slider6 from '../../../../assets/home/slider(6).png'
import slider8 from '../../../../assets/home/slider(8).png'
import slider9 from '../../../../assets/home/slider(9).png'

const animation = { duration: 30000, easing: (t) => t }

const TopSlider = () => {
    const [sliderRef] = useKeenSlider({
        loop: true,
        renderMode: "performance",
        drag: false,
        created(s) {
            s.moveToIdx(5, true, animation)
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
    })
    return (
       <div>
        <SectionTitle title1={'Unlock Your Musical'} title2={' Potential'} subtitle={'Dive into the world of music with our slider section, where you can embark on a transformative journey of learning and mastering various instruments.'}></SectionTitle>
         <div ref={sliderRef} className="keen-slider mt-6">
            <div className="keen-slider__slide number-slide1"><img src={slider1} alt="" /></div>
            <div className="keen-slider__slide number-slide1"><img src={slider2} alt="" /></div>
            <div className="keen-slider__slide number-slide1"><img src={slider3} alt="" /></div>
            <div className="keen-slider__slide number-slide1"><img src={slider4} alt="" /></div>
            <div className="keen-slider__slide number-slide1"><img src={slider5} alt="" /></div>
            <div className="keen-slider__slide number-slide1"><img src={slider6} alt="" /></div>
            <div className="keen-slider__slide number-slide1"><img src={slider8} alt="" /></div>
            <div className="keen-slider__slide number-slide1"><img src={slider9} alt="" /></div>
           
        </div>
       </div>
    );
};

export default TopSlider;
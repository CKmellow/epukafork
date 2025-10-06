import './Background.css';
import rainvid from '../../assets/rainvid.mp4';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';

const Background = ({ playStatus, heroCount }) => {
    return (
        <>
            {playStatus ? (
                <video className='background fade-in' autoPlay loop muted>
                    <source src={rainvid} type='video/mp4' />
                </video>
            ) : heroCount === 0 ? (
                <img src={image1} className='background' alt='' />
            ) : heroCount === 1 ? (
                <img src={image2} className='background' alt='' />
            ) : heroCount === 2 ? (
                <img src={image3} className='background' alt='' />
            ) : null}
            <div className='overlay'></div>
        </>
    );
};

export default Background;

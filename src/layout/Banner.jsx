import BannerPhoto from '../assets/photos/banner.svg';
import Blob from '../assets/vectors/blob.svg'
import "../scss/sections/_banner.scss"
export default function Banner() {
    return (
        <div className="containerBanner">
            <div className="bannerBlob">
                <div className="blobContainer">
                    <img src={Blob}/>
                    <div className="bannerContainer">
                        <img src={BannerPhoto}/>
                    </div>
                </div>
            </div>
            <div className="headerText">
                <div className="firstText">
                    <h2>
                        Empowering Tomorrow, Sustainably Today:
                    </h2>
                </div>
                <div className="secondText">
                    <h2>
                        Join us in building a cleaner, sustainable future
                    </h2>
                </div>
            </div>
        </div>
    );
}


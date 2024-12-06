import BannerPhoto from '../assets/photos/banner.svg';
import Blob from '../assets/vectors/blob.svg'
import "../scss/sections/_banner.scss"
export default function Banner() {
    return (
        <div id="home" className="containerBanner">
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
                        Inovacion për një të Nesërme më të Gjelbër:
                    </h2>
                </div>
                <div className="secondText">
                    <h2>
                        Transformimi i Ideve në Zgjidhje të Qëndrueshme
                    </h2>
                </div>
            </div>
        </div>
    );
}


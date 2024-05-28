import '../scss/sections/_slider.scss';
import ecoElectricImage from '../assets/vectors/eco-electric.png';
import recycleSymbolImage from '../assets/vectors/recycle-symbol.png';
import renewableEnergyImage from '../assets/vectors/renewable-energy.png';
import saveThePlanetImage from '../assets/vectors/save-the-planet.png';
import solarCellImage from '../assets/vectors/solar-cell.png';

const Slider = () => {
    const images = [
        ecoElectricImage,
        recycleSymbolImage,
        renewableEnergyImage,
        saveThePlanetImage,
        solarCellImage,
    ];

    return (
        <>
            <div className="container">
                <div className="wrapper">
                    <div className="imgContainer">
                        {images.map((image, index) => (
                            <div className="imgBox" key={index}>
                                <img src={image} alt={`carousel-img-${index}`} />
                            </div>
                        ))}
                        {images.map((image, index) => (
                            <div className="imgBox" key={index + images.length}>
                                <img src={image} alt={`carousel-img-${index}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Slider;


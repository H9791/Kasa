import './infologement.css';
import Accordion from '../accordion/accordion';
import star from './star.svg'
import redstar from './redstar.svg';
/*import { useParams } from 'react-router-dom';
import Houses from '../../assets/logements.json';*/

export default function Infologement({ info }) {

   /* const { houseId } = useParams();
    console.log("houseId: " + houseId);

    let info = Houses.find(element => element.id === houseId);
*/
    //get equipements
    let equipements = info.equipments.map((equipment, index) => {
        return (
            <p>{equipment}</p>
        )
    });

    let stars = "";

    let rating = Array(5).fill(0).map((_, index) => {

        stars = index <= info.rating - 1 ? redstar : star;

        return (
            <div key={index} className="star-rating"><img src={stars} alt="Star rating" /></div>
        )
    })

    let names = info.host.name.split(" ").map((name, index) => {
        return (
            <p key={index}>{name}</p>
        )
    });

    return (
        <div id="infologement">
            <div className="outer-heading-flex">
                <div className="title-name-tags">
                    <h1>{info.title}</h1>
                    <p className="location-city">{info.location}</p>
                    <div className="tags">{info.tags.map((tag, index) => { return (<p key={index} className="tag">{tag}</p>) })}
                    </div>
                </div>

                <div className="name-pic-stars">
                    <div className="name-pic-flex">
                        <div>
                            {names}
                        </div>
                        <div className="host-picture">
                            <img src={info.host.picture} alt="Host" />
                        </div>
                    </div>
                    <div className="rating-nowrap">
                        {rating}
                    </div>
                </div>

            </div>


            <div className="description-equipements">
                <div className="accordion">
                    <Accordion value="Description" description={info.description} />
                </div>
                <div className="accordion">
                    <Accordion value="Equipements" description={equipements} />
                </div>
            </div>
        </div>
    );
}
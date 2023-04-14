import './infologement.css';
import Accordion from '../accordion/accordion';
import star from './star.svg'
import redstar from './redstar.svg';

export default function Infologement({ info }) {

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
            <div className="star-rating"><img  src={stars} alt="Star rating" /></div>
        )
    })

    let names = info.host.name.split(" ").map((name, index) => {
        return (<>
            <p>{name}</p>
        </>

        )
    });

    return (
        <div id="infologement">
            <div className="outer-heading-flex">
                <div className="title-name-tags">
                    <h1>{info.title}</h1>
                    <p className="location-city">{info.location}</p>
                    <p className="tags">{info.tags.map((tag, index) => { return (<div className="tag">{tag}</div>) })}
                    </p>
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
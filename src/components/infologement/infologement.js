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
        index <= info.rating - 1 ? stars = redstar : stars = star;
        return (
            <img className="star-rating" src={stars} alt="Star rating" />
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
                    <p>{info.tags.map((tag, index) => { return (<span className="tag">{tag}</span>) })}
                    </p>
                </div>

                <div className="name-pic-stars">
                    <div className="name-pic-flex">
                        <div>
                            {names}
                        </div>
                        <div className="host-picture">
                            <img src={info.host.picture} alt="Host picture" />
                        </div>
                    </div>
                    <div>
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
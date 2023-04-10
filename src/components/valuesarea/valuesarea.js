import values from './valuesdescription.json';
import Accordion from '../accordion/accordion';
import './valuesarea.css';

export default function Valuesarea() {

  
    let accordions = values.map((accordion, index) => {
        return <Accordion value={accordion.value} description={accordion.description} />
    });

    return (
        <div id="values-area">
            <ul>
            {accordions}
            </ul>
        </div>
    );
}
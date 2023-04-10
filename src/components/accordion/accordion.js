import './accordion.css';
import  { useState} from 'react';

export default function Accordion({ value, description }) {
    const [isOpen, setOpen] = useState(false);
    const [chevron, setChevron] = useState("chevron-down");

    const handleClick = () => {
        setOpen((isOpen)=>!isOpen);
        isOpen?setChevron("chevron-down"):setChevron("chevron-up");
    }

    return (
        <li className="accordion-item">
            <button onClick={handleClick}>
                <p className="value">{value}</p>
                <p className={chevron}></p>
            </button>
            {isOpen && (<p className="description"> {description} </p>)}
        </li>
    )
}
import {useState} from "react";
import Cards from "../components/Cards";
import Card from "./Card.js";
function Cards() {
    const [items, setItems] = useState([
        {id: 1, img: './flower.png', stat: ""},
        {id: 1, img: './flower.png', stat: ""},
        {id: 2, img: './flower2.png', stat: ""},
        {id: 2, img: './flower2.png', stat: ""},
        {id: 3, img: './flower3.png', stat: ""},
        {id: 3, img: './flower3.png', stat: ""},
        {id: 4, img: './flower4.png', stat: ""},
        {id: 4, img: './flower4.png', stat: ""},
        {id: 5, img: './flower5.png', stat: ""},
        {id: 5, img: './flower5.png', stat: ""},
        {id: 6, img: './flower6.png', stat: ""},
        {id: 6, img: './flower6.png', stat: ""},
        {id: 7, img: './flower7.png', stat: ""},
        {id: 7, img: './flower7.png', stat: ""},
        {id: 8, img: './flower8.png', stat: ""},
        {id: 8, img: './flower8.png', stat: ""},
    ].sort(() => Math.random() - 0.5),)

    const [prev, setPrev] = useState(-1)

    function check(current){
        if(items[current].id == items[prev].id){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setPrev(-1)
        }else{
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)
        }

    }

    function handlecClick(id) {
        alert(id);
        items[id].stat = "active";
        setItems([...items]);
        if(prev === -1) {
            items[id].stat = "active"
            setPrev(id);
        }else{
            check(id)
        }
    }

    return (
        <div className={'container'}>
            {items.map((item, index) => (
                <Card key={index} item={item} id={index} handlecClick={handlecClick} />
            )) }
        </div>

    )

}

export default Cards;
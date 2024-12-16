function Card({item, id, handlecClick}) {
    const itemClass = item.stat ? "active" + item.stat : "";
    return (
        <div className={"card" + itemClass} onClick={() => handlecClick(id)}>
            <img src={item.img} alt=""/>
        </div>
    )
}

export default Card;
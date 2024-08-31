//create a button for with a prop

export default function BUtton(prop){

    //return the content for the button
    return(
        <div className="button">
            <button className="btn" onClick={prop.onClick}>{prop.children}</button>
        </div>
    )
}
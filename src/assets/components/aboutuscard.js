/*this card contains information
about the compan and what we stand for
*/




export default function ContentCard({text}){

    //return an h1 for the title and a p tag for the title
    return(
        <div className="content-card">
            <h1>{text}</h1>
            <p>{text}</p>
        </div>
    )
}
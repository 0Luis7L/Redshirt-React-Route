
// component just shows the info from the response
// after clicking submit

export default function PostedItem(props){
//Thinking about maping it out
    return ( 
        <div>
            <h1 className="posted-title">Posted Items</h1>
            <div className="contacts">
                <div className="contact-card">
                    <div className="info">
                        <p>{props.item.id}</p>
                    </div>
                    <div className="info">
                        <p> {props.item.sku}</p>
                    </div>
                    <div className="info">
                        <p> { props.item.title}</p>
                    </div>
                    <div className="info">
                        <p>
                            <a>{props.item.url}</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );


}
//contacts
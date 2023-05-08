import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFingerprint } from '@fortawesome/free-solid-svg-icons'
// component just shows the info from the response
// after clicking submit

export default function PostedItem(props){
    const SecColor = "#2b3452";
    const TagIcon = <FontAwesomeIcon icon={faFingerprint} />

    return ( 
        <div>
            <h1 className="posted-title">Posted Items</h1>
            <div className="contacts">
                <div className="contact-card">
                    <div className="info">
                        <p>{TagIcon}{props.item.id}</p>
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
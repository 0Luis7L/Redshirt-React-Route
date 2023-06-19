import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faTag, faBarcode,faArrowRight } from '@fortawesome/free-solid-svg-icons'
// component just shows the info from the response
// after clicking submit

export default function PostedItem(props){
    
    const TagIcon = <FontAwesomeIcon icon={faTag} style={{marginRight: 5 + "px"}} />
    const SkuIcon = <FontAwesomeIcon icon={faBarcode} style={{marginRight: 5 + "px"}} />
    const LinkIcon = <FontAwesomeIcon icon={faArrowRight} style={{marginRight: 5 + "px"}} />
    const InfoIcon = <FontAwesomeIcon icon={faCircleInfo} size="2xs" style={{paddingTop: 20 + "px"}} />

    return ( 
        <div>
            <h1 className="posted-title">Posted Items {InfoIcon}</h1>
            <div className="contacts" alt="Hexagon background" href="https://www.vecteezy.com/free-vector/technology-background">
                <div className="contact-card">
                    <div className="info">
                        <p>{TagIcon}{props.item.id}</p>
                    </div>
                    <div className="info">
                        <p>{SkuIcon} {props.item.sku}</p>
                    </div>
                    <div className="info">
                        <p style={{margin: 5 + "px"}}> { props.item.title}</p>
                    </div>
                    <div className="info">
                        <p>
                            <a href={props.item.url} target='_blank'>{LinkIcon}{props.item.url}</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="footer">
                <a class="previous" href="#">&laquo; Previous</a>
                <a class="next" href="#">Next &raquo;</a>
              </div>
        </div>
    );


}
/*
<a href="https://www.vecteezy.com/free-vector/technology-background">Technology Background Vectors by Vecteezy</a>
*/
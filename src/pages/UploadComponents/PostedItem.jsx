
// component just shows the info from the response
// after clicking submit

export default function PostedItem( props){

    return ( <>
            <label>{props.item.id}</label>
            <label> {props.item.sku}</label>
            <label> { props.item.title}</label>
            <label> {props.item.url}</label>
            </>
    );


}
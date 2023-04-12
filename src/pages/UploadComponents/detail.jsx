
export default function Detail (props) {
    return (
        <div className="details">
            <input 
            type="text"
            placeholder='SKU'
            name="sku"
            onChange={props.onHandle}
            value={props.laptop.id}
            />
            <input 
            type="text"
            placeholder="Make"
            name="make"
            onChange={props.onHandle}
            value={props.laptop.make}
            />
            <input 
            type="text"
            placeholder="model"
            name="model"
            onChange={props.onHandle}
            value={props.laptop.model}
            />
            <input 
            type="text"
            placeholder="resolution"
            name="resolution"
            onChange={props.onHandle}
            value={props.laptop.resolution}
            />
            <input 
            type="text"
            placeholder="cpu"
            name="cpu"
            onChange={props.onHandle}
            value={props.laptop.cpu}
            />
            <input 
            type="text"
            placeholder="ram"
            name="ram"
            onChange={props.onHandle}
            value={props.laptop.ram}
            />
            <input 
            type="text"
            placeholder="storage"
            name="storage"
            onChange={props.onHandle}
            value={props.laptop.storage}
            />
            <input 
            type="text"
            placeholder="gpu"
            name="gpu"
            onChange={props.onHandle}
            value={props.laptop.gpu}
            />
            <input 
            type="text"
            placeholder="os"
            name="os"
            onChange={props.onHandle}
            value={props.laptop.os}
            />
            <input 
            type="text"
            placeholder="notes"
            name="notes"
            onChange={props.onHandle}
            value={props.laptop.notes}
            />
            <input 
            type="text"
            placeholder="screensize"
            name="screensize"
            onChange={props.onHandle}
            value={props.laptop.screenSize}
            />
            <input 
            type="text"
            placeholder="custom"
            name="custom"
            onChange={props.onHandle}
            value={props.laptop.custom}
            />
        </div>
    )
}

/*
sku: "",
make: "",
model: "",
resolution: "",
cpu: "",
ram: "",
storage: "",
gpu: "",
os: "",
notes: "",
screensize: "",
custom: ""
*/
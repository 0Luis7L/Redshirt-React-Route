

export default function Home(props) {
  return (
    <div>
     <h1>Here are all the Laptop listed</h1>
     <div className="contact--card">
      <img src={props.img} />
      <h3>Make</h3>
      <div className="info--group">
        <p>Model</p>
      </div>
      <div className="info--group">
        <p>CPU</p>
      </div>
      <div className="info--group">
        <p>Notes:</p>
      </div>
      <div className="info--group">
        <p>Custom:</p>
      </div>
      <div className="info--group">
        <p>Price $</p>
      </div>
     </div>
    </div>
  )
}

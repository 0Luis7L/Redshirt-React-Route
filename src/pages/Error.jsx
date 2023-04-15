import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div>
        <h1>Page not found!</h1>
        <p>Here are a few links to help you out navigate throughout the app.</p>
        <br />
        <div>
            <p>Return to the <Link to="/Unlisted">Unlisted Laptops</Link></p>
            <p>Return to the <Link to="">Update a Laptop</Link></p>
            <p>Return to the <Link to="/refurbish">Upload Refurbished Laptops</Link></p>
        </div>
    </div>
  )
}

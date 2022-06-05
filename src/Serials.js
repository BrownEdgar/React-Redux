
import { useSelector, useDispatch } from "react-redux"
import { addSerial } from "./redux/features/seriales";

const data = {
  id: 4,
  title: "new Serial",
  ratings: "8.0",
  actors: ['Courteney Cox', 'Jennifer Aniston', 'Lisa Kudrow', 'Matt LeBlanc', 'Matthew Perry', 'David Schwimmer'],
  poster: "https://wallpapercave.com/wp/wp3256631.jpg"
}

function Serials() {
  const serials = useSelector(state => state.serials)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>friends</h1>
      <ul>
        {serials.map((elem, index) => {
          return <li key={index}>{JSON.stringify(elem, null, 1)}</li>
        })}
      </ul>

      <button onClick={() => dispatch(addSerial(data))}>Add Friend</button>


    </div>
  );
}

export default Serials;

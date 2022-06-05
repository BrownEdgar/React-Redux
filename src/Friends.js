
import { useSelector } from "react-redux"

function Friends() {
  //	Էստեղ ամբողջ "state"-ից վերցնում ենք միայն այն ինչ պետք է կոնկրետ այս կոմպոնենտին
  // վերցնում ենք միայն "friends" զանգվածը
  const serials = useSelector(state => state.serials)

  return (
    <div className="App">
      <h1>friends</h1>
      <ul>
        {serials.map((elem, index) => {
          return <li key={index}>{JSON.stringify(elem, null, 1)}</li>
        })}
      </ul>
    </div>
  );
}

export default Friends;

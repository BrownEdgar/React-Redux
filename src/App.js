//////////////////////////////////////////////////////////////
//						  ԱՅՍ ՄԱՍՈՒՄ (4)					
//  ավելացված է Friends կոմպոնենտը, որը ավելացնում է նոր ընկեր 
// 	useSelector-ին փոխանցվող ֆունկցիան նույնպես առանձնացված է "friend.js"-ում "selectFriendName" անունով
//  dispatch-ին տրվող ֆունկցիան նուընպես առանձնացված է, կոդը պարզեցնելու նպատակով, այն նույնպես տեղափոխված է "friend.js" `changeFriendName` անունով

//////////////////////////////////////////////////////////////

import './App.css';
import { useSelector, useDispatch } from "react-redux"
import { selectFriendName, changeFriendName } from "./redux/features/friends"
import Friends from './Friends';
import Serials from './Serials';

function App() {

  const name = useSelector(selectFriendName)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1 id="title">Redux Tutorial</h1>
      <hr />
      <h1>{name}</h1>

      <input type="text"
        value={name}
        onChange={(e) => { dispatch(changeFriendName(e.target.value)) }} />
      <Friends />
			<Serials /> 
    </div>

  );
}

export default App;

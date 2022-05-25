//////////////////////////////////////////////////////////////
//						  ԱՅՍ ՄԱՍՈՒՄ (3)					
//  ավելացված է Friends կոմպոնենտը, որը ավելացնում է նոր ընկեր 
// 	useSelector-ին փոխանցվող ֆունկցիան նույնպես առանձնացված է "friend.js"-ում "selectFriendName" անունով
//  dispatch-ին տրվող ֆունկցիան նուընպես առանձնացված է, կոդը պարզեցնելու նպատակով, այն նույնպես տեղափոխված է "friend.js" `changeFriendName` անունով

//////////////////////////////////////////////////////////////

import './App.css';
import Serials from './Serials';

function App() {
  return (
    <div className="App">
		  <Serials/>
    </div>
  );
}

export default App;

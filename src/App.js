import { useState } from 'react';
import './App.css';
import Block from './Block'


function App() {
  const [blockContent] = useState([
    {header:"Myhead",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." ,buttonTxt:"Im a buttonTxt"},{header:"Your head", body:"Ok whatever i want to put here I can put and Sunday i am going to camping  with stinky and mIss hagline hehehehe hahahah hohohohoho", buttonTxt:"Im a buttonTxt"},{
      header:"Stinky head", body:"This is a sexy body if the Mr.react", buttonTxt:"Im a buttonTxt"
    }
  ])

  const clickMe = () => {
    console.log("kick me")
  }

    return ( <div className = "App" >
      {blockContent.map((block, i) => (<Block 
      key={i}
      header={block.header} body={block.body} buttonTxt={block.buttonTxt} buttonClick={clickMe}/>))}
  
      
    </div>
    );
}

export default App;

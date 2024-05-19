
import './App.css';
import Secard from './components/Secard';
import Card from './components/Card';
import Memo from './components/Memo';
import Coll from './components/Coll';


function App() {
  return (
    <>
    <h1 className="bg-green-400">usama abbasi</h1>
   <div id="main">
   <Card  btnText="Click Here" chand="Usama"/>
   <Card btnText="Click Now" chand="Abbasi" />
   </div>
   <Secard />
   <Memo />
   <Coll />

  </>
  );
}

export default App;

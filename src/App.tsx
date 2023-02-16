import './App.css';
import SoundpadBtn from './components/SoundpadBtn';
function App() {

  let soundObj = [
    {
      name: 'มวยไทย',
      soundName: 'muaythai.mp3',
      icon: '🥊'
    },
    {
      name: 'มวยไทย',
      soundName: 'muaythai.mp3',
      icon: '🥊'
    },
    {
      name: 'มวยไทย',
      soundName: 'muaythai.mp3',
      icon: '🥊'
    },

  ]


  return (
    <div className="App">
      <h1>SGL - Sound Pad</h1>
      <center>
        <div className='row g-2 '>
          {soundObj.map((element, index) => {
            return <div key={index} className='col-6 col-md-4'>
              <SoundpadBtn name={element.name} soundName={element.soundName} icon={element.icon} index={index} />
            </div>
          })}
        </div>
      </center>

    </div>
  );
}

export default App;

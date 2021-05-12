import Square from './components/game'
import './App.css'

const squares = [
  [
    {
      index: 11,
      name:"test",
      bomb: true
    },
    {
      index: 12,
      name:"test2",
      bomb: false
    }
  ],
  [
    {
      index: 21,
      name:"test3",
      bomb: true
    },
    {
      index: 22,
      name:"test4",
      bomb: false
    }
  ],
  [
    {
      index: 11,
      name:"test5",
      bomb: true
    },
    {
      index: 12,
      name:"test6",
      bomb: false
    }
  ],
  [
    {
      index: 21,
      name:"test7",
      bomb: true
    },
    {
      index: 22,
      name:"test8",
      bomb: false
    }
  ]
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MINESWEEEPEERRR POGGERGES</h1>
        <div class="gamearea">
          <div>header board</div>
          <div>
            square place 
            <br/>
            100 squares
          </div>

          <div>
            {squares[0][0].index}
            {squares[1][0].index}
            {squares[1][0].name}
          </div>

          <Square squares={squares}/>
        </div>
      </header>
    </div>
  );
}

export default App;
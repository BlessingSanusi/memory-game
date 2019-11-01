import React, {Component} from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header';
import Cards from './components/Cards';
import Footer from './components/Footer';
import cards from "./cards.json";
import Wrapper from "./components/Wrapper";

function shuffleCards(array){
  for (let i = array.length - 1; i > 0; i-- ){
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] =  [array[j], array[i]]
  }
  return array;
}

class App extends Component {
  state = {
    cards,
    currentScore: 0,
    topScore: 0,
    clicked: [],
    message: ""
  };

  handleClick = id => {
    if(this.state.clicked.indexOf(id) === -1){
      this.handleIncrement();
      this.setState({
        clicked: this.state.clicked.concat(id),
      message: "You guessed correctly!" 
    })

    }
    else{
      this.handleReset();
      this.setState({
        message: "You guessed incorrectly!" 
      })
    };
  }

  handleIncrement = () => {
const newScore = this.state.currentScore + 1;
this.setState({
  currentScore: newScore,
  message: ""
});
if(newScore >= this.state.topScore){
this.setState({topScore: newScore});
}

else if (newScore === 12){
  this.setState({message: "Congratulations!!! You have a good memory"})
}
this.handleShuffle();
  }

handleReset = () => {
  this.setState({
    currentScore: 0,
    topScore: this.state.topScore,
    clicked: [],
    message: "Click an image to begin!"
  });
  this.handleShuffle();
}

  handleShuffle = () => {
let shuffleCard = shuffleCards(cards);
this.setState({cards: shuffleCard})
  }

  render(){

    return (
      <div>
       <Navbar 
       score={this.state.currentScore}
       topScore={this.state.topScore}
       message={this.state.message}
       />
       <br/><br/>
       <Header />

       <div className="container">
        <Wrapper>
            {this.state.cards.map(card => (
              <Cards
                  key={card.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset} 
                  handleShuffle={this.handleShuffle}
                  id={card.id}
                  image={card.image}
                  />
            ))}
       </Wrapper>

       </div>
      <Footer />
      </div>
    );
  }

  }
  

export default App;


import style from "./App.module.css"
import Card from './components/Card'

function App() {

  
  return (
    <div className="App">
      <div className={style.container}>
        <div className={style.headerContainer}>
          <div><h1>The creative crew</h1></div>
          <div>
            <h2>WHO WE ARE</h2>
            <span>We are team of creatively diverse.  driven.  innovative individuals working in various locations from the world.</span>
          </div>
        </div>
        <div className={style.myTeam}>
          <Card job="Product owner" name="Bill Mahoney" img="images/photo1.png"/>
          <Card job="Art director" name="Saba Cabrera" img="images/photo2.png" />
          <Card job="Tech Lead" name="Shae Le" img="images/photo3.png"/>
          <Card job="UX Designer" name="Skylah Lu" img="images/photo4.png" />
          <Card job="Developer" name="Griff Richards" img="images/photo5.png" />
          <Card job="DEverloper" name="Stan John" img="images/photo6.png" />
        
        </div>

      </div>
      <div className={style.footer}><span>created by Erceg Gonzalo - <a href='https://devchallenges.io' target="_blank">devChallenges.io</a></span></div>
    </div>
  )
}

export default App

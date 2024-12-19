//Components
import CV from "./component/CV"
import Navigation from "./component/Navigation"

function App() {


  return (
    <>
      <div className='bg-blue-400 h-screen w-screen'>
        <Navigation />
        <div>
          <CV />
        </div>
      </div>
    </> 
  )
}

export default App

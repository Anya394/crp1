import './App.css'
import Card from './components/Card/Card';

function App() {

  return (
    <>
      <div>
      <main>
        <Card
          title="TypeScript Card"
          content="This is typed Card component."
        />
        <Card
          title="Variant 2"
          content="Notice the different button style."
          buttonText='Click me'
          miniButton={true}
        />
      </main>
    </div>
    </>
  )
}

export default App

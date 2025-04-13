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
          sizeButton="lg"
        />
        <Card
          title="Variant 2"
          content="Notice the different button style."
          variantButton="right"
        />
        <Card
          title="Variant 3"
          content="Notice the different button style."
          variantButton="left"
          sizeButton="sm"
        />
      </main>
    </div>
    </>
  )
}

export default App

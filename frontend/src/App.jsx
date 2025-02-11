import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import Container from './components/Layout/Container'

import Content from './components/Content/Content'
import CreateForm from './components/Forms/CreateForm'

function App() {

  return (
    <Router>
      <Navbar />
      <Container customClass='start'>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="create/" element={<CreateForm />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  )
}

export default App

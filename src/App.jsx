import Footer from './components/Footer'
import Header from './components/Header'
import SeccionContacto from './components/SeccionContacto'
import SeccionInicio from './components/SeccionInicio'
import SeccionSobreMi from './components/SeccionSobreMi'

function App() {

  return (
    <>
    <Header />
    <main>
      <SeccionInicio />
      <SeccionSobreMi />
      <SeccionContacto />
    </main>
    <Footer />
    </>
  )
}

export default App

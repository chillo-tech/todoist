import Header from './components/shared/Header'
import ApplicationContextProvider from './context/ApplicationContextProvider'
import Tasks from './pages/Tasks'

function App() {

  return (
    <ApplicationContextProvider>
      <>
      <Header />
      <Tasks />
      </>
    </ApplicationContextProvider>
  )
}

export default App

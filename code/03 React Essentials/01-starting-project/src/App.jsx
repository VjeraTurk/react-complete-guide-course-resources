// React hooks
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';
import Header from './components/Header/Header.jsx'

function App() {

  return (
    <>
      <Header/>
      <main>
      <CoreConcepts/>
      <Examples/>
      </main>
    </>
  );
}
// must be exported - index.js imports it
export default App;

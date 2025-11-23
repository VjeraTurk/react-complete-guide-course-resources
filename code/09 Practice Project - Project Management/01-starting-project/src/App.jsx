import Sidebar from './components/Sidebar.jsx';
import NewProject from './components/NewProject.jsx';

function App() {
  return (
    // h-screen: full height of the viewport
    // my-8: margin top and bottom of 8 units
    // flex: flexbox layout
    // gap-8: gap between the elements of 8 units
    <main className="h-screen my-8 flex gap-8">
      <Sidebar />
      <NewProject />
    </main>
  );
}

export default App;

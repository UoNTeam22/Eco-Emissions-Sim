import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import View from './components/View';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />
      {/* Sidebar */}
      <Sidebar />
      {/* Body */}
      <View />
    </div>
  );
}

export default App;

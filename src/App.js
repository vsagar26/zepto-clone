
import { ToastContainer } from 'react-toastify';
import {Footer, Navbar} from './components';
import AllRoutes from './Routes/AllRoutes';



function App() {
 
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      <Footer/>
      <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
    </div>
  );
}

export default App;

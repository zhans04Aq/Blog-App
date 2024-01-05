import './App.css';

/*component import */

import ActiveBlog from './components/activeBlog/ActiveBlog';
import Navbar from './components/navbar/Navbar';
import Ads from './components/ads/Ads'
import LatestPosts from './components/latestPosts/LatestPosts';
import ViewAllBtn from './components/viewAllBtn/ViewAllBtn';
import { Footer } from './components/footer/Footer';

/*component import */
function App() {
  return (
    <div className="App">
        <Navbar/>
        <ActiveBlog/>
        <Ads />
        <LatestPosts/>
        <ViewAllBtn/>
        <Ads />
        <Footer/>
    </div>
  );
}

export default App;

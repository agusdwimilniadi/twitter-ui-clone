import MainContent from './components/molecules/MainContent';
import Sidebar from './components/molecules/Sidebar';
import TrendingBar from './components/molecules/TrendingBar';

export default function App() {
  return (
    <div className="grid grid-cols-12 hide-scroll text-3xl max-h-screen overflow-y-scroll text-white">
      <Sidebar />
      <MainContent />
      <TrendingBar />
    </div>
  );
}
354;

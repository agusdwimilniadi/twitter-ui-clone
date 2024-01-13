import Sidebar from './components/molecules/Sidebar';
import TrendingBar from './components/molecules/TrendingBar';

export default function App() {
  return (
    <div className="grid grid-cols-12 text-3xl text-white">
      <Sidebar />
      <div className="bg-black col-span-5">Kotak 2</div>
      <TrendingBar />
    </div>
  );
}
354;

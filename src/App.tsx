import Sidebar from './components/molecules/Sidebar';

export default function App() {
  return (
    <div className="grid grid-cols-4 text-3xl text-white">
      <Sidebar />
      {/* <div className="bg-green-500 col-span-2">Kotak 2</div>
      <div className="bg-red-500">Kotak 3</div> */}
    </div>
  );
}

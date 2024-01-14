import NavMain from '../NavTopMain';

const MainContent = () => {
  return (
    <div className="bg-black col-span-5 hide-scroll  h-screen overflow-y-scroll">
      <div className="h-[300vh]">
        <div>
          <NavMain />
        </div>
      </div>
    </div>
  );
};

export default MainContent;

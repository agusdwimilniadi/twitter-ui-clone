const NavbarTab = ({
  isActive,
  label,
}: {
  isActive?: boolean;
  label: string;
}) => {
  return (
    <div className="hover:bg-white/10 w-full h-full text-center pt-4 cursor-pointer">
      <div className="flex flex-col">
        {isActive ? (
          <div className="w-fit mx-auto font-semibold">
            {label}
            <div className="h-1 w-full mt-3 rounded-full  bg-twitter"></div>
          </div>
        ) : (
          <div className="w-fit mx-auto text-white/50">
            {label}
            <div className="h-1 w-full mt-3 rounded-full  bg-transparent"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarTab;

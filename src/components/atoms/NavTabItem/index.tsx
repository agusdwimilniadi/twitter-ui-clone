const NavTabItem = ({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}) => {
  return (
    <>
      {isActive ? (
        <button
          onClick={onClick}
          className="text-[15px]  transition-all hover:bg-white/20 font-semibold basis-full py-1 text-white"
        >
          {label}
          <div className="w-[40%] mx-auto  h-1 bg-twitter"></div>
        </button>
      ) : (
        <button
          onClick={onClick}
          className="text-[15px]  transition-all hover:bg-white/20 font-semibold text-white/50 basis-full py-1"
        >
          {label}
          <div className="w-[40%] mx-auto  h-1 bg-transparent"></div>
        </button>
      )}
    </>
  );
};

export default NavTabItem;

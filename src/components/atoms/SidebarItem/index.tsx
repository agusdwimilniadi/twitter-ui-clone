const SidebarItem = ({ icon, label }: { icon: JSX.Element; label: string }) => {
  return (
    <a href="#" className="ms-1 block">
      <div className="flex items-center gap-3 transition-all hover:bg-white/10 w-fit py-2 ps-3 pe-10 rounded-full">
        {icon}
        <p className="text-[16px]   font-semibold">{label}</p>
      </div>
    </a>
  );
};

export default SidebarItem;

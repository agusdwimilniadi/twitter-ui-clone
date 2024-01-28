import { NavLink } from 'react-router-dom';

const SidebarItem = ({
  icon,
  label,
  to,
}: {
  icon: JSX.Element;
  label: string;
  to: string;
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? 'ms-1 flex items-center gap-3 transition-all bg-white/10 w-fit py-2 ps-3 pe-10 rounded-full'
          : 'ms-1 flex items-center gap-3 transition-all hover:bg-white/10 w-fit py-2 ps-3 pe-10 rounded-full'
      }
    >
      {icon}
      <p className="text-[16px]   font-semibold">{label}</p>
    </NavLink>
  );
};

export default SidebarItem;

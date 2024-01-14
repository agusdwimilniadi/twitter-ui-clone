import { ButtonHTMLAttributes } from 'react';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: 'primary' | 'secondary';
}
const Button = ({ variant, label, ...props }: IButton) => {
  return (
    <button
      {...props}
      className={` px-5 py-2 rounded-full text-base font-bold transition-all ${
        variant !== 'secondary'
          ? 'bg-twitter hover:bg-twitter/90'
          : 'bg-white text-black hover:bg-white/80'
      } `}
    >
      {label}
    </button>
  );
};

export default Button;

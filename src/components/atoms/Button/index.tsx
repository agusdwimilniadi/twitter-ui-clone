import { ButtonHTMLAttributes } from 'react';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
}
const Button = ({ variant, label, ...props }: IButton) => {
  return variant === 'tertiary' ? (
    <button
      {...props}
      className={`px-4 py-1 font-semibold text-base border border-white/30 rounded-full ${props.className}`}
    >
      {label}
    </button>
  ) : (
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

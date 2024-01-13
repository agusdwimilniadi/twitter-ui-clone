import { ButtonHTMLAttributes } from 'react';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}
const Button = ({ label, ...props }: IButton) => {
  return (
    <button
      {...props}
      className="bg-twitter mt-3 px-5 py-2 rounded-full text-base font-bold hover:bg-twitter/90"
    >
      {label}
    </button>
  );
};

export default Button;

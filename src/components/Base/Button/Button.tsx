import React from "react";

interface IButton {
  bgColor: string;
  text: string;
  color: string;
  disabled: boolean;
  onClick: () => void;
}

export const Button: React.FC<IButton> = ({ color, disabled, bgColor, onClick, text }) => {
  return (
    <div>
      <button className="btn" disabled={disabled} style={{ backgroundColor: `${bgColor}`, color: `${color}` }} onClick={onClick} />
      {text}
    </div>
  );
};

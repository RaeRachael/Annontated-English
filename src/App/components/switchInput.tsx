import React from "react";

interface ITestProps {
  label: string;
  checked: boolean;
  onChange: any;
}

interface ITestState {}

const SwitchInput = ({ label, checked, onChange }: ITestProps) => (
  <div>
    <label>{label}</label>
    <input
      type="checkbox"
      className="toggle-switch-checkbox"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
    />
  </div>
);

export default SwitchInput;

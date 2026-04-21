import './Input.css';

export default function Input({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  disabled = false,
  error = false,
  label,
  helperText,
  fullWidth = false,
  className = '',
  ...props
}) {
  return (
    <div className={`input-wrapper ${fullWidth ? 'input-full' : ''}`}>
      {label && <label className="input-label">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`input-field ${error ? 'input-error' : ''} ${className}`}
        {...props}
      />
      {helperText && <span className={`input-helper ${error ? 'input-helper-error' : ''}`}>{helperText}</span>}
    </div>
  );
}

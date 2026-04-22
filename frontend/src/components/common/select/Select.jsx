import './Select.css';

export default function Select({
  label,
  options = [],
  value,
  onChange,
  disabled = false,
  error = false,
  helperText,
  fullWidth = false,
  placeholder = 'Selecione uma opção',
  className = '',
  ...props
}) {
  return (
    <div className={`select-wrapper ${fullWidth ? 'select-full' : ''}`}>
      {label && <label className="select-label">{label}</label>}
      <select
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`select-field ${error ? 'select-error' : ''} ${className}`}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {helperText && <span className={`select-helper ${error ? 'select-helper-error' : ''}`}>{helperText}</span>}
    </div>
  );
}

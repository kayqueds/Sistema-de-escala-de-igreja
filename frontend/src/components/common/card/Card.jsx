import './Card.css';

export default function Card({
  children,
  className = '',
  clickable = false,
  onClick,
  ...props
}) {
  return (
    <div
      className={`card ${clickable ? 'card-clickable' : ''} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
}

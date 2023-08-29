import { Link } from 'react-router-dom';
import style from './style.module.css';

type Props = {
  text: string
  goto?: string
  onClick?: () => void
  btnClass?: string
  primary?: boolean
  secondary?: boolean
}

function Button(props: Props) {
  const { text, goto, onClick, btnClass, primary, secondary } = props

  const currPath = window.location.search
  return (
    <Link onClick={onClick} to={goto ? goto : currPath} className={`${style.main} ${btnClass} ${primary && style.primary} ${secondary && style.secondary}`}>
      {text}
    </Link>
  );
}

export default Button;

import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({ onBtnClick }) => {
  return (
    <button className={s.Button} type="button" onClick={onBtnClick}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onBtnClick: PropTypes.func.isRequired,
};

export default Button;

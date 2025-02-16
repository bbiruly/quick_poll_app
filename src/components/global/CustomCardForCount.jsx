import PropTypes from 'prop-types';

const CustomCardForCount = ({
  title,
  count,
  icon,
  backgroundColor,
  textColor,
  iconColor,
  className,
}) => {
  return (
    <div className={`p-4 rounded-lg shadow-md ${backgroundColor} ${className}`}>
      <div className="flex items-center">
        <div className={`text-3xl ${iconColor} mr-4`}>
          {icon}
        </div>
        <div>
          <h2 className={`text-xl font-bold ${textColor}`}>{title}</h2>
          <p className={`text-2xl ${textColor}`}>{count}</p>
        </div>
      </div>
    </div>
  );
};

CustomCardForCount.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.element.isRequired,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  iconColor: PropTypes.string,
  className: PropTypes.string,
};

CustomCardForCount.defaultProps = {
  backgroundColor: 'bg-white',
  textColor: 'text-black',
  iconColor: 'text-gray-500',
  className: '',
};

export default CustomCardForCount;
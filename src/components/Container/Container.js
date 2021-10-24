// export default function Container({ children }) {
//     return <div>{ children}</div>
//   }
import PropTypes from 'prop-types';
import styles from './Container.module.css';
const Container = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

Container.defaultProps = {
  children: [],
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
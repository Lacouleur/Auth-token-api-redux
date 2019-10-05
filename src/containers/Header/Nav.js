// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Nav from 'src/components/Header/Nav';

// Action Creators

/* === State (données) === */
const mapStateToProps = (state) => {

  return {
    logged: state.user.logged,
  };
};

/* === Actions === */
const mapDispatchToProps = {};

// Container
const NavContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Nav);

// == Export
export default NavContainer;
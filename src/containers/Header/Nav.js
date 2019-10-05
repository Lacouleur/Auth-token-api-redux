// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Nav from 'src/components/Header/Nav';

// Action Creators

/* === State (données) === */
const mapStateToProps = (state) => {
  // attention le state a changé de form depuis l'utilisation de combineReducers
  // ici chacun des sous-states initiaux est englobé dans un objet du nom donné au reducer à l'execution de combineReducers
  // console.log(state);
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

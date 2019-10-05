// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Page from 'src/components/Page';

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
const PageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);

// == Export
export default PageContainer;

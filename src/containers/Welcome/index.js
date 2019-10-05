// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Welcome from 'src/components/Welcome';

// Action Creators

/* === State (données) === */
const mapStateToProps = (state) => ({
  avatar: state.user.avatar,
  name: state.user.username,
});

/* === Actions === */
const mapDispatchToProps = {};

// Container
const WelcomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Welcome);

// == Export
export default WelcomeContainer;

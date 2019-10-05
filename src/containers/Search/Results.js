// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Results from 'src/components/Search/Results';

// Action Creators

/* === State (données) === */
const mapStateToProps = (state) => ({
  repos: state.repos.repos,
});

/* === Actions === */
const mapDispatchToProps = {};

// Container
const ResultsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Results);

// == Export
export default ResultsContainer;

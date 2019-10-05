// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Repo from 'src/components/Search/Repo';

// Action Creators & Selectors
import { addFav, isFav } from 'src/store/reducer/repos';

/* === State (données) === */
const mapStateToProps = (state, ownProps) => ({
  isFav: isFav(state.repos.favoris, ownProps.id),
});

/* === Actions === */
const mapDispatchToProps = (dispatch, ownProps) => ({
  addFav: () => {
    const action = addFav(ownProps.id);
    dispatch(action);
  },
});

// Container
const RepoContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Repo);

// == Export
export default RepoContainer;

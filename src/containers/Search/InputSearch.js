// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import InputSearch from 'src/components/Search/InputSearch'

// Action Creators & Selectors
import { changeValue, searchRepos } from 'src/store/reducer/InputSearch';
// token : 63535622ff913a1c37312859b1be50666de3008e
/* === State (données) === */
const mapStateToProps = (state) => ({
  inputValue: state.InputSearch.inputValue,
  loading: state.InputSearch.loading
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({

    handleSubmit: (input) => {
        const action =  searchRepos(input);
        dispatch(action);
      },

    handleInput: (value) => {
        const action = changeValue(value);
        dispatch(action);
      },
});

// Container
const InputSearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InputSearch);

// == Export
export default InputSearchContainer;

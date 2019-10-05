// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Form from 'src/components/Form';

// Action Creators
import { changeInput, connectUser } from 'src/store/reducer/form';

/* === State (données) === */
const mapStateToProps = (state) => ({
  tokenValue: state.form.tokenInput,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  changeValue: (value) => {
    const action = changeInput(value);
    dispatch(action);
  },
  submitToken: () => {
    const action = connectUser();
    dispatch(action);
  },
});

// Container
const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);

// == Export
export default FormContainer;

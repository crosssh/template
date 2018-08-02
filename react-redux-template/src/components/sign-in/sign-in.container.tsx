import { connect } from 'react-redux';
import { IState } from '../../reducers';
import { SignInComponent } from './sign-in.component';
import { updateUsername, updatePassword, updateError } from '../../actions/sign-in/sign-in.actions';

const mapStateToProps = (state: IState) => (state.signIn);

export const mapDispatchToProps = {
  updateError,
  updatePassword,
  updateUsername,
};

export const SignInContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInComponent);

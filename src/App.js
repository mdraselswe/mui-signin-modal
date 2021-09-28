import './App.css';
import PrimaryButton from './components/buttons/PrimaryButton';
import PrimaryDialog from './components/dialogs/PrimaryDialog';
import { usePrimaryDialog } from './components/dialogs/usePrimaryDialog';
import EmailSignIn from './pages/SignIn';
function App() {
  const { openPrimary: openSignIn, togglePrimary: toggleSignIn } =
    usePrimaryDialog();

  const { openPrimary: openSignIn2, togglePrimary: toggleSignIn2 } =
    usePrimaryDialog();

  const { openPrimary: openSignIn3, togglePrimary: toggleSignIn3 } =
    usePrimaryDialog();

  return (
    <div>
      <div style={{ margin: '2rem' }}>
        <PrimaryButton onClick={toggleSignIn}>Sign In</PrimaryButton>
      </div>

      <div style={{ margin: '2rem' }}>
        <PrimaryButton onClick={toggleSignIn2}>Sign In 2</PrimaryButton>
      </div>

      <div style={{ margin: '2rem' }}>
        <PrimaryButton onClick={toggleSignIn3}>Sign In Error</PrimaryButton>
      </div>

      <PrimaryDialog
        openPrimary={openSignIn}
        togglePrimary={toggleSignIn}
        scrollType='body'
        // hideCrossBtn
      >
        <EmailSignIn />
      </PrimaryDialog>

      <PrimaryDialog
        openPrimary={openSignIn2}
        togglePrimary={toggleSignIn2}
        scrollType='body'
        // hideCrossBtn
      >
        <EmailSignIn back />
      </PrimaryDialog>

      <PrimaryDialog
        openPrimary={openSignIn3}
        togglePrimary={toggleSignIn3}
        scrollType='body'
        // hideCrossBtn
      >
        <EmailSignIn error />
      </PrimaryDialog>
    </div>
  );
}

export default App;

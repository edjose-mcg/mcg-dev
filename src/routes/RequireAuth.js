import { Navigate } from 'react-router-dom';
import { useMsal } from '@azure/msal-react';

const RequireAuth = ({ children }) => {
 const { accounts } = useMsal();

  if (!accounts.length) {
    // Redirect to login page or initiate login process
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default RequireAuth
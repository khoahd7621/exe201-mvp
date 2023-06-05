import { fetchUserProfile } from "./redux/slices/profileSlice";
import { store } from "./redux/store";

const App = ({ children }: React.PropsWithChildren) => {
  store.dispatch(fetchUserProfile());

  return <>{children}</>;
};

export default App;

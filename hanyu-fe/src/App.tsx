import { useState } from "react";

import { CircularProgress } from "@mui/material";

import { useAppDispatch } from "./redux/hooks";
import { fetchUserProfile } from "./redux/slices/profileSlice";

const App = ({ children }: React.PropsWithChildren) => {
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useAppDispatch();

  dispatch(fetchUserProfile()).finally(() => setLoading(false));

  if (loading) {
    return <CircularProgress />;
  }

  return <>{children}</>;
};

export default App;

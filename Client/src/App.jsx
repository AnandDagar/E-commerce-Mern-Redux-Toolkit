import { Routes, Route } from "react-router-dom";
import AuthLayout from "./components/ui/auth/layout";

const App = () => {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route path="/auth" element={<AuthLayout />} />
      </Routes>
    </div>
  );
};

export default App;

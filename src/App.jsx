import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("./pages/Dashboard"));

export default function App() {
  return (
    <Suspense fallback={<h2>Loading Dashboard...</h2>}>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Suspense>
  );
}

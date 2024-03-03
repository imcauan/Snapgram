import AuthLayout from "./_auth/AuthLayout";
import SignInForm from "./_auth/forms/SignInForm";
import SignupForm from "./_auth/forms/SignUpForm";
import RootLayout from "./_root/RootLayout";
import { Home } from "./_root/pages";
import "./globals.css";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster"

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Route>

        {/* private routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <Toaster />
    </main>
  );
};

export default App;

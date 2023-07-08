import desktopBg from "@/assets/images/bg-sidebar-desktop.svg";
import { Sidebar } from "@/components/Sidebar";
import { useState } from "react";
import { Input } from "./components/Input";

function App() {
  const [activeStep, setActiveStep] = useState(1);
  const [error, setError] = useState({
    name: "",
    email: "",
    phone: "",
  });

  console.log(error);

  const handleActiveStep = (step: number) => {
    setActiveStep(step);
  };

  const verifyInputName = (name: string) => {
    console.log(name.length);
    if (name.length < 3) {
      return setError((prev) => ({
        ...prev,
        name: "Name must be 3 characters",
      }));
    }
    return setError((prev) => ({
      ...prev,
      name: "",
    }));
  };
  const verifyInputEmail = (email: string) => {
    if (email.length < 3) {
      return setError((prev) => ({
        ...prev,
        email: "Email must be 3 characters",
      }));
    }
    return "";
  };
  const verifyInputPhone = (phone: string) => {
    if (phone.length < 3) {
      return setError((prev) => ({
        ...prev,
        phone: "Phone must be 3 characters",
      }));
    }
    return "";
  };

  return (
    <main className="flex min-h-screen items-center justify-center p-48 bg-magnolia">
      <div className="flex bg-white rounded-2xl p-4 ">
        <Sidebar activeStep={activeStep} />
        <div className="flex flex-col gap-4 mt-12 mx-24">
          <h1 className="text-4xl font-bold text-dark-blue">Personal info</h1>
          <p className="text-cool-gray">
            Please provide your name, email address, and phone number.
          </p>

          <div className="flex flex-col gap-4 mt-6">
            <Input
              label="Name"
              onChange={(e) => verifyInputName(e.target.value)}
              placeholder="Input your name"
              type="text"
              error={error.name.length > 0 ? error.name : ""}
            />
            <Input
              label="Email"
              onChange={(e) => verifyInputEmail(e.target.value)}
              placeholder="Input your email"
              type="email"
              error={error.email.length > 0 ? error.email : ""}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;

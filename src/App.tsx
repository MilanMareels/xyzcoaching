import { RouterProvider } from "react-router-dom";
import { createRouter } from "./routes/routes";

export default function App() {
  const router = createRouter();

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

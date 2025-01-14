import KanbanBoard from "./components/KanbanBoard";
import Rootlayout from "./Rootlayout";

import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";


function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Rootlayout />,
      children: [
        {
          path: "/",
          element: <KanbanBoard/>,
        },
        
        
      ],
    },
  ]);

  return (
    <>
    
      <RouterProvider router={router} />
    </>
  );
}
export default App;

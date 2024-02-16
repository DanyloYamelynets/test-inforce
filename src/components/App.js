import { Navigate, Route, Routes } from "react-router-dom";
import { ProductsPage } from "../pages/ProductsPage";
import Loader from "./Loader/Loader";
import { Suspense } from "react";
import { ContainerApp } from "./AppStyled";
import { AddBtn } from "./AddBtn/AddBtn";

function App() {
  return (
    <div>
      <ContainerApp>
        <h1>Your list of products</h1>
        <AddBtn />
      </ContainerApp>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;

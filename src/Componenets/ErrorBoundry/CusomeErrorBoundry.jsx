import React from "react";
import { ErrorBoundary } from "react-error-boundary";

function CusomeErrorBoundryUI({ error, resetErrorounndry }) {
  return (
    <div className="h-[100vh] flex justify-center items-center px-6">
      {" "}
      <div role="alert" className="alert alert-error">
        <p>Something went wrong:</p>
        <div style={{ color: "red" }}>{error?.message}</div>
        <button onClick={resetErrorounndry}>Try Again</button>
      </div>
    </div>
  );
}

export default function CusomeErrorBoundry({ children }) {
  return (
    <ErrorBoundary
      FallbackComponent={CusomeErrorBoundryUI}
      onReset={() => window.location.reload()}
    >
      {children}
    </ErrorBoundary>
  );
}

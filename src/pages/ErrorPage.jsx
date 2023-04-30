import { BlButton } from "@trendyol/baklava/dist/baklava-react";
import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex h-screens flex-col items-center justify-center gap-y-2">
      <h2 className="text-bold text-center text-8xl">404</h2>
      <h3 className="text-center text-xl">Aradığın içeriğe şu an ulaşılamıyor.</h3>
      <Link to={"/"}>
        <BlButton variant="secondary" kind="info" size="medium" className="mt-4">
          Alışverişe Devam Et
        </BlButton>
      </Link>
    </div>
  );
};

export default ErrorPage;

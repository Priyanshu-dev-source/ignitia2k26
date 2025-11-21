"use client"
import { useState, useEffect } from "react";
import LoadingAnimation from "@/components/loadingAnimation"
import HomePage from "@/components/homePage"

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 7500);

    return () => clearTimeout(timer);
  }, []);

  return <>{isLoading ? <LoadingAnimation /> : <HomePage />}</>;
};

export default Index;

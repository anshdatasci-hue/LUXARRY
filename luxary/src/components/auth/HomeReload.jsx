"use client";

import { useEffect } from "react";

export default function HomeReload() {
  useEffect(() => {
    if (sessionStorage.getItem("reload-home")) {
      sessionStorage.removeItem("reload-home");

      // Wait for the page to finish hydrating
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }
  }, []);

  return null;
}
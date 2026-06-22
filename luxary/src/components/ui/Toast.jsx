"use client";

import { useEffect } from "react";

export default function Toast({
  message,
  show,
  onClose,
}) {
  useEffect(() => {
    if (!show) return;

    const timer = setTimeout(() => {
      onClose();
    }, 2500);

    return () => clearTimeout(timer);
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[100] rounded-full border bg-white px-6 py-3 shadow-lg">
      <p className="text-sm tracking-wide">
        {message}
      </p>
    </div>
  );
}
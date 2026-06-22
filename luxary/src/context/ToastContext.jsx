"use client";

import { createContext, useContext, useState } from "react";
import Toast from "@/components/ui/Toast";

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  const triggerToast = (text) => {
    setMessage(text);
    setShow(true);
  };

  return (
    <ToastContext.Provider
      value={{ triggerToast }}
    >
      {children}

      <Toast
        message={message}
        show={show}
        onClose={() => setShow(false)}
      />
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
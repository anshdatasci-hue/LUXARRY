"use client";

export default function ReloadButton() {
  return (
    <button
      type="submit"
      onClick={() => {
        sessionStorage.setItem("reload-home", "true");
      }}
      className="w-full rounded-sm bg-black py-3 text-white"
    >
      Sign In
    </button>
  );
}
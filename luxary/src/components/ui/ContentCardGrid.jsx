import clsx from "clsx";

export default function ContentCardGrid({ children, columns = 4, className }) {
  const columnClasses = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={clsx("grid gap-6 lg:gap-8", columnClasses[columns], className)}>
      {children}
    </div>
  );
}

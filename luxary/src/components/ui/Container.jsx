import clsx from "clsx";

export default function Container({ children, className, as: Tag = "div" }) {
  return (
    <Tag className={clsx("mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12", className)}>
      {children}
    </Tag>
  );
}

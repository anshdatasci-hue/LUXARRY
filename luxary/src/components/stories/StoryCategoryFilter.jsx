export default function StoryCategoryFilter({
  categories,
  activeCategory,
  onChange,
}) {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {categories.map((category) => {
        const active = activeCategory === category;

        return (
          <button
            key={category}
            onClick={() => onChange(category)}
            className={`
              px-5 py-2 text-sm tracking-wide transition-all
              border rounded-full
              ${
                active
                  ? "bg-black text-white border-black"
                  : "bg-white text-neutral-700 border-neutral-300 hover:border-neutral-500"
              }
            `}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
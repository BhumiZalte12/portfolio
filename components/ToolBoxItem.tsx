import { twMerge } from "tailwind-merge";

export interface ToolboxItem {
  title: string;
  icon: JSX.Element;
}

export const ToolboxItems = ({
  items,
  className,
}: {
  items: ToolboxItem[];
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "grid grid-cols-3 gap-6 justify-items-center",
        className
      )}
    >
      {items.map((item) => (
        <div
          key={item.title}
          className="flex flex-col items-center gap-2 py-4 outline outline-2 outline-white/10 rounded-lg"
        >
          <div className="w-16 h-16">{item.icon}</div> {/* Icon size increased */}
          <span className="text-sm font-medium">{item.title}</span>
        </div>
      ))}
    </div>
  );
};

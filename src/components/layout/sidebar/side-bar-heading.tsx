import { useSidebar } from "@/components/ui/sidebar";
import { BookDashed } from "lucide-react";

export default function SideBarHeading({ title }: { title: string }) {
  const { open, isMobile } = useSidebar();
  return (
    <div className=" flex items-center gap-3 px-1 py-1">
      <BookDashed color="green" />
      {(open || isMobile) && (
        <h3 className=" text-lg font-bold text-nowrap overflow-hidden text-green-500">
          {title}
        </h3>
      )}
    </div>
  );
}

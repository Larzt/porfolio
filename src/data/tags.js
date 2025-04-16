import NextJS from "@/components/icons/Nextjs.astro";
import Tailwind from "@/components/icons/Tailwind.astro";
import Unity from "@/components/icons/Unity.astro";
import Blender from "@/components/icons/Blender.astro";
import CSharp from "@/components/icons/CSharp.astro";

export const TAGS = {
  NEXT: {
    name: "Next.js",
    class: "bg-black text-white",
    icon: NextJS,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "bg-[#003159] text-white",
    icon: Tailwind,
  },
  UNITY: {
    name: "Unity",
    class: "bg-black text-white",
    icon: Unity,
  },

  BLENDER: {
    name: "Blender",
    class: "bg-[#5c2e14] text-white",
    icon: Blender,
  },

  CSHARP: {
    name: "CSharp",
    class: "bg-[#261345] text-white",
    icon: CSharp,
  },
};

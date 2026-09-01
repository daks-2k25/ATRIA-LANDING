import Image from "next/image";
import { cn } from "@/lib/utils";

export function MockupFrame({
  src,
  alt,
  className,
  priority = false,
  glow = true,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  glow?: boolean;
}) {
  return (
    <div className={cn("relative", className)}>
      {glow && (
        <div
          aria-hidden
          className="absolute -inset-6 -z-10 rounded-[2rem] bg-amber/25 blur-3xl opacity-60"
        />
      )}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-3 shadow-soft-lg ring-1 ring-black/5">
        <div className="flex items-center gap-1.5 border-b border-white/10 bg-ink-3 px-4 py-3">
          <span className="size-2.5 rounded-full bg-white/20" />
          <span className="size-2.5 rounded-full bg-white/20" />
          <span className="size-2.5 rounded-full bg-white/20" />
        </div>
        <Image
          src={src}
          alt={alt}
          width={1920}
          height={1120}
          priority={priority}
          className="h-auto w-full"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1100px"
        />
      </div>
    </div>
  );
}

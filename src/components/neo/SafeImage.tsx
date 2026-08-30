import { useState } from "react";
import type { ImgHTMLAttributes } from "react";

/** 加载失败时回退为 alt 文本占位块（继承原 className 的尺寸与背景），避免破图图标 */
export function SafeImage({ alt = "", className, ...rest }: ImgHTMLAttributes<HTMLImageElement>) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div role="img" aria-label={alt} className={className}>
        <span className="flex h-full w-full items-center justify-center p-2 text-center font-black text-sm uppercase tracking-widest">
          {alt}
        </span>
      </div>
    );
  }
  return <img alt={alt} className={className} onError={() => setFailed(true)} {...rest} />;
}

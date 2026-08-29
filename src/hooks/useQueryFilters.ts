import { useCallback, useMemo } from "react";
import { useSearchParams } from "react-router";

/** URL query 中的多选数组参数（逗号分隔），切换写回 URL；返回值经 memo 稳定，可直接作 useMemo 依赖 */
export function useArrayParam<T extends string>(key: string): [T[], (value: T) => void, () => void] {
  const [params, setParams] = useSearchParams();
  const raw = params.get(key);
  const values = useMemo(() => (raw?.split(",").filter(Boolean) ?? []) as T[], [raw]);
  const toggle = useCallback(
    (value: T) => {
      setParams((prev) => {
        const cur = prev.get(key)?.split(",").filter(Boolean) ?? [];
        const next = cur.includes(value) ? cur.filter((v) => v !== value) : [...cur, value];
        const p = new URLSearchParams(prev);
        if (next.length) p.set(key, next.join(","));
        else p.delete(key);
        return p;
      });
    },
    [key, setParams]
  );
  const clear = useCallback(
    () =>
      setParams((prev) => {
        const p = new URLSearchParams(prev);
        p.delete(key);
        return p;
      }),
    [key, setParams]
  );
  return [values, toggle, clear];
}

export function useStringParam(key: string, fallback = ""): [string, (v: string) => void] {
  const [params, setParams] = useSearchParams();
  const value = params.get(key) ?? fallback;
  const set = useCallback(
    (v: string) =>
      setParams((prev) => {
        const p = new URLSearchParams(prev);
        if (v) p.set(key, v);
        else p.delete(key);
        return p;
      }),
    [key, setParams]
  );
  return [value, set];
}

/** 一次性删除多个 query 参数（连续多次 setParams 会互相覆盖，必须合并为单次调用） */
export function useClearParams(): (keys: string[]) => void {
  const [, setParams] = useSearchParams();
  return useCallback(
    (keys: string[]) =>
      setParams((prev) => {
        const p = new URLSearchParams(prev);
        keys.forEach((k) => p.delete(k));
        return p;
      }),
    [setParams]
  );
}

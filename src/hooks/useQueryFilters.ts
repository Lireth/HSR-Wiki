import { useSearchParams } from "react-router";

/** URL query 中的多选数组参数（逗号分隔），切换写回 URL */
export function useArrayParam<T extends string>(key: string): [T[], (value: T) => void, () => void] {
  const [params, setParams] = useSearchParams();
  const values = (params.get(key)?.split(",").filter(Boolean) ?? []) as T[];
  const toggle = (value: T) => {
    const next = values.includes(value) ? values.filter((v) => v !== value) : [...values, value];
    setParams((prev) => {
      const p = new URLSearchParams(prev);
      if (next.length) p.set(key, next.join(","));
      else p.delete(key);
      return p;
    });
  };
  const clear = () =>
    setParams((prev) => {
      const p = new URLSearchParams(prev);
      p.delete(key);
      return p;
    });
  return [values, toggle, clear];
}

export function useStringParam(key: string, fallback = ""): [string, (v: string) => void] {
  const [params, setParams] = useSearchParams();
  const value = params.get(key) ?? fallback;
  const set = (v: string) =>
    setParams((prev) => {
      const p = new URLSearchParams(prev);
      if (v) p.set(key, v);
      else p.delete(key);
      return p;
    });
  return [value, set];
}

/** 一次性删除多个 query 参数（连续多次 setParams 会互相覆盖，必须合并为单次调用） */
export function useClearParams(): (keys: string[]) => void {
  const [, setParams] = useSearchParams();
  return (keys) =>
    setParams((prev) => {
      const p = new URLSearchParams(prev);
      keys.forEach((k) => p.delete(k));
      return p;
    });
}

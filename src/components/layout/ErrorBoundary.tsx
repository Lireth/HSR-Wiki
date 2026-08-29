import { Component } from "react";
import type { ErrorInfo, ReactNode } from "react";
import { Link } from "react-router";
import { NeoButton } from "../neo";

interface Props {
  children: ReactNode;
}

interface State {
  error: Error | null;
}

/** 渲染异常兜底：避免整页白屏，提供重试与返回首页 */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("[ErrorBoundary]", error, info.componentStack);
  }

  private reset = () => this.setState({ error: null });

  render() {
    if (!this.state.error) return this.props.children;
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-neo-bg px-4 py-20 text-center">
        <p className="text-outline -rotate-2 font-black text-8xl tracking-tighter">出错啦</p>
        <p className="max-w-lg border-4 border-black bg-white p-4 font-bold shadow-neo-md">
          页面渲染时发生异常：{this.state.error.message}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <NeoButton variant="primary" onClick={this.reset}>重试</NeoButton>
          <Link to="/" onClick={this.reset}><NeoButton variant="outline">返回首页</NeoButton></Link>
        </div>
      </div>
    );
  }
}

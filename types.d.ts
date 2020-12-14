import { WebpackPluginInstance, Compiler } from 'webpack'

export interface VConsolePluginOptions {
  filter: any[],
  /** 插件开关，默认“关” */
  enable: false,
  /** 在 PC 环境禁用 */
  disableInPC: false,
}


export default class VConsolePlugin implements WebpackPluginInstance {
  constructor(opts?: VConsolePluginOptions)

  apply: (compiler: Compiler) => void;
}

declare module 'vconsole-webpack-plugin' {
  export default VConsolePlugin
}


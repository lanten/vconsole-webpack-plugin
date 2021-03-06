import { WebpackPluginInstance, Compiler } from 'webpack'

interface VConsolePluginOptions {
  filter?: any[],
  /** 插件开关，默认“关” */
  enable?: boolean,
  /** 在 PC 环境禁用 */
  disableInPC?: boolean,
}


declare class VConsolePlugin implements WebpackPluginInstance {
  constructor(opts?: VConsolePluginOptions)

  apply: (compiler: Compiler) => void;
}


export = VConsolePlugin

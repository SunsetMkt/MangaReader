/**
 * @description enum of any async status
 * @enum {number}
 */
export enum AsyncStatus {
  Default,
  Pending,
  Fulfilled,
  Rejected,
}

/**
 * @description enum of manga serial status
 * @enum {number}
 */
export enum MangaStatus {
  Unknown,
  Serial,
  End,
}

/**
 * @description enum of nodejs env
 * @enum {number}
 */
export enum env {
  DEV = 'development',
  PROD = 'production',
}

/**
 * @description enum mode of Reader component
 * @enum {number}
 */
export enum ReaderMode {
  Horizontal = 'horizontal',
  Vertical = 'vertical',
}

export enum ReaderDirection {
  Left = 'left',
  Right = 'right',
}

export enum ErrorMessage {
  Unknown = '未知错误~',
  NoMore = '没有更多~',
  PluginMissing = '缺少插件~',
  Timeout = '超时~',
  RequestTimeout = '请求超时~',
  NoSupport = '插件不支持',
  MissingChapterInfo = '缺少章节信息~',
  SyncFail = '同步数据失败～',
  WrongResponse = '响应失败: ',
  WrongDataType = '错误的数据格式',
}

export enum Orientation {
  Portrait = 'portrait',
  Landscape = 'landscape',
}

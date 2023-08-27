export {}

declare global {
  interface Window {
    ReactNativeWebView: any // 👈️ turn off type checking
  }
}

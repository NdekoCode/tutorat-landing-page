export type AlertType = 'error' | 'success' | 'infos' | 'warning'
export type AlertColorMap = {
  [key in AlertType]: string
}

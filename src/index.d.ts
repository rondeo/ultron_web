// interface for api data
export interface result {
  code: number,                 // api return code
  result: any,                  // api object code
  success: boolean,             // api success or not
  message: string               // api message
}
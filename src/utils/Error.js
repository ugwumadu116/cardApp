const parseError = error => {
  let err = ''
  try {
    if (error.response) {
      let error_data = error?.response?.data?.msg

      if (typeof error_data === 'string') {
        err = error_data
      } else {
        for (let key in error_data) {
          err = `${err} ${key} ${error.response.data.msg[key]}\n`
        }
      }
    } else {
      err = error.message || 'Network Error'
    }
    return typeof error === 'string' ? error : err || 'Network Error'
  } catch (error) {
    // console.log(error);
    return error.message
  }
}

export {parseError}

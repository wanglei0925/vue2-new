/**
 * Created by C on 2017/9/13.
 */
export const formatdate = (time) => {
  if (time) {
    var date = new Date()
    date.setTime(time)
    var y = date.getFullYear()
    var m = date.getMonth() + 1
    var d = date.getDate()
    var h = date.getHours()
    var mm = date.getMinutes()
    var s = date.getSeconds()
    return y + '-' + m + '-' + d + '-' + h + '-' + mm + '-' + s
  }
}

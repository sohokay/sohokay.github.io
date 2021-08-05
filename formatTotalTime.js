    function formatTotalTime(time: number): string {
      const d = Math.floor(time / (60 * 60 * 24))
      const h = Math.floor((time / (60 * 60)) % 24)
      const m = Math.floor((time / 60) % 60)
      const s = Math.floor(time % 60)
      let result = ''
      if (s > 0) {
        result = s + "秒"
      } else {
        result = '-'
      }
      if (m > 0) {
        result = m + "分钟" + result
      }
      if (h > 0) {
        result = h + "小时" + result
      }
      if (d > 0) {
        result = d + "天" + result
      }
      return result
    }

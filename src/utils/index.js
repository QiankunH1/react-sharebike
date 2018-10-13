




export function formData(unix){
       function fixedZero(num){
           return num >=10?(''+num):('0'+num)
       }
        let date = new Date(unix);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() 
        var M = fixedZero(date.getMonth()+1)
        var D =fixedZero(date.getDate())
        var h =fixedZero (date.getHours())
        var m = fixedZero(date.getMinutes() )
        var s = fixedZero(date.getSeconds())
        let timeStr = `${Y}-${M}-${D}  ${h}:${m}:${s}` 
        return timeStr  
        
    }


 
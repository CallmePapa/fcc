function makeFriendlyDates(arr) {
    var dateArr = ["", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th",
            "11th", "12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th",
            "21st", "22nd", "23rd", "24th", "25th", "26th", "27th", "28th", "29th", "30th",
            "31st"
        ],
        monthArr = ["", "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ],
        resarr = [];
    //判断是否相差小于一年，true为相差小于一年。
    var caldate = function(startTime, endTime) {
        startTime = startTime.replace(/-/g, "/");
        endTime = endTime.replace(/-/g, "/");
        var newa = new Date(startTime);
        newa.setFullYear(newa.getFullYear() + 1);
        newa = newa.getTime();
        var newb = new Date(endTime).getTime();
        if (newa <= newb) {
            return true;
        } else {
            return false;
        }
    };
    var a = arr[0].replace(/-0?/g, " ").split(" "),
        b = arr[1].replace(/-0?/g, " ").split(" "),
        nowYear = new Date().getFullYear();
    var str1 = monthArr[a[1]] + " " + dateArr[a[2]],
        str2 = dateArr[b[2]];

    var morethanoneyear = caldate(arr[0], arr[1]);

    if (!morethanoneyear) {
        if (a[0] != nowYear){
            //开始日期年份不是当前年份
            str1 = str1 + ", " + a[0];
        }

        if ((a[1] === b[1])&&(a[2] === b[2])) {
            //同年同月同日
            str2 = "";
        } else if(!((a[1] === b[1])&&(parseInt(a[2]) < parseInt(b[2])))){
            str2 = monthArr[b[1]] + " " + str2;
        }

    } else {
        //相差超过一年
        str1 = str1 + ", " + a[0];
        str2 = monthArr[b[1]] + " " + str2 + ", " + b[0];
    }

    if (str2 !== "") {
        resarr.push(str1, str2);
    } else {
        resarr.push(str1);
    }
    return resarr;
}
makeFriendlyDates(["2022-09-05", "2023-09-04"]);

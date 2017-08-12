"use strict";

function checkCashRegister(price,cash,cid) {
    var baseDollarObj={
        "PENNY":1,
        "NICKEL":5,
        "DIME":10,
        "QUARTER":25,
        "ONE":100,
        "FIVE":500,
        "TEN":1000,
        "TWENTY":2000,
        "ONE HUNDRED":10000
    };

    if (price === cash) {
        return "Don't need Charge";
    }
    var needCharge = (cash - price) * 100;
    var cidTotal = 0;
    var changeArr = [];
    for (var i = 0; i < cid.length; i++) {
        cidTotal += cid[i][1] * 100;
    }

    if (needCharge > cidTotal) {
        return 'Insufficient Funds';
    }
    else if (needCharge ===cidTotal) {
        return "Closed";
    }


    var currLast = 0;
    var currMoney = 0;
    var currtotal = 0;

    if (needCharge < cidTotal) {
        for (var j = cid.length - 1; j >= 0; j--) {
            currLast = cid[j][1] * 100;
            currMoney = baseDollarObj[cid[j][0]];

            if (currLast <= 0) {
                continue;
            }

            if (needCharge > currMoney) {
                if (needCharge < currLast) {
                    currtotal = currMoney * Math.floor(needCharge / currMoney);
                } else {
                    currtotal = currLast;
                }
            }
            needCharge -= currtotal;
            changeArr.push([cid[j][0], currtotal / 100]);
        }
    }

    if (needCharge > 0) {
        return "Insufficient Funds";
    } else if (needCharge === 0 && needCharge === cidTotal) {
        return "Closed";
    } else  changeArr;

}

checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);




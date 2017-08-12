
function checkCashRegister(price, cash, cid) {
    var change;
    var base=100;//金额基数
    change=(cash-price)*base; //找零

    //定义一个函数，用来求零钱和。
    var getTotalMoney=function(arr){
        var s=arr.reduce(function (preV, currV, currIndex, array){
            return preV+currV[1];
        },0);
        return base*s;
    };
    var remain = getTotalMoney(cid);

    if(remain < change){//余额不足，没钱找了
        return "Insufficient Funds";
    }

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
    var changeArr=[];
    var currLast=0;// 当前面值所剩余额
    var currMoney=0;//当前金钱面额
    var currtotal=0;//当前零钱可找总额
    for (var i=cid.length-1;i>=0;i--){
        //当前面值剩余金额
        currLast=cid[i][1]*base;
        if (currLast<=0) {
            continue;//当前面值的金额剩余0，跳过
        }
        currMoney=baseDollarObj[cid[i][0]];
        if(change>currMoney){//如果当前金额面值小于应找钱数
            if(change<currLast){
                currtotal=currMoney*Math.floor(change/currMoney);
            }else{
                currtotal=currLast;

            }
            change-=currtotal; //取完之后从应找余额中减去（张数x面值）
            changeArr.push([cid[i][0],currtotal/base]);
        }
    }

    if(change>0){
        //找不开的面值
        return "Insufficient Funds";
    }else if(change===0&&((cash-price)*base==remain)){
        //如果零钱数等于应找数额并且可找出来
        return "Closed";
    }else{
        return changeArr;
    }
}

checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

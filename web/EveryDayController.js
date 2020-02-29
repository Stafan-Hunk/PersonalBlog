let everyDayDao = require("../dao/EveryDayDao");
let timeUtil = require("../util/TimeUtil");
let respUtil = require("../util/RespUtil");
let path = new Map();

function editEveryDay(request, response) {
    request.on("data", function (data) {
        everyDayDao.insertEveryDay(data.toString().trim(), timeUtil.getNow(), function (result) {
            response.writeHead(200);
            response.write(respUtil.writeResult("success", "添加成功", null));
            response.end();
        });
    })
}

path.set("/editEveryDay", editEveryDay);

function queryEveryDay(request, response) {

    everyDayDao.queryEveryDay(function (result) {
        response.writeHead(200);
        response.write(respUtil.writeResult("success", "获取成功", result));
        response.end();
    });

}
path.set("/queryEveryDay", queryEveryDay);
module.exports.path = path;
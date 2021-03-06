const CatchAsync = require("./../utils/CatchAsync");
const User = require("./../models/userModel");
const Operation = require("./../models/operationModel");
const Room = require("./../models/roomModel");
const mongoose = require("mongoose");
const AppError = require("../utils/appError");
exports.staffNumber = CatchAsync(async (req, res, next) => {
  let groupby = {};
  if (req.body.groupby) {
    let groups = req.body.groupby.trim().split(" ");
    for (i of groups) {
      groupby[i] = `$${i}`;
    }
  }

  const data = await User.aggregate([
    {
      $group: {
        _id: groupby,
        Num: { $sum: 1 },
      },
    },
  ]);

  res.status(200).json({
    data,
  });
});
exports.staffWorkingHours = CatchAsync(async (req, res, next) => {
  let match = {
    role: {
      $in: [
        "lead-doctor",
        "doctor-training",
        "doctor-Assistant",
        "lead-nurse",
        "nurse",
      ],
    },
  };
  let start = {};
  if (req.body.start) {
    start["$gte"] = new Date(req.body.start);
  }
  if (req.body.end) {
    start["$lte"] = new Date(req.body.end);
    match["schedule.start"] = start;
  }
  const data = await User.aggregate([
    {
      $match: match,
    },
    {
      $unwind: "$schedule",
    },
    {
      $addFields: {
        totalHours: {
          $divide: [
            { $subtract: ["$schedule.end", "$schedule.start"] },
            3600 * 1000,
          ],
        },
      },
    },
    {
      $group: {
        _id: "$_id",
        Name: { $first: "$name" },
        total: {
          $sum: "$totalHours",
        },
      },
    },
  ]);
  res.status(200).json({
    data,
  });
});

exports.operationEach = CatchAsync(async (req, res, next) => {
  let group = {};
  let groupdate = {};
  let num;
  if (req.query.groupdate) {
    if (req.query.groupdate == "day") {
      groupdate["$dayOfWeek"] = "$rooms.end";
      num = 7;
    } else if (req.query.groupdate == "week") {
      groupdate["$week"] = "$rooms.end";
      num = 52;
    } else if (req.query.groupdate == "month") {
      groupdate["$month"] = "$rooms.end";
      num = 12;
    } else if (req.query.groupdate == "year") {
      groupdate["$year"] = "$rooms.end";
    }
    group[req.query.groupdate] = groupdate;
  }
  let match = {};
  let start = {};
  if (req.body.start) {
    start["$gte"] = new Date(req.query.start);
  }
  if (req.body.end) {
    start["$lte"] = new Date(req.body.end);
    match["rooms.end"] = start;
  }
  if (req.body.field) {
    group[req.body.field] = `$${req.body.field}`;
  }
  const data = await Operation.aggregate([
    {
      $unwind: "$rooms",
    },
    {
      $match: match,
    },
    {
      $group: {
        _id: group,
        number: { $sum: 0.5 },
      },
    },
  ]);
  if (data.length != num) {
    const arr = [...Array(num).keys()];
    newarr = data.map((a) => a._id[`${req.query.groupdate}`]);
    arr.forEach((el) => {
      if (!newarr.includes(el)) {
        index = {};
        index["_id"] = {};
        index._id[`${req.query.groupdate}`] = el;
        index["number"] = 0;
        data.push(index);
      }
    });
  }

  res.status(200).json({
    data,
  });
});
exports.userEach = CatchAsync(async (req, res, next) => {
  if (["ORadmin", "admin"].includes(req.user.role))
    return next(new AppError("you have no operations at all", 400));
  let group = {};
  let groupdate = {};
  if (req.query.groupdate) {
    if (req.query.groupdate == "day") {
      groupdate["$dayOfWeek"] = "$rooms.end";
      num = 7;
    } else if (req.query.groupdate == "week") {
      groupdate["$week"] = "$rooms.end";
      num = 52;
    } else if (req.query.groupdate == "month") {
      groupdate["$month"] = "$rooms.end";
      num = 12;
    } else if (req.query.groupdate == "year") {
      groupdate["$year"] = "$rooms.end";
    }
    group[req.query.groupdate] = groupdate;
  }
  let match = {};
  let start = {};
  if (req.body.start) {
    start["$gte"] = new Date(req.body.start);
  }
  if (req.body.end) {
    start["$lte"] = new Date(req.body.end);
    match["rooms.end"] = start;
  }
  if (req.body.field) {
    group[req.body.field] = `$${req.body.field}`;
  }

  let matchStaff = {};
  if (req.user.role == "lead-doctor")
    matchStaff = {
      $or: [
        { staff: { $in: [mongoose.Types.ObjectId(req.user.id)] } },
        { mainDoctor: mongoose.Types.ObjectId(req.user.id) },
      ],
    };
  else if (["doctor", "nurse", "lead-nurse"].includes(req.user.role))
    matchStaff = {
      staff: { $in: [mongoose.Types.ObjectId(req.user.id)] },
    };
  else if (req.user.role == "patient")
    matchStaff = { patient: mongoose.Types.ObjectId(req.user.id) };
  const data = await Operation.aggregate([
    {
      $unwind: "$rooms",
    },
    {
      $match: match,
    },
    {
      $match: matchStaff,
    },
    {
      $group: {
        _id: group,
        number: { $sum: 0.5 },
      },
    },
  ]);
  if (data.length != num) {
    const arr = [...Array(num).keys()];
    newarr = data.map((a) => a._id[`${req.query.groupdate}`]);
    arr.forEach((el) => {
      if (!newarr.includes(el)) {
        index = {};
        index["_id"] = {};
        index._id[`${req.query.groupdate}`] = el;
        index["number"] = 0;
        data.push(index);
      }
    });
  }
  res.status(200).json({
    data,
  });
});

exports.rooms = CatchAsync(async (req, res, next) => {
  const data = await Room.aggregate([
    {
      $group: {
        _id: `$rtype`,
        Num: { $sum: 1 },
      },
    },
  ]);

  res.status(200).json({
    data,
  });
});
exports.busyRooms = CatchAsync(async (req, res, next) => {
  const all = await Room.find({ rtype: ["Operation", "Recovery"] });
  let busyRooms = [{}];
  all.forEach((element) => {
    for (var i = element.schedule.length - 1; i >= 0; i--)
      if (
        checkTimeBetween(
          element.schedule[i].start,
          element.schedule[i].end,
          new Date()
        )
      ) {
        busyRooms.push(element);
      }
  });
  res.status(200).json({
    busyRooms: busyRooms.length - 1,
    emptyRooms: all.length - (busyRooms.length - 1),
  });
});
checkTimeBetween = (d1, d2, d3) => {
  d3 > d1 && d3 < d2 ? true : false;
};
exports.RoomsHours = CatchAsync(async (req, res, next) => {
  let match = {
    rtype: {
      $in: ["Operation", "Recovery"],
    },
  };
  let start = {};
  if (req.body.start) {
    start["$gte"] = new Date(req.body.start);
  }
  if (req.body.end) {
    start["$lte"] = new Date(req.body.end);
    match["schedule.start"] = start;
  }
  const data = await Room.aggregate([
    {
      $match: match,
    },
    {
      $unwind: "$schedule",
    },
    {
      $addFields: {
        totalHours: {
          $divide: [
            { $subtract: ["$schedule.end", "$schedule.start"] },
            3600 * 1000,
          ],
        },
      },
    },
    {
      $group: {
        _id: "$_id",
        RID: { $first: "$RID" },
        total: {
          $sum: "$totalHours",
        },
      },
    },
  ]);
  res.status(200).json({
    data,
  });
});

exports.mostSupplies = CatchAsync(async (req, res, next) => {
  let start = {};
  if (req.body.start) {
    start["$gte"] = new Date(req.body.start);
  }
  if (req.body.end) {
    start["$lte"] = new Date(req.body.end);
  }
  const data = await Operation.aggregate([
    {
      $match: {
        rooms: {
          $elemMatch: {
            start,
          },
        },
      },
    },
    {
      $unwind: "$supplies",
    },
    {
      $group: {
        _id: "$supplies.id",
        total: { $sum: "$supplies.quantity" },
      },
    },
    {
      $lookup: {
        from: "supplies",
        localField: "_id",
        foreignField: "_id",
        as: "supply",
      },
    },
    {
      $replaceRoot: {
        newRoot: {
          $mergeObjects: [{ $arrayElemAt: ["$supply", 0] }, "$$ROOT"],
        },
      },
    },
    { $project: { supply: 0, quantity: 0, __v: 0, inNeed: 0, needed: 0 } },
  ]);
  res.status(200).json({
    data,
  });
});
exports.nStaffOperation = CatchAsync(async (req, res, next) => {
  let Today = new Date();
  let lastWeek = toPastDate(7);
  lstOfDays = [1, 7, 30, 365];
  intervalsName = ["Day", "Week", "Month", "Year"];
  Data = [];
  for (i = 0; i < lstOfDays.length; i++) {
    let data = {};
    data["interval"] = intervalsName[i];
    data["operations"] = await manyOperations(
      toPastDate(lstOfDays[i]),
      Today,
      req.user._id
    );
    if (data["operations"].length == 0) data["operations"] = [0];
    Data.push(data);
  }

  console.log(Data[0]._id.day);
  res.status(200).json({
    status: "success",
    Data,
  });
});

const manyOperations = async (start, end, id) => {
  const Data = await User.aggregate([
    {
      $unwind: "$schedule",
    },
    {
      $match: {
        "schedule.end": {
          $gte: start,
          $lte: end,
        },
        _id: id,
      },
    },
    {
      $group: {
        _id: "$SSN",
        Operations: { $sum: 1 },
      },
    },
  ]);
  return Data.map(({ Operations }) => Operations);
};
const toPastDate = (days, date = new Date()) => {
  date = date.setDate(date.getDate() - days);
  date = new Date(date);
  return date;
};

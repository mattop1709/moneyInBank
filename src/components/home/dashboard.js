import React from "react";
import { Text, View } from "react-native";
import { styles as s } from "react-native-style-tachyons";

export function Dashboard({ lists, area, date }) {
  var moment = require("moment-timezone");
  return (
    <View style={[s.pv3, s.jcc, s.bg_paleOrange, s.mh3, s.br2, s.mv2]}>
      <Text style={[s.pv2, s.ph4, s.b]}>WAITERS DASHBOARD</Text>
      <Row
        caption={"Total Waiters"}
        figure={
          area === null
            ? lists.length
            : lists.filter(list => list.zbc == area).length
        }
        date={moment(date)
          .tz("Asia/Kuala_Lumpur")
          .format("LLL")}
      />
      <Row
        caption={"Pending Order"}
        figure={
          area === null
            ? lists.filter(list => list.status == "Pending Order").length
            : lists.filter(
                list => list.status == "Pending Order" && list.zbc == area
              ).length
        }
        date={moment(date)
          .tz("Asia/Kuala_Lumpur")
          .format("LLL")}
      />
      <Row
        caption={"In Demand"}
        figure={
          area === null
            ? lists.filter(list => list.status == "In Demand").length
            : lists.filter(
                list => list.status == "In Demand" && list.zbc == area
              ).length
        }
        date={moment(date)
          .tz("Asia/Kuala_Lumpur")
          .format("LLL")}
      />
      <Row
        caption={"Completed"}
        figure={
          area === null
            ? lists.filter(list => list.status == "Completed").length
            : lists.filter(
                list => list.status == "Completed" && list.zbc == area
              ).length
        }
        date={moment(date)
          .tz("Asia/Kuala_Lumpur")
          .format("LLL")}
      />
    </View>
  );
}

export function DashboardStatus({ waiters, status, figure, date }) {
  var moment = require("moment-timezone");
  return (
    <View style={[s.pv3, s.jcc, s.bg_paleOrange, s.mh2, s.br2, s.mt3]}>
      <Text style={[s.pv2, s.ph4, s.b]}>DASHBOARD</Text>
      <Row
        caption={status == null ? "All" : status}
        figure={figure}
        date={moment(date)
          .tz("Asia/Kuala_Lumpur")
          .format("LLL")}
      />
      <Row
        caption={"Total Waiters"}
        figure={waiters}
        date={moment(date)
          .tz("Asia/Kuala_Lumpur")
          .format("LLL")}
      />
    </View>
  );
}

export const Row = ({ caption, figure, date }) => {
  return (
    <View style={[s.pv2, s.ph4, s.flx_row, s.jcsb]}>
      <View>
        <Text style={[s.f5]}>{caption}</Text>
        <Text style={[s.white]}>{date}</Text>
      </View>
      <View style={[s.jcc]}>
        <Text style={[s.f5]}>{figure}</Text>
      </View>
    </View>
  );
};

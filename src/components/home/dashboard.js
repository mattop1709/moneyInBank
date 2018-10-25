import React from "react";
import { Text, View, TouchableOpactiy } from "react-native";
import { styles as s } from "react-native-style-tachyons";

export function Dashboard({ lists, area, date }) {
  var moment = require("moment-timezone");
  return (
    <View style={[s.pv3, s.jcc, s.bg_orange, s.mh3, s.br2, s.mv2]}>
      <Text style={[s.pv2, s.ph4, s.ff_Lato]}>WAITERS DASHBOARD</Text>
      <Row
        caption={"Pending Order Creation"}
        figure={
          area === "ALL ZBCs"
            ? lists.filter(list => list.status == "Pending Order Creation")
                .length
            : lists.filter(
                list =>
                  list.status == "Pending Order Creation" && list.zbc == area
              ).length
        }
        date={moment(date)
          .tz("Asia/Kuala_Lumpur")
          .format("LLL")}
      />
      <Row
        caption={"In Demand List"}
        figure={
          area === "ALL ZBCs"
            ? lists.filter(list => list.status == "In Demand List").length
            : lists.filter(
                list => list.status == "In Demand List" && list.zbc == area
              ).length
        }
        date={moment(date)
          .tz("Asia/Kuala_Lumpur")
          .format("LLL")}
      />
      <Row
        caption={"Closed"}
        figure={
          area === "ALL ZBCs"
            ? lists.filter(list => list.status == "Closed").length
            : lists.filter(list => list.status == "Closed" && list.zbc == area)
                .length
        }
        date={moment(date)
          .tz("Asia/Kuala_Lumpur")
          .format("LLL")}
      />
      <LastRow
        caption={"Total Waiters"}
        figure={
          area === "ALL ZBCs"
            ? lists.length
            : lists.filter(list => list.zbc == area).length
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
    <View style={[s.pv3, s.jcc, s.bg_orange, s.mh2, s.br2, s.mt3]}>
      <Text style={[s.pv2, s.ph4, s.b, s.ff_Lato]}>DASHBOARD</Text>
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
        <Text style={[s.f5, s.ff_Lato]}>{caption}</Text>
        <Text style={[s.white, s.ff_Lato]}>{date}</Text>
      </View>
      <View style={[s.jcc]}>
        <Text style={[s.f5, s.ff_Lato]}>{figure}</Text>
      </View>
    </View>
  );
};

export const LastRow = ({ caption, figure, date }) => {
  return (
    <View
      style={[s.pt2, s.pb2, s.flx_row, s.jcsb, s.bt, s.mh4, s.b__lightGrey]}
    >
      <View>
        <Text style={[s.f4, s.ff_Lato]}>{caption}</Text>
        <Text style={[s.white, s.ff_Lato]}>{date}</Text>
      </View>
      <View style={[s.jcc]}>
        <Text style={[s.f4, s.ff_Lato]}>{figure}</Text>
      </View>
    </View>
  );
};

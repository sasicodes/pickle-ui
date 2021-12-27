import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Page } from "@geist-ui/react";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import { PickleCore } from "../../containers/Jars/usePickleCore";

import {
  crvJars,
  sushiJars,
  uniJars,
  polyJars,
  arbJars,
} from "../../util/jars";
import { getAllJarsChart, getProtocolData } from "../../util/api";
import { materialBlack } from "../../util/constants";
import JarValueChart from "../../components/JarValueChart";
import { InfoBar } from "../../features/InfoBar/InfoBar";
import { Footer } from "../../features/Footer/Footer";

export const useStyles = makeStyles(() => ({
  title: {
    marginBottom: "10px",
    fontSize: "2rem",
    letterSpacing: "6px",
  },
  section: {
    color: materialBlack,
  },
  separator: {
    marginTop: "25px",
  },
}));

const chartSkeletons = (charts) =>
  Array.from({ length: charts.length }, (c, i) => ({
    asset: `${i}`,
    data: [],
  }));

const createAllChartSkeletons= (pickleCore) => {
  const ret = {};
  if( pickleCore ) {
    console.log("createAllChartSkeletons1");
    const activeJars = pickleCore.assets.jars.filter((x)=>x.enablement === "enabled");
    const chains = activeJars.map((x)=>x.chain);
    const uniqueChains = new Set(chains).values();
    for( let i = 0; i < uniqueChains.length; i++ ) {
      ret[uniqueChains[i]] = chartSkeletons(activeJars.filter((x)=>x.chain === uniqueChains[i]).map((x)=>x.details.apiKey.toLowerCase()));
    }
    ret["allJars"] = chartSkeletons(activeJars.map((x)=>x.details.apiKey.toLowerCase()));
    console.log("createAllChartSkeletons2");
  }
  return ret;
}

export default function Dashboard() {
  const classes = useStyles();
  const { pickleCore } = PickleCore.useContainer();

  const [dashboardData, setDashboardData] = useState(createAllChartSkeletons(pickleCore));
  useEffect(() => {
    console.log("Inside useEffect 1");
    const retrieveDashboardData = async () => {
      console.log("Inside retrieveDashboardData first line 1");
      const requests = [getProtocolData(), getAllJarsChart()];
      const dashboardData = await Promise.all(requests);

      // assign data objects from promise
      const protocolData = dashboardData[0];
      const allJarsData = dashboardData[1];
      const metrics = {
        date: protocolData.updatedAt,
        jarValue: protocolData.jarValue,
        totalValue: protocolData.totalValue,
      };

      const filterJars = (jarsList, allJars) => {
        const jarsListLower = jarsList.map((jar) => jar.toLowerCase());
        const filtered = allJars.filter((jar) =>
          jarsListLower.includes(jar.asset.toLowerCase()),
        );
        return filtered;
      };

      console.log("retrieveDashboardData1");
      let ret = {};
      console.log("pfcore is " + pickleCore);
      const activeJars = pickleCore && pickleCore.assets ? pickleCore.assets.jars.filter((x)=>x.enablement === "enabled") : [];
      const chains = activeJars.map((x)=>x.chain);
      const uniqueChains = Array.from(new Set(chains));
      console.log("Chains are: " + uniqueChains);
      for( let i = 0; i < uniqueChains.length; i++ ) {
        const chainJarList = activeJars.filter((x)=>x.chain === uniqueChains[i]).map((x)=>x.details.apiKey);
        console.log("setting ret[" + uniqueChains[i] + "]");
        ret[uniqueChains[i]] = filterJars(chainJarList, allJarsData);
      }
      ret.allJars = allJarsData;
      ret.metrics = metrics;
      console.log("retrieveDashboardData2");
      console.log("This is the model: " + JSON.stringify(ret));
      // construct staking data
      setDashboardData(ret);
    };
    retrieveDashboardData();
  }, [pickleCore]);

  const assets = (dashboardData.allJars || [])
    .filter((d) => d !== null && d !== undefined)
    .map((d) => {
      return d.asset;
    });
  const blockData = {};
  const mostRecent = {};
  (dashboardData.allJars || []).forEach((item) => {
    if (!item || !item.data) return;
    item.data.forEach((d) => {
      if (blockData[d.x] === undefined) {
        blockData[d.x] = { x: d.x };
      }
      blockData[d.x][item.asset] = d.y;
      mostRecent[item.asset] = 0;
    });
  });

  const combinedData = [];
  for (const timestampid of Object.keys(blockData).sort()) {
    let point = { x: parseInt(timestampid) };
    const value = blockData[timestampid];
    let y = 0;
    for (const asset of assets) {
      if (value[asset]) {
        mostRecent[asset] = value[asset];
      }
      y += mostRecent[asset] !== undefined ? mostRecent[asset] : 0;
    }
    point = { ...point, y: y };
    combinedData.push(point);
  }
  const trimmedData = combinedData;

  const tvlJar = {
    data: trimmedData.filter((x) => Object.values(x)[1]),
    asset: "Pickle Finance",
  };
  const { t } = useTranslation("common");

  return (
    <>
      <Page>
        <InfoBar />
        <Grid container spacing={2}>
          <h1>{t("balances.totalValueLocked")}</h1>

          <Grid item xs={12}>
            <JarValueChart jar={tvlJar} />
          </Grid>


          {dashboardData === undefined ? [] : Object.keys(dashboardData).filter((x)=>x !== "metrics" && x !== "allJars").map((x) => {
            return (
            <>
              <Grid
              item
              xs={12} key={"chain" + x}
              className={clsx(classes.section, classes.separator)}>
              <h1>{"Chain " + x}</h1>
            </Grid>

            {
            console.log(JSON.stringify(dashboardData)) ||
            console.log("x is " + x) ||
            console.log("dashboardData[x] is " + dashboardData[x]) ||
            dashboardData[x].map((jar) => {
              return (
                <Grid item xs={12} sm={6} key={jar.asset}>
                  <JarValueChart jar={jar} />
                </Grid>
              );
            })}
            </>
          );
          })}
        </Grid>
        <Footer />
      </Page>
    </>
  );
}

export { getStaticProps } from "../../util/locales";

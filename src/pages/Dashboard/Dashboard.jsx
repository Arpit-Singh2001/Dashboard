import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import Portfolio from "./components/Portfolio";
import PriceSection from "./components/PriceSection";
import { Grid, GridItem } from "@chakra-ui/react";
import Transactions from "./components/Transactions";
import InfoCard from "./components/InfoCard";

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
      <Grid 
      gridTemplateColumns={{
        base:"repeat(1,1fr)",
        xl:"repeat(2,1fr)",
      }}
      gap={6}
      >
        <GridItem colSpan={{
          base:1,
          xl:2,
        }}>
          <Portfolio />
        </GridItem>
        <GridItem colSpan={1}>
          <PriceSection/>
        </GridItem>
        <GridItem colSpan={1}>
          <Transactions/>
        </GridItem>
        <GridItem colSpan={1}>
         <InfoCard
         inverted={false}
         imgUrl="\Shapes.svg"
         text="Learn more about Loans  Keep your Bitcoin, access its value without selling it"
         tagtext="Loan"
         />
        </GridItem>
        <GridItem colSpan={1}>
         <InfoCard
          inverted={true}
         imgUrl="\Visual.svg"
         text="Learn more about our real estate, mortgage, and  corporate account services"
         tagtext="Contact"
         />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;

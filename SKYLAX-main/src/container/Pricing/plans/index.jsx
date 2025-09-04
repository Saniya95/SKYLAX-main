import * as React from "react";
import { Box, Container, Tab, Typography, Button } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { CheckIcon } from "@heroicons/react/24/solid";
import { apis } from "@/utils/apis";
import { useApi } from "@/hooks/useApi";
import { useRouter } from "next/router";

export default function Plans() {
  const router = useRouter();

  const [value, setValue] = React.useState("1");
  const { Get } = useApi();
  const { pricing } = apis;
  const [pricingData, setPricingData] = React.useState([]);

  React.useEffect(() => {
    GetPricing();
  }, []);

  const GetPricing = async () => {
    try {
      let data = await Get(pricing);
      if (data?.data) {
        setPricingData(data.data);
      }
    } catch (error) {
      console.log(error, "_error_");
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Transform API data into the pricing plan structure
  const transformPricingData = (plans, isYearly) => {
    return plans.map((plan) => ({
      title: plan.name,
      subTitle: plan.description,
      price: `${(
        (isYearly
          ? plan.yearlyPrices[0]?.unit_amount
          : plan.monthlyPrices[0]?.unit_amount) / 100
      ).toFixed(0)}`,
      subtitle: "USD/Month",
      setupFee: "$500", // API doesn't provide setup fee, keeping static value
      features: plan.marketing_features.map((feature) => feature.name),
      buttonColor:
        plan.name === "Pro"
          ? "linear-gradient(90deg, #55D0FF 0%, #6361FC 100%)"
          : "transparent",
      buttonTextColor: "#fff",
      bgColor:
        plan.name === "Pro"
          ? "linear-gradient(180deg, #0E0F1B 0%, #1B1C2E 100%)"
          : "#0B0F19",
      popular: plan.name === "Pro",
      cardbgColor: "#080707",
      priceId: isYearly ? plan.yearlyPrices[0]?.id : plan.monthlyPrices[0]?.id || "price_1RseZLBaoJmULlcNfiqwvgbV", // Use the actual price ID or fallback to default
    }));
  };

  const pricingPlans = transformPricingData(pricingData, false); // Monthly plans
  const pricingYearlyPlans = transformPricingData(pricingData, true); // Yearly plans

  return (
    <Box sx={{ py: 8, zIndex: "1", position: "relative" }}>
      <Container maxWidth="xl">
        <TabContext value={value}>
          {/* Tabs */}
          <Box sx={{ display: "flex", justifyContent: "center", mb: 8 }}>
            <Box
              sx={{
                p: "2.2px",
                borderRadius: "12px",
                background: "linear-gradient(to left, #55D0FF, #6361FC)",
                display: "inline-block",
              }}
            >
              <TabList
                onChange={handleChange}
                value={value}
                aria-label="pricing tabs"
                sx={{
                  backgroundColor: "#0B0F19",
                  borderRadius: "8px",
                  padding: "4px",
                  minWidth: "fit-content",
                  "& .MuiTabs-indicator": { display: "none" },
                  "& .MuiTab-root": {
                    borderRadius: "8px",
                    textTransform: "capitalize",
                    fontSize: "16px",
                    fontWeight: 500,
                    px: 5,
                    py: 2,
                    minHeight: "36px",
                    color: "#fff",
                    backgroundColor: "#5E697380",
                  },
                  "& .Mui-selected": {
                    backgroundImage:
                      "linear-gradient(90deg, #55D0FF 0%, #6361FC 100%)",
                    backgroundColor: "transparent",
                    color: "#000 !important",
                  },
                }}
              >
                <Tab
                  label="Pay Monthly"
                  value="1"
                  className="font_neue_montreal_regular capitalize"
                  sx={{ m: 0.2, mr: 1 }}
                />
                <Tab
                  label="Pay Yearly"
                  value="2"
                  className="font_neue_montreal_regular capitalize"
                  sx={{ m: 0.2 }}
                />
              </TabList>
            </Box>
          </Box>

          {/* Monthly Tab Panel */}
          <TabPanel value="1" className="sm:p-auto !p-0">
            <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[60px] px-[0px] sm:px-[40px] pt-[0px]">
              {pricingPlans.map((plan, index) => (
                <Box
                  key={index}
                  sx={{
                    border: "1.5px solid #5E6973",
                    background: plan.bgColor,
                    borderRadius: "16px",
                    color: "#fff",
                    overflow: "hidden",
                    position: "relative",
                    boxShadow: plan.popular
                      ? "0px 0px 20px rgba(85, 208, 255, 0.25)"
                      : "none",
                  }}
                >
                  {plan.popular && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        fontSize: "16px",
                        backgroundColor: "#57C8FF",
                        color: "#000",
                        px: 1.5,
                        py: 0.5,
                        borderRadius: "8px",
                        fontWeight: 500,
                        zIndex: 1,
                      }}
                    >
                      POPULAR
                    </Box>
                  )}

                  <Box
                    sx={{
                      backgroundColor: plan.cardbgColor,
                      width: "100%",
                      padding: "32px",
                      borderRadius: "16px",
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} mb={1}>
                      {plan.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#F3F6FF",
                        opacity: "0.5",
                        mb: 5,
                      }}
                    >
                      {plan.subTitle}
                    </Typography>

                    <Typography variant="h4" fontWeight={400}>
                      ${plan.price}
                      <Typography
                        component="span"
                        fontSize="14px"
                        color="#999"
                        fontWeight="400"
                        ml="8px"
                      >
                        {plan.subtitle}
                      </Typography>
                    </Typography>

                    <Typography
                      fontSize={16}
                      color="#aaa"
                      mt={1}
                      fontWeight={400}
                      lineHeight="120%"
                      letterSpacing="-1%"
                    >
                      Set up fee {plan.setupFee}
                    </Typography>

                    <Button
                      variant="contained"
                      sx={{
                        padding: "13px 14px",
                        fontSize: "16px",
                        border: "1.5px solid #F3F6FF",
                        mt: 5,
                        background: plan.buttonColor,
                        color: plan.buttonTextColor,
                        borderRadius: "8px",
                        textTransform: "none",
                        fontWeight: 500,
                        boxShadow: "none",
                        "&:hover": {
                          background: plan.buttonColor,
                        },
                      }}
                      fullWidth
                      onClick={() => router.push(`/pricing/checkout?price=${plan.price}&type=month&priceId=${plan.priceId}`)}
                    >
                      Buy now
                    </Button>
                  </Box>

                  <Box sx={{ padding: "32px" }}>
                    <Typography
                      fontWeight={500}
                      mb={2.5}
                      fontSize="24px"
                      lineHeight="120%"
                    >
                      Key features
                    </Typography>
                    {plan.features.map((feature, idx) => (
                      <Box key={idx} display="flex" alignItems="start" mb={1}>
                        <CheckIcon
                          style={{
                            width: 16,
                            height: 16,
                            color: "#55D0FF",
                            marginTop: 4,
                            marginRight: 8,
                          }}
                        />
                        <Typography fontSize={16} lineHeight="120%" pb={1.2}>
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>
          </TabPanel>

          {/* Yearly Tab Panel */}
          <TabPanel value="2">
            <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[60px] px-[0px] sm:px-[40px] pt-[0px]">
              {pricingYearlyPlans.map((plan, index) => (
                <Box
                  key={index}
                  sx={{
                    border: "1.5px solid #5E6973",
                    background: plan.bgColor,
                    borderRadius: "16px",
                    color: "#fff",
                    overflow: "hidden",
                    position: "relative",
                    boxShadow: plan.popular
                      ? "0px 0px 20px rgba(85, 208, 255, 0.25)"
                      : "none",
                  }}
                >
                  {plan.popular && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        fontSize: "16px",
                        backgroundColor: "#57C8FF",
                        color: "#000",
                        px: 1.5,
                        py: 0.5,
                        borderRadius: "8px",
                        fontWeight: 500,
                        zIndex: 1,
                      }}
                    >
                      POPULAR
                    </Box>
                  )}

                  <Box
                    sx={{
                      backgroundColor: plan.cardbgColor,
                      width: "100%",
                      padding: "32px",
                      borderRadius: "16px",
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} mb={1}>
                      {plan.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#F3F6FF",
                        opacity: "0.5",
                        mb: 5,
                      }}
                    >
                      {plan.subTitle}
                    </Typography>

                    <Typography variant="h4" fontWeight={400}>
                      ${plan.price}
                      <Typography
                        component="span"
                        fontSize="14px"
                        color="#999"
                        fontWeight="400"
                        ml="8px"
                      >
                        {plan.subtitle}
                      </Typography>
                    </Typography>

                    <div className="flex justify-between">
                      <Typography
                        fontSize={16}
                        color="#aaa"
                        mt={1}
                        fontWeight={400}
                        lineHeight="120%"
                        letterSpacing="-1%"
                      >
                        Set up fee {plan.setupFee}
                      </Typography>
                      <Typography
                        fontSize={16}
                        color="#aaa"
                        mt={1}
                        fontWeight={400}
                        lineHeight="120%"
                        letterSpacing="-1%"
                      >
                        billed once yearly
                      </Typography>
                    </div>

                    <Button
                      variant="contained"
                      sx={{
                        padding: "13px 14px",
                        fontSize: "16px",
                        border: "1.5px solid #F3F6FF",
                        mt: 5,
                        background: plan.buttonColor,
                        color: plan.buttonTextColor,
                        borderRadius: "8px",
                        textTransform: "none",
                        fontWeight: 500,
                        boxShadow: "none",
                        "&:hover": {
                          background: plan.buttonColor,
                        },
                      }}
                      fullWidth
                      onClick={()=> router.push(`/pricing/checkout?price=${plan.price}&type=yearly&priceId=${plan.priceId}`)}
                    >
                      Buy now
                    </Button>
                  </Box>

                  <Box sx={{ padding: "32px" }}>
                    <Typography
                      fontWeight={500}
                      mb={2.5}
                      fontSize="24px"
                      lineHeight="120%"
                    >
                      Key features
                    </Typography>
                    {plan.features.map((feature, idx) => (
                      <Box key={idx} display="flex" alignItems="start" mb={1}>
                        <CheckIcon
                          style={{
                            width: 16,
                            height: 16,
                            color: "#55D0FF",
                            marginTop: 4,
                            marginRight: 8,
                          }}
                        />
                        <Typography fontSize={16} lineHeight="120%" pb={1.2}>
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>
          </TabPanel>
        </TabContext>
      </Container>
    </Box>
  );
}

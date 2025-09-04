import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { XCircleIcon } from "@heroicons/react/24/solid";
import faq_Gradient from "../../../../public/assets/images/faq-Gradient.png";
import BenefitsEllipse from "../../../../public/assets/images/BenefitsEllipse.png";

const CancelPage = () => {
  const router = useRouter();

  return (
    <Box sx={{ py: 8, zIndex: "1", position: "relative" }}>
      <Image
        src={faq_Gradient}
        alt="faq_Gradient"
        className="absolute left-0 top-0"
      />
      <Image
        src={BenefitsEllipse}
        alt="BenefitsEllipse"
        className="absolute right-0 top-0"
      />
      <Container maxWidth="xl">
        <Box className="flex flex-col items-center justify-center min-h-[70vh] relative z-10">
          <Box 
            className="bg-[#0B0F19] border-[1.5px] border-[#5E6973] rounded-[16px] p-12 max-w-[600px] w-full"
          >
            <Box className="flex flex-col items-center text-center gap-6">
              <XCircleIcon className="h-24 w-24 text-[#F3F6FF]" />
              
              <Typography variant="h4" fontWeight={600} color="#fff">
                Payment Cancelled
              </Typography>
              
              <Typography variant="body1" color="#F3F6FF" sx={{ opacity: 0.8 }}>
                Your payment process has been cancelled. No charges have been made to your account.
                If you have any questions or need assistance, please contact our support team.
              </Typography>
              
              <Box className="flex gap-4 mt-6 w-full">
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => router.push("/pricing")}
                  sx={{
                    padding: "13px 14px",
                    fontSize: "16px",
                    background: "linear-gradient(90deg, #55D0FF 0%, #6361FC 100%)",
                    color: "#000",
                    borderRadius: "8px",
                    textTransform: "none",
                    fontWeight: 500,
                    boxShadow: "none",
                    "&:hover": {
                      background: "linear-gradient(90deg, #55D0FF 0%, #6361FC 100%)",
                    },
                  }}
                >
                  Return to Pricing
                </Button>
                
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => router.push("/")}
                  sx={{
                    padding: "13px 14px",
                    fontSize: "16px",
                    border: "1.5px solid #F3F6FF",
                    color: "#F3F6FF",
                    borderRadius: "8px",
                    textTransform: "none",
                    fontWeight: 500,
                    "&:hover": {
                      border: "1.5px solid #F3F6FF",
                      background: "transparent",
                    },
                  }}
                >
                  Return to Home
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CancelPage;
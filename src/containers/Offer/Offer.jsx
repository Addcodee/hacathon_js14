import React from "react";
import "./offer.css";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Offer = () => {
  const navigate = useNavigate();

  const steps = ["Step 1", "Step 2", "Step 3"];

  const descs = [
    "Have a look for your dream car",
    "Choose your region and pay-method",
    "Wait for your car and be happy for successfull buy!",
  ];

  return (
    <div className="offer">
      <div className="offer__header">
        <h2>3 steps to your DREAM-CAR</h2>

        <p>
          Order a vehicle online from the comfort of your own home –
          we offer you this service with our Audi online vehicle
          purchase. Below we will show you in three steps how easy the
          ordering process is.
        </p>
        <Button
          sx={{
            color: "black",
          }}
          onClick={() => navigate("/cart")}
        >
          To Buy-Online Page
        </Button>
      </div>
    </div>
  );
};

export default Offer;

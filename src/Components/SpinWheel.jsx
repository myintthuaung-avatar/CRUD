import  { useState } from "react";
import { Wheel } from "react-custom-roulette";

const data = [
  { option: "မုန့်စားမယ်" },
  { option: "မစားတော့ပါဘူး" },
  { option: "ဝယ်မယ်" },
  { option: "မဝယ်တော့ပါဘူး" },
  { option: "သောက်မယ်" },
  { option: "မသောက်ဘူး" },
  { option: "သွားမယ်" },
  { option: "မသွားဘူး" },
  { option: "HotPot စားမယ်" }
];

export default () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  return (
    <>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        outerBorderColor={["#f2f2f2"]}
        outerBorderWidth={[10]}
        innerBorderColor={["#f2f2f2"]}
        radiusLineColor={["#dedede"]}
        radiusLineWidth={[1]}
        fontSize={15}
        textColors={["#ffffff"]}
        backgroundColors={[
          "#F22B35",
          "#F99533",
          "#24CA69",
          "#514E50",
          "#46AEFF",
          "#9145B7"
        ]}
        onStopSpinning={() => {
          setMustSpin(false);
          console.log(data[prizeNumber]);
        }}
      />
      <button variant="contained" onClick={handleSpinClick} color="green">ရွေးလိုက်မယ်</button>
      {!mustSpin ? data[prizeNumber].option : "0"}
    </>
  );
};

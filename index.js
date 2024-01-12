// ticket size 9x3 - total 27 tiles
// numbers in 5x3 - total 15 tiles
// numbers will be between 1 to 99

const {
  numberCall,
  markNumberOnTicket,
  checkEarlySeven,
  checkFullHouse,
  checkLadooSingh,
  checkMiddleLine,
  checkBottomLine,
  checkTopLine,
  checkCorners
} = require("./helper");

// const ticket = [
//   [36, 52, 54, 48, 51],
//   [73, 70, 92, 56, 14],
//   [39, 14, 1, 24, 58]
// ];

const ticket = [
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
];

const callList = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 11, 12, 13, 14, 15];

const priceMap = {
  Early_seven: 120,
  Ladoo_singh: 100,
  Four_corners: 150,
  Top_line: 170,
  Middle_line: 170,
  Bottom_line: 170,
  Full_house: 400
};

//   const calledNumber = numberCall();

//   markNumberOnTicket(ticket,calledNumber);

const main = () => {
  let callCounter = 0;
  let result = [];
  // let result = new Set();

  const winMap = {
    Early_seven: 0,
    Ladoo_singh: 0,
    Four_corners: 0,
    Top_line: 0,
    Middle_line: 0,
    Bottom_line: 0,
    Full_house: 0
  };

  // let markedTicket = [];
  callList.forEach((call, i) => {
    callCounter++;
    markNumberOnTicket(ticket, call);

    const isLadooSingh = checkLadooSingh(ticket);

    if (isLadooSingh && !winMap.Ladoo_singh) {
      winMap.Ladoo_singh++;
      result.push({ index: i + 1, Ladoo_singh: priceMap.Ladoo_singh });
    }

    const isCorners = checkCorners(ticket);

    if (isCorners && !winMap.Four_corners) {
      winMap.Four_corners++;
      result.push({ index: i + 1, Four_corners: priceMap.Four_corners });
    }

    const isTopLine = checkTopLine(ticket);

    if (isTopLine && !winMap.Top_line) {
      winMap.Top_line++;
      result.push({ index: i + 1, Top_line: priceMap.Top_line });
    }

    const isMiddleLine = checkMiddleLine(ticket);

    if (isMiddleLine && !winMap.Middle_line) {
      winMap.Middle_line++;
      result.push({ index: i + 1, Middle_line: priceMap.Middle_line });
    }
    const isBottomLine = checkBottomLine(ticket);

    if (isBottomLine && !winMap.Bottom_line) {
      winMap.Bottom_line++;
      result.push({ index: i + 1, Bottom_line: priceMap.Bottom_line });
    }

    if (callCounter >= 7 && !winMap.Early_seven) {
      const isEarlySeven = checkEarlySeven(ticket);
      if (isEarlySeven) {
        winMap.Early_seven++;
        result.push({ index: i + 1, Early_seven: priceMap.Early_seven });
      }
    }

    if (callCounter >= 15 && !winMap.Full_house) {
      const isFullHouse = checkFullHouse(ticket);
      if (isFullHouse) {
        winMap.Full_house++;
        result.push({ index: i + 1, Full_house: priceMap.Full_house });
      }
    }
  });

  console.log(
    ticket,
    "\n",
    result.sort((a, b) => Object.values(b)[1] - Object.values(a)[1]).slice(0,3)
  );
};

main();

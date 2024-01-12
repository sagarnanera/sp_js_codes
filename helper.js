const markNumberOnTicket = (ticket, calledNumber) => {
  ticket.forEach((rows, i) =>
    rows.forEach((el, j) => {
      if (el === calledNumber) {
        // console.log("here",ticket[i][j]);
        ticket[i][j] = 0;
      }
    })
  );
};

const checkEarlySeven = (ticket) => {
  let checkedCount = 0;
  let flag = false;
  ticket.forEach((rows) =>
    rows.forEach((el) => {
      if (el === 0) {
        checkedCount++;
      }
      if (checkedCount === 7) {
        flag = true;
        return;
      }
    })
  );
  return flag;

  //   let markedCount = 0;

  //   ticket.forEach((rows) =>
  //     rows.forEach((el) => {
  //       if (el === 0) {
  //         markedCount++;
  //       }
  //     })
  //   );

  //   return markedCount === 7;
};

const checkLadooSingh = (ticket) => {
  const midRowIndex = Math.floor(ticket.length / 2);
  const midColIndex = Math.floor(ticket[0].length / 2);

  let flag = ticket[midRowIndex][midColIndex] === 0 ? true : false;

  return flag;
};

const checkCorners = (ticket) => {
  if (
    ticket[0][0] === 0 &&
    ticket[ticket.length - 1][0] === 0 &&
    ticket[0][ticket[0].length - 1] === 0 &&
    ticket[ticket.length - 1][ticket[0].length - 1] === 0
  ) {
    return true;
  }

  return false;
};

const checkTopLine = (ticket) => {
  let flag = true;

  ticket[0].forEach((el) => {
    if (el !== 0) {
      flag = false;
      return;
    }
  });

  return flag;
};

const checkMiddleLine = (ticket) => {
  let flag = true;

  ticket[Math.floor(ticket.length / 2)].forEach((el) => {
    if (el !== 0) {
      flag = false;
      return;
    }
  });

  return flag;
};

const checkBottomLine = (ticket) => {
  let flag = true;

  ticket[ticket.length - 1].forEach((el) => {
    if (el !== 0) {
      flag = false;
      return;
    }
  });

  return flag;
};

const checkFullHouse = (ticket) => {
  let flag = true;
  ticket.forEach((rows) =>
    rows.forEach((el) => {
      if (el !== 0) {
        flag = false;
        return;
      }
    })
  );
  return flag;
};

module.exports = {
  // numberCall,
  checkBottomLine,
  checkCorners,
  checkEarlySeven,
  checkFullHouse,
  checkLadooSingh,
  checkMiddleLine,
  checkTopLine,
  markNumberOnTicket
};

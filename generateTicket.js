function generateTicket(rows, cols) {

  const set = new Set();
  
    // for (let i = 0; i < rows; i++) {
    //   const row = [];
    //   for (let j = 0; j < cols; j++) {
    //     const randomNumber = Math.floor(Math.random() * 99) + 1;
    //     row.push(randomNumber);
    //   }
    //   result.push(row);
    // }

    while(set.size < 15){
      set.add(Math.floor(Math.random() * 99) + 1);
    }

    const result =  Array.from(set);
    
    const ticket = [result.slice(0,cols),result.slice(cols,cols*2),result.slice(cols*2,cols*3)]

    return ticket;
  }
  
  // const twoDArray = generateTicket(3, 5);
  // console.log(twoDArray);

  
  module.exports = generateTicket;
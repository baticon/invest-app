// function fetchPrice() {
//   const socket = new WebSocket(
//     "wss://ws.finnhub.io?token=calf0eiad3ie9ojgktpg"
//   );

//   // Connection opened -> Subscribe
//   socket.addEventListener("open", function (event) {
//     socket.send(JSON.stringify({ type: "subscribe", symbol: "AAPL" }));
//     socket.send(
//       JSON.stringify({ type: "subscribe", symbol: "BINANCE:BTCUSDT" })
//     );
//     socket.send(JSON.stringify({ type: "subscribe", symbol: "IC MARKETS:1" }));
//   });

//   // Listen for messages
//   socket.addEventListener("message", function (event) {
//     console.log("Message from server ", event.data);
//   });

//   // Unsubscribe
//   var unsubscribe = function (symbol) {
//     socket.send(JSON.stringify({ type: "unsubscribe", symbol: symbol }));
//   };
// }

function priceRequest(displaySymbol: string) {
  return <span>{displaySymbol} fuck yeah</span>;
}

export default priceRequest;

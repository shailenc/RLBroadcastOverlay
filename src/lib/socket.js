import { writable } from "svelte/store";

//Connect to SOS
const socket = new WebSocket("ws://localhost:49122");

socket.onopen = () => {
  console.log("Connected to SOS.");
};

socket.onerror = (err) => {
  console.error("WebSocket error", err);
};

//Save the latest received message in a store.
export const socketMessageStore = writable({
  event: "default",
  data: {},
});

socket.onmessage = ({ data }) => {
  const parsed = JSON.parse(data);
  console.log("New msg:", parsed);

  socketMessageStore.set(parsed);
};
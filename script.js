const start = document.getElementById("startbtn");
const stop = document.getElementById("stopbtn");
const output = document.getElementById("output");
const clear = document.getElementById("clearbtn");
const copy = document.getElementById("copybtn");
const hidni = document.getElementById("hindibtn");
const english = document.getElementById("englishbtn");

const recognition = new window.webkitSpeechRecognition();

hidni.addEventListener("click", () => {
  recognition.lang = "hi-IN";
});

english.addEventListener("click", () => {
  recognition.lang = "en-US";
});
start.addEventListener("click", () => {
  recognition.start();
});
recognition.onstart = () => {
  start.innerText = "Listning...";
};
recognition.onend = () => {
  start.innerText = "Start";
};
recognition.onresult = (event) => {
  output.innerHTML += `${event.results[0][0].transcript + " "}`;
};

copy.addEventListener("click", async () => {
  await navigator.clipboard.writeText(output.innerHTML);
});

clear.addEventListener("click", () => {
  output.innerHTML = "";
});

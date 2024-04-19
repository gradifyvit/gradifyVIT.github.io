const synth = window.speechSynthesis;
const textToSpeech = (string) => {
  let voice = new SpeechSynthesisUtterance(string);
  voice.text = string;
  voice.lang = "data-lang";
  voice.volume = 5;
  voice.rate = 0.78;
  voice.pitch = 1;
  synth.speak(voice);
}
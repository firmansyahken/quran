export const CopyClipBoard = (text) => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text);
    alert("Copied the text")
} else {
    const input = document.createElement("textarea");
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    alert("Copied the text")
  }
};

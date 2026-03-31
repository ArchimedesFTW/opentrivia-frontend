
// Process &quot and similar html encodings in string.
// https://stackoverflow.com/questions/1912501/unescape-html-entities-in-javascript
export function htmlDecode(input: string): string {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}
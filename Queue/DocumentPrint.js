const queue = require("./Queue");

const printDocs = new queue();
printDocs.enqueue("Document Print -1");
printDocs.enqueue("Document Print -2");
printDocs.enqueue("Document Print -3");
printDocs.enqueue("Document Print -4");
while (!printDocs.isEmpty()) {
  console.log("printing document", printDocs.dequeue());
}

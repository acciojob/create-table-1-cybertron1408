function insert_Row() {
  // Get reference to the table
  const table = document.getElementById("sampleTable");

  // Insert a new row at the top (index 0)
  const newRow = table.insertRow(0);

  // Insert two new cells in the new row
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);

  // Set the content for the new cells
  cell1.innerHTML = "New Cell1";
  cell2.innerHTML = "New Cell2";
}

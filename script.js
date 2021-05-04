$(document).ready();


function renderTableData(tableData) {
  var tableBody = $("#table-body");

  var tableRow = $("<tr>").addClass("data-row");
  tableBody.append(tableRow);

  var firstColumn = $("<td>").addClass("column1").text(tableData.id);
  tableRow.append(firstColumn);

  var secondColumn = $("<td>").addClass("column2").text(tableData.firstName);
  tableRow.append(secondColumn);

  var thirdColumn = $("<td>").addClass("column3").text(tableData.lastName);
  tableRow.append(thirdColumn);

  var fourthColumn = $("<td>").addClass("column4").text(tableData.email);
  tableRow.append(fourthColumn);

  var fifthColumn = $("<td>").addClass("column5").text(tableData.phone);
  tableRow.append(fifthColumn);
}

$.get(
  "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D",
  function (response) {
    var dataList = response;
    console.log(dataList);

    for (i = 0; i < dataList.length; i++) {
      renderTableData(dataList[i]);
    }
  }
);



var detailSection = $("#detail-section");

var detailHeading = $("<h1>").text("Details");
detailSection.append(detailHeading);

var userSelected = $("<h3>").text("User selected: ");
detailSection.append(userSelected);

var userDescription = $("<h4>").text("Description");
detailSection.append(userDescription);

var userTextArea = $("<textarea>").text("");
detailSection.append(userTextArea);

var userAddress = $("<h4>").text("Address: ");
detailSection.append(userAddress);

var userCity = $("<h4>").text("City: ");
detailSection.append(userCity);

var userState = $("<h4>").text("State: ");
detailSection.append(userState);

var userZip = $("<h4>").text("ZIP: ");
detailSection.append(userZip);
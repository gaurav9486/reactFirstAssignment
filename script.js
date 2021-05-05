$(document).ready();

var dataList=[]
function renderTableData(tableData, i) {
  var tableBody = $("#table-body");

  var tableRow = $("<tr>").addClass("data-row").attr("id",i);
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
   dataList = response;
    console.log(dataList);
    
    for (i = 0; i < dataList.length; i++) {
      renderTableData(dataList[i],i);
    }

    var dataRow = $(".data-row");
    $(dataRow).click(function() {
      var id = $(this).attr("id");
      $(".data-row").removeClass("active");
      $(this).addClass("active");
      $(userSelected).text(`User selected: ${dataList[id].firstName} ${dataList[id].lastName}`)
      $(userDescription).text("Description");
      $(userTextArea).text(dataList[id].description).css("display", "inline-block");
      $(userAddress).text("Address: " + dataList[id].address.streetAddress);
      $(userCity).text("City: " + dataList[id].address.city);
      $(userState).text("State: " + dataList[id].address.state);
      $(userZip).text("ZIP: " + dataList[id].address.zip);
    })
  }
);

var detailSection = $("#detail-section");

var detailHeading = $("<h1>").text("Details");
detailSection.append(detailHeading);

var userSelected = $("<h3>").text("");
detailSection.append(userSelected);

var userDescription = $("<h4>").text("");
detailSection.append(userDescription);

var userTextArea = $("<textarea>").text("");
detailSection.append(userTextArea);

var userAddress = $("<h4>").text("");
detailSection.append(userAddress);

var userCity = $("<h4>").text("");
detailSection.append(userCity);

var userState = $("<h4>").text("");
detailSection.append(userState);

var userZip = $("<h4>").text("");
detailSection.append(userZip);
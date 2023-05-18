// 한 페이지에 보여줄 버튼 개수
var buttonsPerPage = 4;

var currentPage = 1;

var buttons = ["버튼1", "버튼2", "버튼3", "버튼4", "버튼5", "버튼6", "버튼7", "버튼8"];
var startIndex = (currentPage - 1) * buttonsPerPage;
var endIndex = startIndex + buttonsPerPage;
var currentButtons = buttons.slice(startIndex, endIndex);

var previousButtonHtml = currentPage > 1 ? '<button class="paging-button" onclick="previousPage()">이전</button>' : '';
var nextButtonHtml = endIndex < buttons.length ? '<button class="paging-button" onclick="nextPage()">다음</button>' : '';

var buttonHtml = '';
for (var i = 0; i < currentButtons.length; i++) {
  buttonHtml += '<button class="menu-button">' + currentButtons[i] + '</button>';
}
var fullHtml = previousButtonHtml + buttonHtml + nextButtonHtml;
$("#menu").html(fullHtml);

function previousPage() {
  currentPage--;
  updateMenu();
}

function nextPage() {
  currentPage++;
  updateMenu();
}

function updateMenu() {
  var startIndex = (currentPage - 1) * buttonsPerPage;
  var endIndex = startIndex + buttonsPerPage;
  var currentButtons = buttons.slice(startIndex, endIndex);
  var previousButtonHtml = currentPage > 1 ? '<button class="paging-button" onclick="previousPage()">이전</button>' : '';
  var nextButtonHtml = endIndex < buttons.length ? '<button class="paging-button" onclick="nextPage()">다음</button>' : '';
  var buttonHtml = '';
  for (var i = 0; i < currentButtons.length; i++) {
    buttonHtml += '<button class="menu-button">' + currentButtons[i] + '</button>';
  }
  var fullHtml = previousButtonHtml + buttonHtml + nextButtonHtml;
  $("#menu").html(fullHtml);
}


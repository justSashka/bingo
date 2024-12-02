const menu = document.querySelectorAll('.bingoItem');
const summaryContainer = document.querySelector('.summary')
let summary = 0;
for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener('click', function () {
    this.classList.toggle('active');
    this.classList.contains('active') ? summary += 1 : summary -= 1;
    switch (summary) {
      case 0:
        summaryContainer.classList.toggle('low')
        summaryContainer.classList.remove('lowMid')
        break;
      case 2:
        summaryContainer.classList.add('lowMid')
        summaryContainer.classList.remove('mid')
        break;
      case 4:
        summaryContainer.classList.add('mid')
        summaryContainer.classList.remove('midHigh')
        break;
      case 6:
        summaryContainer.classList.add('midHigh')
        summaryContainer.classList.remove('high')
        break;
      case 8:
        summaryContainer.classList.add('high')
        summaryContainer.classList.remove('highVeryHigh')
        break;
      case 10:
        summaryContainer.classList.add('highVeryHigh')
        summaryContainer.classList.remove('veryHigh')
        break;
      case 25:
        summaryContainer.classList.add('veryHigh')
        break;
      default:
        break;
    }
  });
}




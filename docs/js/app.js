document.addEventListener("DOMContentLoaded", function () {
  console.log("helloworld");
  let column_list = document.querySelectorAll('.expandable');
  column_list.forEach(column => {
    column.addEventListener('mouseenter', function (event) {
      column.classList.add('is-half');
    });
    column.addEventListener('mouseleave', function (event) {
      column.classList.remove('is-half');
    });
  });
});
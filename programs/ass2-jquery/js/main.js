// ENSURE YOU HAVE THE CONSOLE OPEN TO VIEW OUTPUT
// you can put slides examples below or in the console.
let input = $(".frm-control");
let reset = $(".reset");
let images = $(".thumb-display");
let tagList = $(".tags");

input.on("input", () => {
  if (isEmptyOrWhiteSpace(input.val())) reset.addClass("hidden");
  else reset.removeClass("hidden");

  let searchVal = input.val().toUpperCase();
  $.each(images, (idx, img) => {
    console.log(this);
    let imgTags = tagList[idx].innerText.toUpperCase();
    if (imgTags.includes(searchVal)) {
      this.addClass("hidden");
    } else {
      this.removeClass("hidden");
    }
    return false;
  });
});

function isEmptyOrWhiteSpace(str) {
  return !str || !str.trim();
}

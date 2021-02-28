$(document).ready(() => {
  $("#review-submit").on("click", () => {
    console.log("click");
    const reviewName= $("#review-name").val(); 
    const reviewComment= $("#review-comment").val(); 
    const reviewRate= $("#review-rate").val();


    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    function signUpUser(email, password) {{}
      $.post("/api/reviews", {
      console.log("post review");
    })
    .then(() => {
      console.log("review updated")
    })
    .catch(handleLoginErr);
}

}
  });
});
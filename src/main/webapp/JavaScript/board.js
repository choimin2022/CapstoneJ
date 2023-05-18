function applyBoardJavaScript() {
 function togglePost(postId) {
            var postContent = document.getElementById(postId);
            postContent.style.display = postContent.style.display === "none" ? "block" : "none";
        }
    var Close = document.querySelector('.postClose');
	Close.addEventListener('click', function() {
    midbox.style.display = 'none';
});
  }
  
 function togglePost(postId) {
          var postContent = document.getElementById(postId);
          postContent.style.display = postContent.style.display === "none" ? "block" : "none";
      }
//your code here
 <button class="btn" onclick="changeMovie()">Change Movie</button>

  <script>
    function changeMovie() {
      // Example: dynamically change details
      document.querySelector("h1").textContent = "The Dark Knight (2008)";
      document.querySelector(".moviePic").src = "https://m.media-amazon.com/images/I/71pVz8s+M-L._AC_SY679_.jpg";
      document.querySelector(".movieDetail").textContent =
        "Batman faces the Joker, a criminal mastermind who plunges Gotham City into chaos. Directed by Christopher Nolan, starring Christian Bale and Heath Ledger.";
    }
  </script>

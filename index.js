 function showSearchBar() {
      document.getElementById('searchBar').style.display = 'flex';
    }

    function hideSearchBar() {
      document.getElementById('searchBar').style.display = 'none';
    }
     function showSlide(index) {
      const wrapper = document.getElementById('sliderWrapper');
      wrapper.style.transform = `translateX(-${index * 100}%)`;

      const dots = document.querySelectorAll('.dot');
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
    }
    // 2nd slider -----
    function showSlide2(index) {
      const wrapper2 = document.getElementById('sliderWrapper2');
      wrapper2.style.transform = `translateX(-${index * 100}%)`;

      const dots2 = document.querySelectorAll('.dot2');
      dots2.forEach(dot2 => dot2.classList.remove('active2'));
      dots2[index].classList.add('active2');
    }
    // popup start
    function openPopup() {
      document.getElementById("popupForm").style.display = "flex";
    }

    // Close popup
    function closePopup() {
      document.getElementById("popupForm").style.display = "none";
    }

    // Validation function
    var btn = document.getElementById("carticon");
    var image = document.getElementById("cart1");
    var buye = document.getElementById("buy");
    image.onclick = function stp(){
      buye.style.display = "block";
      btn.style.display = "inline-block";
    }
  var btn1 = document.getElementById("carticon2");
    var image1 = document.getElementById("cart2");
    var buye1 = document.getElementById("buy2");
    image1.onclick = function stp(){
      buye1.style.display = "block";
      btn1.style.display = "inline-block";
    }
     var btn2 = document.getElementById("carticon3");
    var image2 = document.getElementById("cart3");
     var buye2 = document.getElementById("buy3");
    image2.onclick = function stp(){
       buye2.style.display = "block";
      btn2.style.display = "inline-block";
    }
     var btn3 = document.getElementById("carticon4");
    var image3 = document.getElementById("cart4");
    var buye3 = document.getElementById("buy4");
    image3.onclick = function stp(){
      buye3.style.display = "block";
      btn3.style.display = "inline-block";
    }
     var btn4 = document.getElementById("carticon5");
    var image4 = document.getElementById("cart5");
    var buye4 = document.getElementById("buy5");
    image4.onclick = function stp(){
      buye4.style.display = "block";
      btn4.style.display = "inline-block";
    }

   var cartimge1 = document.getElementById("cartimg1");
   var cartimge2 = document.getElementById("cartimg2");
   var cartimge3 = document.getElementById("cartimg3");
   var cartimge4 = document.getElementById("cartimg4");
   var cartimge5 = document.getElementById("cartimg5");
   var val = document.getElementById("valll");

   val.addEventListener("click", () => {
    event.preventDefault();

    cartimge1.classList.toggle("hidden");
    cartimge2.classList.toggle("hidden");
    cartimge3.classList.toggle("hidden");
    cartimge4.classList.toggle("hidden");
    cartimge5.classList.toggle("hidden");
    if(cartimge1``.classList.contains("hidden"))
    {
      val.textContent = "VIEW ALL";
      return false;
    }
    else{
      val.textContent = "HIDE";
      return false;
    }
    
   }
  );

    // cart page
    let cart = [];

    function toggleCart() {
      document.getElementById("cartPopup").classList.toggle("active");
      document.getElementById("overlay").classList.toggle("active");
    }

    function addToCart(name, price, img) {
      cart.push({name, price, img});
      displayCart();
      toggleCart(); // show popup when item is added
    }

    function displayCart() {
      const cartItems = document.getElementById("cartItems");
      cartItems.innerHTML = "";

      if(cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty</p>";
        return;
      }

      cart.forEach((item, index) => {
        cartItems.innerHTML += `
          <div class="cart-item">
            <div class="thumb" style="background-image:url('${item.img}')"></div>
            <div>
              <h4>${item.name}</h4>
              <p>$${item.price}</p>
              <button onclick="removeItem(${index})" class="remove-btn">Remove</button>
            </div>
          </div>
        `;
      });
    }

    function removeItem(index) {
      cart.splice(index, 1);
      displayCart();
    }
// login and reg box
function openPopup() {
      document.getElementById("popup").style.display = "flex";
    }

    // Close popup
    function closePopup() {
      document.getElementById("popup").style.display = "none";
    }

    // Switch forms
    function showRegister() {
      document.getElementById("loginForm").classList.add("hidden1");
      document.getElementById("registerForm").classList.remove("hidden1");
      clearMessages();
    }

    function showLogin() {
      document.getElementById("registerForm").classList.add("hidden1");
      document.getElementById("loginForm").classList.remove("hidden1");
      clearMessages();
    }

    function clearMessages() {
      document.getElementById("loginMsg").textContent = "";
      document.getElementById("regMsg").textContent = "";
    }

    // Demo Login
    function login() {
      let user = document.getElementById("loginUser").value.trim();
      let pass = document.getElementById("loginPass").value.trim();
      let msg = document.getElementById("loginMsg");
      if(user === "" || pass === "") {
        msg.textContent = "❌ Enter username & password!";
        msg.className = "message error";
      } else if(pass.length < 6) {
        msg.textContent = "❌ Password too short!";
        msg.className = "message error";
      } else {
        msg.textContent = "✅ Login Successful (Demo)";
        msg.className = "message success";
        setTimeout(closePopup, 1500);
      }
    }

    // Demo Register
    function register() {
     let user = document.getElementById("regUser").value.trim();
      let email = document.getElementById("regEmail").value.trim();
      let pass = document.getElementById("regPass").value.trim();
      let msg = document.getElementById("regMsg");

      if(user === "" || email === "" || pass === "") {
        msg.textContent = "❌ All fields are required!";
        msg.className = "message error";
      } else if(pass.length < 6) {
        msg.textContent = "❌ Password must be at least 6 characters!";
        msg.className = "message error";
      } else if(!email.includes("@") || !email.includes(".")) {
        msg.textContent = "❌ Invalid email format!";
        msg.className = "message error";
      } else {
        msg.textContent = "✅ Registration Successful (Demo)";
        msg.className = "message success";
        setTimeout(showLogin, 1500);
      }
    }
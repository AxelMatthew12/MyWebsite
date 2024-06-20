window.onscroll = function() {
    scrollFunction();
    toggleFooterVisibility();
};

function scrollFunction() {
    var navbar = document.getElementById("navbar");
    var logo = document.getElementById("logo");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.style.padding = "10px 10px";
        logo.style.fontSize = "25px";
    } else {
        navbar.style.padding = "15px 10px";
        logo.style.fontSize = "35px";
    }
}

function toggleFooterVisibility() {
    const footer = document.querySelector('.footer');
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        footer.classList.add('visible');
    } else {
        footer.classList.remove('visible');
    }
}

// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to add fade-in class when element is in viewport
  function addFadeInClass() {
    const profileContainer = document.querySelector('.profile-container');
    if (isInViewport(profileContainer)) {
      const profileImage = profileContainer.querySelector('img');
      profileImage.classList.add('fade-in');
    }
  }
  
  // Listen for scroll events and check if element is in viewport
  window.addEventListener('scroll', function() {
    addFadeInClass();
  });
  
  // Initially check on page load
  addFadeInClass();
  
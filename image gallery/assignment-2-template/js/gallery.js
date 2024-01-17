document.addEventListener("DOMContentLoaded", function () {
    const featuredImage = document.getElementById("featuredImage");
    const imageCaption = document.getElementById("imageCaption");
    const thumbnailList = document.getElementById("thumbnailList");
  
    const images = [
      { src: "images/flowers-pink-large.jpg", alt: "Pink Flowers", caption: "Anemone in the hamlet Dernekamp, Kirchspiel, Dülmen, North Rhine-Westphalia, Germany" },
      { src: "images/flowers-purple-small.jpg", alt: "Purple Flowers", caption: "Catmint in cornfield, Dülmen, North Rhine-Westphalia, Germany" },
      { src: "images/flowers-red-small.jpg", alt: "Red Flowers", caption:"Purple Flowers", caption: "Poppies in cornfield, Dülmen, North Rhine-Westphalia, Germany"  },
      { src: "images/flowers-white-small.jpg", alt: "White Flowers", caption: "Sentmaring Park, Münster, North Rhine-Westphalia, Germany" },
      { src: "images/flowers-yellow-small.jpg", alt: "Yellow Flowers", caption:"Sunflowers in the hamlet Dernekamp, Kirchspiel, Dülmen, North Rhine-Westphalia, Germany"}
    ];
  
    images.forEach(function (image, index) {
      const listItem = document.createElement("li");
      const thumbnail = document.createElement("img");
  
      thumbnail.src = image.src;
      thumbnail.alt = image.alt;
      thumbnail.dataset.index = index;
  
      listItem.appendChild(thumbnail);
      thumbnailList.appendChild(listItem);
    });
  
    thumbnailList.addEventListener("click", function (event) {
      if (event.target.tagName === "IMG") {
        const clickedIndex = event.target.dataset.index;
        const clickedImage = images[clickedIndex];
  
        featuredImage.src = clickedImage.src;
        featuredImage.alt = clickedImage.alt;
        imageCaption.textContent = clickedImage.caption;
  
        thumbnailList.querySelectorAll("img").forEach(function (thumb) {
          thumb.classList.remove("active");
        });
  
        event.target.classList.add("active");
      }
    });
  
    // Set the initial featured image
    featuredImage.src = images[0].src;
    featuredImage.alt = images[0].alt;
    imageCaption.textContent = images[0].caption;
  });
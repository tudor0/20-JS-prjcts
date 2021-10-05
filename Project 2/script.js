const count = 10,
  imgContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");
let photosArray = [];
const apikey = `placeholder`;
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apikey}&count=${count}`;

// Create elements for link and photos, and we add to dom
function displayPhotos() {
  photosArray.forEach((photo) => {
    // Create <a> to link to photo
    const item = document.createElement("a");
    setAttributes(item, {
        href: photo.links.html,
        target: '_blank',
      });
      // Create <img> for photo
      const img = document.createElement('img');
      setAttributes(img, {
        src: photo.urls.regular,
        alt: photo.alt_description,
        title: photo.alt_description,
      });
      // Put <img> inside <a>, then put both inside imageContainer Element
      item.appendChild(img);
      imageContainer.appendChild(item);
  });
}

// Get photos


async function getPhotos() {
    try {
      const response = await fetch(apiURL);
      photosArray = await response.json();
      displayPhotos();
    } catch (error) {
      // Catch Error Here
      console.log
    }
  }





// On load
getPhotos();

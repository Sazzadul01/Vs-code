const catButton = document.querySelector("#categoryButton");

// const categories = ["art" ,"sports"]

fetch("https://basic-blog.teamrabbil.com/api/post-categories")
  .then(response => response.json())
  .then(data => {
    data.forEach(e1 => {
      catButton.innerHTML += `<button class="px-4 py-2 bg-blue-500 text-white m-1 rounded">${e1.name}</button>`;
    });
  });


  // https://basic-blog.teamrabbil.com/api/post-list/3
  // https://basic-blog.teamrabbil.com/api/post-newest
  // https://basic-blog.teamrabbil.com/api/post-details/1

  const postlist = document.querySelector("#postlist");

  fetch("https://basic-blog.teamrabbil.com/api/post-newest")
    .then(response => response.json())
    .then(data => {
      data.forEach(post => {
        postlist.innerHTML += `
          <article>
            <div class="max-w-sm bg-white rounded-xl shadow-md overflow-hidden m-4">
              <img class="w-full h-48 object-cover" src="${post.img}" alt="${post.title}">
              <div class="p-4">
                <h2 class="text-xl font-semibold mb-2">${post.title}</h2>
                <p class="text-gray-600 text-sm mb-4">
                  ${post.short}
                </p>
                <a href="post-details.html?id=${post.id}" class="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Read More</a>
              </div>
            </div>
          </article>
        `;
      });
    });
  
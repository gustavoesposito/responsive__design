// Make Cards 

const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const videos = [
    {
        title: "Formulário Animado com JS puro e CSS animation",
        duration: "57min",
        thumb: "https://i.ytimg.com/vi/GykTLqODQuU/hqdefault.jpg",
        video_id: "GykTLqODQuU"
    },
    {
        title: "Desvendando p CSS Grid  na prática",
        duration:"36min"
        thumb: "https://i.ytimg.com/vi/HN1UjzRSdBk/hqdefault.jpg",
        video_id: "HN1UjzRSdBk"
    }
    {
        title: "Array: Higher Order Functions | Mayk Brito",
        duration: "54 min",
        thumb: "https://i.ytimg.com/vi/rAzHvYnQ8DY/hqdefault.jpg",
        video_id: "rAzHvYnQ8DY"
      },
      {
        title: "O que é API? REST e RESTful? | Mayk Brito",
        duration: "33 min",
        thumb: "https://i.ytimg.com/vi/ghTrp1x_1As/hqdefault.jpg",
        video_id: "ghTrp1x_1As"
      },
      {
        title: "Desvendando a variável this no Javascript | Mayk Brito",
        duration: "48 min",
        thumb: "https://i.ytimg.com/vi/GSqR2i-Pq6o/hqdefault.jpg",
        video_id: "GSqR2i-Pq6o"
      },
      {
        title:
          "Como usar Git e Github na prática: Guia para iniciantes | Mayk Brito",
        duration: "33 min",
        thumb: "https://i.ytimg.com/vi/2alg7MQ6_sI/hqdefault.jpg",
        video_id: "2alg7MQ6_sI"
      }
];

videos.map( video => {
    const cardClone = card.cloneNode(true);
    cardClone.setAttribute("id" , video.video_id);
    cardClone.querySelector("img").src = video.thumb;
    cardClone.querySelector(".title").innerHTML = video.title;

    cardClone.querySelector(".info > p.text--medium").innerHTML = video.duration
    sectionCards.appendChild(cardClone);
});

card.remove();

// Modal Actions

 const modalOverlay = document.querySelector(".modal-overlay");
 const modal = document.querySelector
React.createElement(Card, { // первый вызов
    style: { // style - 1-ое свойство JavaScript объекта
        backgroundColor: `rgb(${initialColor}, ${opacity})`
    },
    className: "m-2" // className - 2-ое свойство JavaScript объекта
},  React.createElement(Card.Img, { // второй вызов
    variant: "top",
    style: imageLoaded ? {
        opacity: 1,
        transition: 'opacity 2s ease-in-out'
    } : {
        opacity: 0
    },
   src: image,
    alt: title,
    onLoad: () => setImageLoaded(true) 
}));








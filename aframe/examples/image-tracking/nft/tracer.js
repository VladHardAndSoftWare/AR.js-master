// // выбираем нужный элемент
// console.log("connected");
// var target = document.querySelector('#target_1');

// // если jQuery
// var target = $('target_1')[0];
 
// // создаем новый экземпляр наблюдателя
// var observer = new MutationObserver(function(mutations) {
//   mutations.forEach(function(mutation) {
//     console.log(mutation.type);
//     console.log("detected");
//   });    
// });
 
// // создаем конфигурации для наблюдателя
// var config = { 
//     attributes: true, childList: true, characterData: true
// };

// const callback = function(mutationsList, observer) {
//     console.log("detected");
//     for (let mutation of mutationsList) {
//         if (mutation.type === 'childList') {
//             console.log('A child node has been added or removed.');
//         } else if (mutation.type === 'attributes') {
//             console.log('The ' + mutation.attributeName + ' attribute was modified.');
//         }
//     }
// };
 
// // запускаем механизм наблюдения
// observer.observe(target,  config);
 
// // позже, если надо, прекращаем наблюдение
// // observer.disconnect();



AFRAME.registerComponent('log', {
    schema: {type: 'string'},
  
    init: function () {
      var stringToLog = this.data;
      console.log(stringToLog);
    },

    // var TracingElement = document.querySelector('target_1');
    // TracingElement.getAttribute('visible');  
    
    tock: function (time, timeDelta) {
    console.log('tick');
    var TracingElement = document.querySelector('target_1');
    var TracerData = TracingElement.getAttribute('visible');
    console.log(TracerData);
    }


  });


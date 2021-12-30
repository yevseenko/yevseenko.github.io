function addScripts(arr, callback) {
  let count = arr.length;
  arr.map(item => {
    let script = document.createElement('script');
    script.setAttribute('src', item);
    script.onload = () => {
      count--;
      if (count == 0) callback();
    }
    document.head.appendChild(script);
  });
}

// function addScript(src, callback) {
//   let script = document.createElement('script');
//   script.setAttribute('src', src);
//   script.onload = () => {
//     back(callback);
//   };
//   document.head.appendChild(script);
// }

addScripts(["js/1.js", "js/2.js", "js/3.js"], function () {
  helloFromFirst();
});


// // var scripts = document.getElementsByTagName('script');
// // for (let item of scripts) {
// //   item.onload(function() {
// //     console.log
// //   })
// // }



// var getAllScript = function(callback) {
//   addScripts(callback);
// }

// function addScripts(callback) {
//   addScript(scripts, function(arr, callback) {
//     return callback();
//   });
// }

// addScripts(start);

// load: function(src, callback) {
//   var script = document.createElement('script'),
//       loaded;
//   script.setAttribute('src', src);
//   if (callback) {
//     script.onreadystatechange = script.onload = function() {
//       if (!loaded) {
//         callback();
//       }
//       loaded = true;
//     };
//   }
//   document.getElementsByTagName('head')[0].appendChild(script);
// }

// function addScript(arr, callback) {
//   arr.forEach(item => {
//     let script = document.createElement('script');
//     script.src = item;
//     script.async = false;
//     document.head.appendChild(script);
//     console.log('Script added');
//   });
//   hello(callback);
// }

// function hello(callback) {
//   console.log('Callback function after script added');
//   if (callback) callback();
// }
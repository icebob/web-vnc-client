var rfb = require('rfb2');
var r = rfb.createConnection({
  host: '192.168.2.110',
  port: 5900,
  password: 'qnet1234'
});

r.on('connect', function() {
  console.log('successfully connected and authorised');
  console.log('remote screen name: ' + r.title + ' width:' + r.width + ' height: ' + r.height);
});
/*
r.on('error', function(error) {
  throw new Error(error);
});

r.pointerEvent(100, 100, 0); // x, y, button state (bit mask for each mouse button)
r.keyEvent(40, 0);           // keycode, is down?
r.updateClipboard('send text to remote clipboard');

*/
// screen updates
r.on('rect', function(rect) {
  /*
   switch(rect.encoding) {
   rfb.encodings.raw:
      // rect.x, rect.y, rect.width, rect.height, rect.data
      // pixmap format is in r.bpp, r.depth, r.redMask, greenMask, blueMask, redShift, greenShift, blueShift
   rfb.encodings.copyRect:
      // pseudo-rectangle
      // copy rectangle from rect.src.x, rect.src.y, rect.width, rect.height, to rect.x, rect.y
   rfb.encodings.hextile:
      // not fully implemented
      rect.on('tile', handleHextileTile); // emitted for each subtile
   }
   */
  console.log(rect);
});
/*
r.on('resize', function(rect) {
  console.log('window size has been resized! Width: %s, Height: %s', rect.width, rect.height);
});

r.on('clipboard', function(newPasteBufData) {
  console.log('remote clipboard updated!', newPasteBufData);
});

r.on('bell', console.log.bind(null, 'Bell!!'));

// force update
// updates are requested automatically after each new received update
// you may want to have more frequent updates for high latency / high bandwith connection
r.requestUpdate(false, 0, 0, r.width, r.height); // incremental?, x, y, w, h
*/

//r.end(); // close connection

setInterval(function() {
  r.pointerEvent(Math.round(Math.random()*400), Math.round(Math.random() * 300), Math.round(Math.random())); // x, y, button state (bit mask for each mouse button)
}, 1000);
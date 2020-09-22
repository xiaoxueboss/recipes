'use strict';

module.exports = Franz => {
  const getMessages = function getMessages() {
    let directs = 0;
    if (document.getElementsByClassName('left_count').length > 0) {
      directs = parseInt(document.getElementsByClassName('left_count')[0].innerText, 10);
    }

    if (isNaN(directs)) {
      directs = 0;
    }

    Franz.setBadge(directs);
  };

  Franz.loop(getMessages);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZrL3dlYnZpZXcuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIkZyYW56IiwiZ2V0TWVzc2FnZXMiLCJkaXJlY3RzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibGVuZ3RoIiwicGFyc2VJbnQiLCJpbm5lclRleHQiLCJpc05hTiIsInNldEJhZGdlIiwibG9vcCJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsT0FBT0MsT0FBUCxHQUFrQkMsS0FBRCxJQUFXO0FBQzFCLFFBQU1DLGNBQWMsU0FBU0EsV0FBVCxHQUF1QjtBQUN6QyxRQUFJQyxVQUFVLENBQWQ7QUFDQSxRQUFJQyxTQUFTQyxzQkFBVCxDQUFnQyxZQUFoQyxFQUE4Q0MsTUFBOUMsR0FBdUQsQ0FBM0QsRUFBOEQ7QUFDNURILGdCQUFVSSxTQUFTSCxTQUFTQyxzQkFBVCxDQUFnQyxZQUFoQyxFQUE4QyxDQUE5QyxFQUFpREcsU0FBMUQsRUFBcUUsRUFBckUsQ0FBVjtBQUNEOztBQUVELFFBQUlDLE1BQU1OLE9BQU4sQ0FBSixFQUFvQjtBQUNsQkEsZ0JBQVUsQ0FBVjtBQUNEOztBQUVERixVQUFNUyxRQUFOLENBQWVQLE9BQWY7QUFDRCxHQVhEOztBQWFBRixRQUFNVSxJQUFOLENBQVdULFdBQVg7QUFDRCxDQWZEIiwiZmlsZSI6InZrL3dlYnZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IChGcmFueikgPT4ge1xuICBjb25zdCBnZXRNZXNzYWdlcyA9IGZ1bmN0aW9uIGdldE1lc3NhZ2VzKCkge1xuICAgIGxldCBkaXJlY3RzID0gMDtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGVmdF9jb3VudCcpLmxlbmd0aCA+IDApIHtcbiAgICAgIGRpcmVjdHMgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsZWZ0X2NvdW50JylbMF0uaW5uZXJUZXh0LCAxMCk7XG4gICAgfVxuXG4gICAgaWYgKGlzTmFOKGRpcmVjdHMpKSB7XG4gICAgICBkaXJlY3RzID0gMDtcbiAgICB9XG5cbiAgICBGcmFuei5zZXRCYWRnZShkaXJlY3RzKTtcbiAgfTtcblxuICBGcmFuei5sb29wKGdldE1lc3NhZ2VzKTtcbn07XG4iXX0=
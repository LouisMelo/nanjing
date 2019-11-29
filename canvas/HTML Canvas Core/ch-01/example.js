var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')

context.font = '38pt Arial'
context.fillStyle = 'cornflowerblue'
context.strokeStyle = 'blue'

// void ctx.fillText(text, x, y [, maxWidth]);
context.fillText('Hello Nanjing', canvas.width / 2 - 150,
                                  canvas.height / 2 + 15)

// void ctx.strokeText(text, x, y [, maxWidth]);
context.strokeText('Hello Nanjing', canvas.width / 2 - 150,
                                  canvas.height / 2 + 15)

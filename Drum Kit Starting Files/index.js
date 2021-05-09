noofdrum = document.querySelectorAll(".drum").length;
for(i=0;i<noofdrum;i++)
{
document.querySelectorAll("button")[i].addEventListener("click",function ()
{
  var buttonInner = this.innerHTML

    switch (buttonInner) {
      case 'w':
      var aud = new Audio("sounds/crash.mp3")
        aud.play();
        break;
        case 'a':
        var aud = new Audio("sounds/kick-bass.mp3");
        aud.play();
        case 's':
        var aud = new Audio("sounds/snare.mp3")
          aud.play();
          break;

          case 'd':
          var aud = new Audio("sounds/tom-1.mp3")
            aud.play();
            break;
            case 'j':
            var aud = new Audio("sounds/tom-2.mp3")
              aud.play();
              break;
              case 'k':
              var aud = new Audio("sounds/tom-3.mp3")
                aud.play();
                break;
                case 'l':
                var aud = new Audio("sounds/tom-4.mp3")
                  aud.play();
                  break;
      default:

    }

});
}

// var audio = new Audio('sounds/crash.mp3');
// audio.play();

function response(room, msg, sender, isGroupChat, replier, imageDB) {
   if (msg.trim().startsWith("@")) {
      var args = msg.substring(1, msg.length).split(" ");
      switch(args[0]) {
          case "도움말":
            Help.Mainhelp(replier);
            break;
          default:
            Bot.say("``\n알수없는 명령입니다.", replier);
            break;
          }
      }
}

const Help = {};
// 메인도움말을 출력하는 구문입니다.
Help.Mainhelp = function(replier) {
  replier.reply("┌──── PRBot(D) 1.0 ────┐\n\n  커맨드 -\n    @도움말\n\n└──── PRBot(D) 1.0 ────┘");
};

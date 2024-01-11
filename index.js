class Draw {
  cow() {
    return `
        ^__^
        (oo)\\\\_______
        (__)\\\\       )\\\\/\\\\
            ||----w |
            ||     ||
      `;
  }

  someanimel(says) {
    return `
        _.---._    /\\\\          
        ./'       "--'\\//  -------->( ${says && ""} )
      ./              o \\          
     /./\\  )______   \\__ \\        
    ./  / /\\ \\   | \\ \\  \\ \\       
       / /  \\ \\  | |\\ \\  \\ 7--- ooo ooo ooo ooo ooo ooo
        `;
  }
}

module.exports = new Draw();

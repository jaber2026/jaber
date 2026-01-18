
  // মাউসের রাইট-ক্লিক বন্ধ করা
  document.addEventListener('contextmenu', event => event.preventDefault());

  // গুরুত্বপূর্ণ কিবোর্ড শর্টকাট বন্ধ করা
  document.onkeydown = function(e) {
    // F12 (ইন্সপেক্ট এলিমেন্ট) বন্ধ করা
    if(event.keyCode == 123) {
       return false;
    }
    // Ctrl+Shift+I (ইন্সপেক্ট) বন্ধ করা
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
       return false;
    }
    // Ctrl+Shift+C (এলিমেন্ট সিলেক্টর) বন্ধ করা
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
       return false;
    }
    // Ctrl+Shift+J (কনসোল) বন্ধ করা
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
       return false;
    }
    // Ctrl+U (ভিউ সোর্স) বন্ধ করা
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
       return false;
    }
    // Ctrl+S (সেভ করা) বন্ধ করা
    if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) {
       return false;
    }
  };



  var _0x1a2b=["\x63\x6F\x6E\x74\x65\x78\x74\x6D\x65\x6E\x75","\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72","\x6B\x65\x79\x64\x6F\x77\x6E"];
document[_0x1a2b[2]](_0x1a2b[0],function(_0x3e2x1){_0x3e2x1[_0x1a2b[1]]()});
document[_0x1a2b[3]]=function(e){if(event.keyCode==123||(e.ctrlKey&&e.shiftKey&&(e.keyCode==73||e.keyCode==67||e.keyCode==74))||(e.ctrlKey&&(e.keyCode==85||e.keyCode==83))){return false}};




// কিবোর্ড শর্টকাট (Ctrl + , Ctrl - , Ctrl 0) বন্ধ করা
    document.addEventListener('keydown', function (e) {
        if (e.ctrlKey && (e.key === '=' || e.key === '-' || e.key === '0' || e.key === '+')) {
            e.preventDefault();
        }
    });

    // মাউসের চাকা দিয়ে জুম (Ctrl + Scroll) বন্ধ করা
    document.addEventListener('wheel', function (e) {
        if (e.ctrlKey) {
            e.preventDefault();
        }
    }, { passive: false });

    // পুরো ওয়েবসাইটে রাইট ক্লিক বন্ধ করা
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    // কিবোর্ডের শর্টকাট (Ctrl+C, Ctrl+U) বন্ধ করা
    document.onkeydown = function(e) {
        if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 85 || e.keyCode === 73)) {
            return false;
        }
    };








function alertMsg(msg) {
    alert(msg);
}
// alertMsg("sample alert msg");

funtion promptMsg(qus, def) {
   const resultmsg = prompt(qus, def);
   console.log(resultmsg);
}
// promptMsg("what is your name", "default name");

funtion cinfirmMsg(checkMsg) {
    const resultMsg = confirm(checkMsg);
    console.log(resultMsg);
}
confirmMsg("are your sure");


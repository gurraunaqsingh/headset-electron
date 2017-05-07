var electronInstaller = require('electron-winstaller');

resultPromise = electronInstaller.createWindowsInstaller({
  appDirectory: './build/Headset-win32-ia32',
  outputDirectory: './build/installer',
  authors: 'Alignment Digital',
  exe: 'Headset.exe',
  noMsi: true,
  iconUrl: './Headset.ico'

});

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));

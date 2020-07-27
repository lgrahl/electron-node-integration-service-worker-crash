console.info('App paths', self.module.paths);
console.info('App comlink', require('comlink'));
const worker = new Worker('worker.js');

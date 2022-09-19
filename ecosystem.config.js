module.exports = {
  apps : [{
    script: 'index.js',
    watch: '.'
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],

  deploy : {
    production : {
      user : 'sabarysh',
      host : '192.168.1.56',
      ref  : 'origin/master',
      repo : 'git@github.com/ulags-world/task3',
      path : '/home/sabarysh/Desktop/pm2_apps/thirdtask',
      'post-deploy' : 'npm install && pm2 start index.js',
    }
  }
};

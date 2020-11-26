module.exports = {
  apps : [{
    name:'server',
    script: 'index.js',
    instances:'1',
    autorestart: true,
      restart_delay: 5000,
      watch: false,
      max_memory_restart: "1G",
  }]
};

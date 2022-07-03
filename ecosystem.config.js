module.exports = {
  apps: [
    {
      name: 'vintage',
      script: 'yarn start:prod',
      watch: false,
      restart_delay: 10000,
      watch_delay: 10000,
      max_memory_restart: '400M',
    },
  ],
};

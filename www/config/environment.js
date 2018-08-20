/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'etc-galaxypool',
    environment: environment,
    baseURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // API host and port
      ApiUrl: '//115.146.122.111/',

      // HTTP mining endpoint
      HttpHost: 'http://etc.galaxypool.org',
      HttpPort: 8888,

      // Stratum mining endpoint
      StratumHost: 'etc.galaxypool.org',
      StratumPort: 8008,

      // Fee and payout details
      PoolFee: '0.5 %',
      PayoutThreshold: '0.5 ETC',
      PayoutInterval: '3 Hours',

      // For network hashrate (change for your favourite fork)
      BlockTime: 14.4

      // Coin ticket
      Unit: 'ETC',

      //Chart config
      highcharts: {
        main: {
          enabled: true,
          height: 300,
          type: 'areaspline',
          color: '#357ab3',
          title: '',
          ytitle: '',
          interval: 180000,
          chartInterval: 900000
        },
        account: {
          enabled: true,
          height: 300,
          type: 'spline',
          color: [ '', '' ],
          title: '',
          ytitle: '',
          interval: 180000,
          chartInterval: 900000,
          paymentInterval: 30000
        }
      }
    }
  };

  if (environment === 'development') {
    /* Override ApiUrl just for development, while you are customizing
      frontend markup and css theme on your workstation.
    */
    ENV.APP.ApiUrl = 'http://localhost:8080/'
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};

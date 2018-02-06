import { Meteor } from "meteor/meteor";

Meteor.setInterval(function() {
    console.log('inside setinterval');
    HTTP.call("GET", 'https://api.coinmarketcap.com/v1/ticker/', { headers: { "accept": "application/json" } },function (err, result) {
        var crypto = result.data;
        crypto.forEach(function(element) {
            CryptoMarketValue.update({ id: element.id }, {
                $set: { 
                    name: element.id,
                    symbol: element.symbol,
                    rank: parseInt(element.rank),
                    price_usd: element.price_usd,
                    price_btc: element.price_btc,
                    '24h_volume_usd': element["24h_volume_usd"],
                    market_cap_usd: element.market_cap_usd,
                    available_supply: element.available_supply,
                    total_supply: element.total_supply,
                    max_supply: element.max_supply,
                    percent_change_1h: parseFloat(element.percent_change_1h),
                    percent_change_24h: parseFloat(element.percent_change_24h),
                    percent_change_7d: parseFloat(element.percent_change_7d),
                    ts: new Date()
                }
              }, { upsert: true });
        }, this);
      });
}, 10000);
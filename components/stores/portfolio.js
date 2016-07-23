/*
* @Author: Andrey Starkov
* @Date:   2016-07-23 15:23:48
* @Last Modified by:   Andrey Starkov
* @Last Modified time: 2016-07-23 18:48:30
*/

import Reflux from 'reflux';
import Actions from '../actions/common';

var PortfolioStore = Reflux.createStore({
    listenables: [Actions],
    data: [],
    init: function() {
      this.fetchData();
     // this.listenTo(Actions.fetchData, this.fetchData)
    },
    fetchData: function() {
      var this_ = this;
      var url = 'http://localhost:3000/data/portfolio.json';

      $.getJSON(url, function (data) {
        console.log('PortfolioStore: ', data);
        this_.data = data;
        this_.trigger(this_.data);
      });
    }
});

module.exports = PortfolioStore;

import { createStore, combineReducers, applyMiddleware } from 'redux';

import reducers from './reducers';
import thunk from 'redux-thunk';

import { h0 } from '../common/fp';
import { ORDER_DEPART } from './constant';

export default createStore(
    combineReducers(reducers),
    {
        from: null,
        to: null,
        departDate: h0(Date.now()),
        highSpeed: false,
        trainList: [],
        // 耗时长短，出发早晚；
        orderType: ORDER_DEPART,
        // 只看有票
        onlyTickets: false,
        // 坐席类型： 数组，是后端返回的数据
        ticketTypes: [],
        // 用户的设置 坐席类型，多选
        checkedTicketTypes: {},
        // 车次类型： 数组
        trainTypes: [],
        checkedTrainTypes: {},
        // 出发车站：
        departStations: [],
        checkedDepartStations: {},
        // 到达车站：
        arriveStations: [],
        checkedArriveStations: {},
        departTimeStart: 0,
        departTimeEnd: 24,
        arriveTimeStart: 0,
        arriveTimeEnd: 24,
        isFiltersVisible: false,
        searchParsed: false,
    },
    applyMiddleware(thunk)
);

const axios = require('axios');



export const ServerRequest = async function(_url, _method, _params) {
	let header = {};
	let params = {};
	let data = {};

	if(_method === 'GET')
		params = _params;
	else if(_method === 'POST')
		data = _params;
	

	let resp = await axios({
		method: _method,
		url: 'http://222.238.100.247:3001' + _url,
		params: params,
		data: data,
		headers: header
	});

	return resp.data;
}

export const dateForm = function(date, type) {
	var year = date.getFullYear();
	var month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
	var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

	var hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
	var min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
	var sec = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();

	if(type === 'full')
		return year + '.' + month + '.' + day + ' ' + hour + ':' + min + ':' + sec;
	else if(type === 'min')
		return year + '.' + month + '.' + day;
}
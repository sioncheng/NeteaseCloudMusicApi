// 所有榜单介绍

module.exports = (query, request) => {
    return request(
        'POST', `https://music.163.com/weapi/toplist`, {},
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}
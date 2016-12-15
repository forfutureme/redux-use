/**
 * Created by huweijian on 2016/12/13.
 * @title
 */
function api(req, res) {

    res.json([
        {
            id: 1,
            text: '啊'
        },
        {
            id: 2,
            text: '哈'
        },
        {
            id: 3,
            text: '呦'
        }
    ]);
    console.log('ok');
}

module.exports = api;
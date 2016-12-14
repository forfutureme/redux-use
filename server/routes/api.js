/**
 * Created by huweijian on 2016/12/13.
 * @title
 */
function api(req, res) {

    res.json([
        {
            text: '啊'
        },
        {
            text: '哈'
        },
        {
            text: '呦'
        }
    ]);
    console.log('ok');
}

module.exports = api;
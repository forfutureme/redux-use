/**
 * Created by huweijian on 2016/12/19.
 * @title 封装fetch
 */

import fetch from 'isomorphic-fetch';

/**
 * 输出封装后的fetch
 * @param arg
 */
export default function toAjax(arg) {
    let {
        type = 'POST',
        contextType = 'application/x-www-form-urlencoded',
        params = {
            '_mt': 'none'
        }
    } = arg;
    /**
     * 统一处理接口返回，resolve正确返回，reject所有不正确返回
     */
    return new Promise(function (resolve, reject) {
        fetch(`http://localhost:3000/m.api`, {
            method: type,
            headers: {
                'Content-Type': contextType
            },
            body: JSON.stringify(params)
        })
            .then(response => response.json())
            .then(res => {
                if (res.meta.error == 200){
                    resolve(res.result);
                } else {
                    reject(res.meta.msg)
                }
            })
            .catch(function (err) {
                reject(err.meta.msg);
            })
    })
}

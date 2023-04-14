import sqlite3, {Database} from "sqlite3";
import {open} from 'sqlite';

//
// open({
//     filename: 'database.db',
//     driver: sqlite3.Database
// }).then(db => {
//     console.log(db);
// })
//

export default class DBHelper {
    private db: Database

    constructor(dbFile: string) {
        this.db = new sqlite3.Database(dbFile);
    }

    /**
     * 初始化数据表
     */
    init() {
        this.db.run('create table if not exists m1 (serial text, building text, path text)');
    }

    /**
     * 执行 sql
     * @param sql
     * @param params
     */
    run(sql, params) {
        return new Promise((resolve, reject) => {
            this.db.run(sql, params, err => {
                if (err) {
                    reject(err);
                } else {
                    resolve(null);
                }
            })
        });
    }

    /**
     * 获取所有结果
     * @param sql
     * @param params
     */
    all(sql, params) {
        return new Promise((resolve, reject) => {
            this.db.all(sql, params, (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            })
        })
    }

    /**
     * 获取一行结果
     * @param sql
     * @param params
     */
    get(sql, params) {
        return new Promise((resolve, reject) => {
            this.db.get(sql, params, (err, row) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(row);
                }
            })
        })
    }

    /**
     * 关闭数据库
     */
    close() {
        return new Promise((resolve, reject) => {
            this.db.close(err => {
                if (err) {
                    reject(err);
                } else {
                    resolve(null);
                }
            })
        })
    }
}